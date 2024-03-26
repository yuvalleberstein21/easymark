const express = require('express');
const protect = require('../middleware/AuthMiddleware');
const asyncHandler = require('express-async-handler');
const Business = require('../Models/BusinessModel');
const User = require('../Models/UserModel');
const Service = require('../Models/ServiceModel');
const businessRoutes = express.Router();
const { ObjectId } = require('mongoose');
const fs = require('fs');
const AWS = require('aws-sdk');

const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: 'eu-north-1'
});


// CREATE BUSINESS - PROTECTED
businessRoutes.post("/createbusiness", protect, asyncHandler(
    async (req, res) => {
        const {
            businessName,
            location,
            hoursOfOperation,
            images,
            services,
        } = req.body;

        const businessNameExist = await Business.findOne({ businessName });
        if (businessNameExist) {
            return res.status(400).json({ message: 'Business name already exists' });
        }

        // Upload images to AWS S3
        const uploadedImages = await Promise.all(images.map(async (image) => {
            const imageUrl = image.imageUrl;
            try {
                const bucketName = process.env.BUCKET_NAME
                const newFileNameKey = 'images/' + imageUrl
                const filePath = `./${imageUrl}`

                const fileStream = fs.createReadStream(filePath)
                fileStream.on('error', (err) => {
                    console.log(err)
                });

                const params = {
                    Bucket: bucketName,
                    Key: newFileNameKey,
                    Body: fileStream
                };

                // Wait for the upload to finish before proceeding
                const data = await s3.upload(params).promise();
                console.log('Success', data.Location);
                return data.Location;
            } catch (error) {
                console.error("Error uploading image to S3:", error);
                throw error;
            }
        }));
        const business = new Business({
            user: req.user._id,
            businessName,
            location,
            hoursOfOperation,
            images: uploadedImages,
        });

        // Save business to the database
        if (services && services.length > 0) {
            const serviceObjects = await Service.create(services.map(service => ({
                business: business._id,
                ...service
            })));
            business.services = serviceObjects.map(service => service._id);
        }

        const createdBusiness = await business.save();

        await User.findByIdAndUpdate(req.user._id, { role: 'manager' });
        res.status(201).json(createdBusiness);
    }
));

// GET ALL BUSINESS
businessRoutes.get("/", asyncHandler(
    async (req, res) => {
        const business = await Business.find()
        if (business.length > 0) {
            res.json(business);
        } else {
            return res.status(404).send({ message: 'cannot find businesses' });
        }
    }
));

// GET BUSINESS BY ID
businessRoutes.get("/:id", asyncHandler(
    async (req, res) => {
        try {
            const business = await Business.findById(req.params.id).populate('services');
            if (business) {
                res.send(business);
            } else {
                res.status(404).send({ message: 'Cannot find business' });
            }
        } catch (error) {
            res.status(500).send({ message: 'Error finding business', error });
        }
    }
));

// GET ALL USER BUISNESSES BY USER ID
businessRoutes.get("/userbusiness/:userId", asyncHandler(
    async (req, res) => {
        const userId = req.params.userId;
        try {
            const businesses = await Business.find({ user: userId });
            if (businesses.length > 0) {
                res.send(businesses);
            } else {
                res.status(404).send({ message: 'No businesses found for this user' });
            }
        } catch (error) {
            res.status(500).send({ message: 'Error finding businesses', error });
        }
    }
));


// EDIT BUSINESS - PROTECTED

businessRoutes.put("/:id", protect, asyncHandler(
    async (req, res) => {
        const {
            businessName,
            location,
            hoursOfOperation,
            images,
            services,
        } = req.body;
        try {
            const business = await Business.findByIdAndUpdate(req.params.id, {
                user: req.user._id,
                businessName,
                location,
                hoursOfOperation,
                images,
                services,
            }, { new: true });
            if (business) {
                res.status(200).send({ message: 'Business updated successfully', business });
            } else {
                res.status(404).send({ message: 'Cannot find business' });
            }
        } catch (error) {
            console.log(error);
            res.status(500).send({ message: 'Error updating business', error });
        }
    }
));

module.exports = businessRoutes;

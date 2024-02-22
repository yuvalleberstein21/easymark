const express = require('express');
const protect = require('../middleware/AuthMiddleware');
const asyncHandler = require('express-async-handler');
const Business = require('../Models/BusinessModel');
const User = require('../Models/UserModel');
const businessRoutes = express.Router();

// businessRoutes.post('/', protect, businessController.createBusiness);
// businessRoutes.get('/', businessController.getAllBusinesses);
// businessRoutes.get('/:id', businessController.getBusinessById);
// businessRoutes.put('/:id', protect, businessController.updateBusiness);
// businessRoutes.delete('/:id', protect, businessController.deleteBusiness);



// CREATE BUSINESS - PROTECTED

businessRoutes.post("/createbusiness", protect, asyncHandler(
    async (req, res) => {
        const {
            businessName,
            streetAddress,
            city,
            hoursOfOperation,
            images,
            services,
        } = req.body;

        const businessNameExist = await Business.findOne({ businessName });
        if (businessNameExist) {
            return res.status(401).send({ message: 'Business name already exists' });
        }
        const business = new Business({
            user: req.user._id,
            role: req.user.role,
            businessName,
            hoursOfOperation,
            location: {
                streetAddress,
                city
            },

            images,
            services,
        })

        const createBusiness = await business.save();
        // Update the user's role to "manager"
        await User.findByIdAndUpdate(req.user._id, { role: 'manager' });
        res.status(201).json(createBusiness);
    }
));



// GET ALL BUSINESS
businessRoutes.get("/", asyncHandler(
    async (req, res) => {
        const business = await Business.find();
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
            const business = await Business.findById(req.params.id);
            if (business) {
                res.json({ business });
            } else {
                res.status(404).send({ message: 'Cannot find business' });
            }
        } catch (error) {
            res.status(500).send({ message: 'Error finding business', error });
        }
    }
));


// EDIT BUSINESS - PROTECTED

businessRoutes.put("/:id", protect, asyncHandler(
    async (req, res) => {
        try {
            const business = await Business.findById(req.params.id);
            if (business) {
                res.json({ business });
            } else {
                res.status(404).send({ message: 'Cannot find business' });
            }
        } catch (error) {
            res.status(500).send({ message: 'Error finding business', error });
        }
    }
));

module.exports = businessRoutes;

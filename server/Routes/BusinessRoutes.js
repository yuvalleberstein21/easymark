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

businessRoutes.post("/createbusiness", protect, asyncHandler(
    async (req, res) => {
        const {
            businessName,
            streetAddress,
            city,
            dayOfWeek,
            openTime,
            closeTime,
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
            location: {
                streetAddress,
                city
            },
            hoursOfOperation: [{
                dayOfWeek,
                openTime,
                closeTime
            }],
            images,
            services,
        })

        const createBusiness = await business.save();
        // Update the user's role to "manager"
        await User.findByIdAndUpdate(req.user._id, { role: 'manager' });
        res.status(201).json(createBusiness);
    }

));

module.exports = businessRoutes;

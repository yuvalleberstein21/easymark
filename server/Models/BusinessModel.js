const mongoose = require('mongoose');
const businessSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    businessName: {
        type: String,
        required: true
    },
    location: {
        streetAddress: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
    },
    hoursOfOperation: [{
        dayOfWeek: {
            type: String,
            required: true
        },
        openTime: {
            type: String,
            required: true
        },
        closeTime: {
            type: String,
            required: true
        },
        timeDifference: {
            type: String,
            required: true
        }
    }],
    images: [{
        imageUrl: {
            type: String,
            required: true
        }
    }],
    services: [{
        serviceName: {
            type: String,
            required: true
        },
        description: String,
        price: {
            type: Number,
            required: true
        }
    }],
    reviews: [{
        rating: {
            type: Number,
        },
        comment: String,
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User",
        }
    }]
}, {
    timestamps: true
});

const Business = mongoose.model('Business', businessSchema);
module.exports = Business
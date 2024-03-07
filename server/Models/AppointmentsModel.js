const mongoose = require('mongoose');


const appointmentSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    business: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Business',
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    startTime: {
        type: String,
        required: true
    },
    service: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Service'
    },
    notes: String
}, {
    timestamps: true
});

// Before saving the appointment, parse the date string into a Date object
appointmentSchema.pre('save', function (next) {
    if (this.date && typeof this.date === 'string') {
        this.date = new Date(this.date);
    }
    next();
});

const Appointment = mongoose.model('Appointment', appointmentSchema);
module.exports = Appointment;
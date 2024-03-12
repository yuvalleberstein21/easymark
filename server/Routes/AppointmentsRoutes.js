const express = require('express');
const protect = require('../middleware/AuthMiddleware');
const asyncHandler = require('express-async-handler');
const Appointment = require('../Models/AppointmentsModel');
const Service = require('../Models/ServiceModel');
const appointmentsRoutes = express.Router();



appointmentsRoutes.post("/", protect, asyncHandler(
    async (req, res) => {
        try {
            const { user, business, date, startTime, service, notes } = req.body;

            const appointment = new Appointment({
                user,
                business,
                date,
                startTime,
                service,
                notes
            });

            await appointment.save();

            res.status(201).json(appointment);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }
));

appointmentsRoutes.get("/getUserAppointment/:userId", asyncHandler(
    async (req, res) => {
        try {

            const userId = req.params.userId;

            const appointments = await Appointment.find({ user: userId }).populate('business').populate({ path: 'user', select: '-password' });;

            if (appointments.length > 0) {
                res.json(appointments);
            } else {
                res.status(404).json({ error: 'No appointments found for this user' });
            }

        } catch (err) {
            console.error(err);
            // Handle error
            res.status(500).json({ error: 'Internal server error' });
        }
    }
));

appointmentsRoutes.get("/:id", asyncHandler(
    async (req, res) => {
        try {

            const businessId = req.params.id;

            const appointments = await Appointment.find({ business: businessId })
                .populate('user')

            if (appointments.length > 0) {
                res.json(appointments);
            }

        } catch (err) {
            console.error(err);
            // Handle error
            res.status(500).json({ error: 'Internal server error' });
        }
    }
));

appointmentsRoutes.delete("/:id", asyncHandler(
    async (req, res) => {
        try {
            const apppointmentId = req.params.id;

            const appointments = await Appointment.findByIdAndDelete(apppointmentId)

            if (appointments) {
                res.status(200).send('Appointment deleted successfully')
            } else {
                res.status(404).send('Appointment not found');
            }

        } catch (err) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }
));



// ADMIN ROUTES

appointmentsRoutes.get("/manager/allappointments/:businessId", protect, asyncHandler(
    async (req, res) => {
        try {

            const businessId = req.params.businessId;

            const appointments = await Appointment.find({ business: businessId })
                .populate({ path: 'user', select: '-password' })
                .populate({
                    path: 'services',
                    select: 'serviceName'

                });

            if (appointments.length > 0) {
                res.json(appointments);
            } else {
                res.status(404).send({ message: 'No appointments found for this business' });
            }

        } catch (err) {
            console.error(err);
            // Handle error
            res.status(500).json({ error: 'Internal server error' });
        }
    }
));


module.exports = appointmentsRoutes;
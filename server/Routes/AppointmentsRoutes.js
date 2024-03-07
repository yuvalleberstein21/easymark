const express = require('express');
const protect = require('../middleware/AuthMiddleware');
const asyncHandler = require('express-async-handler');
const Appointment = require('../Models/AppointmentsModel');
const appointmentsRoutes = express.Router();


// appointmentsRoutes.post('/', authMiddleware, appointmentController.createAppointment);
// appointmentsRoutes.get('/', authMiddleware, appointmentController.getAllAppointments);
// appointmentsRoutes.get('/:id', authMiddleware, appointmentController.getAppointmentById);
// appointmentsRoutes.put('/:id', authMiddleware, appointmentController.updateAppointment);
// appointmentsRoutes.delete('/:id', authMiddleware, appointmentController.deleteAppointment);

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

            const id = req.params.userId;

            const appointments = await Appointment.find({ user: id }).populate('business')

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







module.exports = appointmentsRoutes;
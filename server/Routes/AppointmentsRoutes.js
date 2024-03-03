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
            const { user, business, date, startTime, endTime, service, notes } = req.body;

            const appointment = new Appointment({
                user,
                business,
                date,
                startTime,
                endTime,
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

appointmentsRoutes.get("/:id", asyncHandler(
    async (req, res) => {
        const id = req.params.id;
        try {
            const appointment = await Appointment.find({ user: id });
            if (appointment.length > 0) {
                res.status(200).json(appointment);
            } else {
                res.status(404).send({ message: 'No appointments found for this user' });
            }

        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }
));





module.exports = appointmentsRoutes;
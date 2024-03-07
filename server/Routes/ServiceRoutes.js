const express = require('express');
const protect = require('../middleware/AuthMiddleware');
const asyncHandler = require('express-async-handler');
const Appointment = require('../Models/AppointmentsModel');
const Service = require('../Models/ServiceModel');
const serviceRoutes = express.Router();


// appointmentsRoutes.post('/', authMiddleware, appointmentController.createAppointment);
// appointmentsRoutes.get('/', authMiddleware, appointmentController.getAllAppointments);
// appointmentsRoutes.get('/:id', authMiddleware, appointmentController.getAppointmentById);
// appointmentsRoutes.put('/:id', authMiddleware, appointmentController.updateAppointment);
// appointmentsRoutes.delete('/:id', authMiddleware, appointmentController.deleteAppointment);

serviceRoutes.get("/", asyncHandler(
    async (req, res) => {
        try {
            const service = await Service.find();

            if (service) {
                res.send(service);
            } else {
                res.status(404).send({ message: 'Cannot find service' });
            }

        } catch (err) {
            console.error(err);
            // Handle error
            res.status(500).json({ error: 'Internal server error' });
        }
    }
));

module.exports = serviceRoutes;
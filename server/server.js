const express = require('express');
const dotenv = require("dotenv");
const cors = require('cors');
const userRoutes = require('./Routes/UserRoutes');
const businessRoutes = require('./Routes/BusinessRoutes');
const appointmentsRoutes = require('./Routes/AppointmentsRoutes');
const connectDatabase = require('./config/MongoDB');
const serviceRoutes = require('./Routes/ServiceRoutes');
const AWS = require('aws-sdk');

dotenv.config();
connectDatabase();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: 'eu-north-1',
});

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));

// Handle CORS errors
app.use((err, req, res, next) => {
    if (err.message === 'Not allowed by CORS') {
        res.status(403).json({ error: 'Not allowed by CORS' });
    } else {
        next(err);
    }
});

app.use("/api/users", userRoutes);
app.use("/api/business", businessRoutes);
app.use("/api/appointments", appointmentsRoutes);
app.use("/api/service", serviceRoutes);


app.get('/', (req, res) => {
    res.send('hello world');
});


const PORT = process.env.PORT || 1000;

app.listen(PORT, console.log(`server run on port ${PORT}`));


const express = require('express');
const dotenv = require("dotenv");
const cors = require('cors');

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
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

app.get('/', (req, res) => {
    res.send('hello world');
});


const PORT = process.env.PORT || 1000;

app.listen(PORT, console.log(`server run on port ${PORT}`));


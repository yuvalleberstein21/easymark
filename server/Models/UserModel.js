const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    phoneNumber: {
        type: Number,
        require: true,
        unique: true
    },
},
    {
        timestamps: true
    }
);



const User = mongoose.model('User', userSchema);
module.exports = User;
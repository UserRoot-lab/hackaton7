const mongoose = require("mongoose")
const { Schema } = mongoose


const schemaUser = new Schema({
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true, index: true, unique: true },
    password: { type: String, required: false },
    admin: { type: Boolean, default: true },
    points: {type: Number , default: 0 }
});

module.exports = mongoose.model('user', schemaUser)
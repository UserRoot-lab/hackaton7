const mongoose = require("mongoose")
const { Schema } = mongoose


const schemaUser = new Schema({
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    email: { type: String, required: true, index: true, unique: true },
    password: { type: String, required: false },
    admin: { type: Boolean, default: true },
});

module.exports = mongoose.model('user', schemaUser)
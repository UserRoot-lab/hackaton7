const mongoose = require("mongoose")
const { Schema } = mongoose


const schemaTask = new Schema({
    titulo : {type: String , required: true},
    desciption : {type: String , required: true},
    checked : {type: Boolean , default: false},
    points : {type: Number , required: true}
});

module.exports = mongoose.model('task', schemaTask)
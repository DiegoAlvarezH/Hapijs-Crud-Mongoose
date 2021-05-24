//Schema, use for save mongodDB
const {Schema, model } = require('mongoose');

const taskSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: String
})

module.exports = model('Task', taskSchema)
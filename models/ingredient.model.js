const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const schema = new Schema({
        userId: { type: String, required: true },
        name: { type: String, unique: true, required: true },
        number: { type: Number, required: true },
        units: { type: String, required: true }
    }
);

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Ingredient', schema);
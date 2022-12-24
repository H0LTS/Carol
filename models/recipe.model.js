const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const schema = new Schema({
        userId: { type: String, required: true },
        name: { type: String, unique: true, required: true },
        description: { type: String, required: true },
        steps: { type: String, required: true },
        ingredientsNames: { type: String, required: true },
        ingredientsAmounts: { type: String, required: true },
        ingredientsUnits: { type: String, required: true }
    }
);

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Recipe', schema);
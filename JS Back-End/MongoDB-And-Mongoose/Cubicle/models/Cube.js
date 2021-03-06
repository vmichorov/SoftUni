const { model, Schema } = require('mongoose');

const schema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true, maxLength: 300 },
    imageUrl: { type: String, required: true, match: /^https?:\/\// },
    difficultyLevel: { type: Number, min: 1, max: 6 },
    accessories: [{ type: Schema.Types.ObjectId, ref: 'Accessory' }]
});

module.exports = model('Cube', schema);
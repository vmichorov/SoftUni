const { model, Schema } = require('mongoose');

const schema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true, maxLength: 300 },
    imageUrl: { type: String, required: true, match: /^https?:\/\// }
});

module.exports = model('Accessory', schema);
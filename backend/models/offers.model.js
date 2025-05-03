const mongoose = require('mongoose');

const offerSchema = new mongoose.Schema({
    offer_name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    start_date: {
        type: Date,
        required: true
    },
    end_date: {
        type: Date,
        required: true
    },
    pricing: {
        type: Number,
        required: true
    },
    discount: {
        type: Number,
        required: true
    }
}, { timestamps: true });

const Offer = mongoose.model('Offer', offerSchema);

module.exports = Offer;
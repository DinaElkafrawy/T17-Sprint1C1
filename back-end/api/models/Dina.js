var mongoose = require('mongoose');

var dinaSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    component: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    seller: {
        type: String,
        lowercase: true,
        trim: true,
        default: 'DinaHisham'
    }
});

mongoose.model('Dina', dinaSchema);

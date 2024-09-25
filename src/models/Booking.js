const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var mongoose_delete = require('mongoose-delete');

const Booking = new Schema(
    {
        name: { type: String, require: true },
        email: { type: String, require: true },
        phone: { type: Number, require: true },
        campus: { type: String, require: true },
        daycome: { type: String },
        hour: { type: String },
        minute: { type: String },
        combo: { type: String },
        note: { type: String },
    },
    {
        timestamps: true,
    },
);

// Add plugin
Booking.plugin(mongoose_delete, { deletedAt: true, overrideMethods: 'all' });

module.exports = mongoose.model('Booking', Booking);

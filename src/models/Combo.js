const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-updater');
var mongoose_delete = require('mongoose-delete');

const Combo = new Schema(
    {
        name: { type: String },
        service: { type: String },
    },
    {
        timestamps: true,
    },
);

// Add plugin
Combo.plugin(mongoose_delete, { deletedAt: true, overrideMethods: 'all' });

module.exports = mongoose.model('Combo', Combo);

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-updater');
var mongoose_delete = require('mongoose-delete');

const Branch = new Schema(
    {
        name: { type: String },
        image: { type: String },
        description: { type: String },
        address: { type: String },
        phone: {type: Number},
        opening_hours: {type: Number},
        closing_hours: {type: Number},
        content: {type: String},
        slug: { type: String, slug: 'name', unique: true },
    },
    {
        timestamps: true,
    },
);

// Add plugin
mongoose.plugin(slug);
Branch.plugin(mongoose_delete, { deletedAt: true, overrideMethods: 'all' });

module.exports = mongoose.model('Branch', Branch);

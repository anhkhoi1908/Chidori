const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-updater');
var mongoose_delete = require('mongoose-delete');

const Service = new Schema(
    {
        name: { type: String },
        image: { type: String},
        description: { type: Number},
    },
    {
        timestamps: true,
    },
);

// Add plugin
Service.plugin(mongoose_delete, { deletedAt: true, overrideMethods: 'all' });

module.exports = mongoose.model('Service', Service);

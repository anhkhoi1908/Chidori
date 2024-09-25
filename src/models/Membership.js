const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-updater');
var mongoose_delete = require('mongoose-delete');

const Membership = new Schema(
    {
        name: { type: String },
        phone: {type: Number},
        email: {type: String},
        birthday: {type: String},
        gender: {type: String}
    },
    {
        timestamps: true,
    },
);

// Add plugin
Membership.plugin(mongoose_delete, { deletedAt: true, overrideMethods: 'all' });

module.exports = mongoose.model('Membership', Membership);

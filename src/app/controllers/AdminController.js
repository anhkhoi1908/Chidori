const Booking = require('../../models/Booking');
const Branch = require('../../models/Branch');
const Service = require('../../models/Service');
const Membership = require('../../models/Membership');

class AdminController {
    // [GET] /admin/stored/bookings
    storedBookings(req, res, next) {
        // res.render('admin/stored-bookings');

        // Membership.find({})
        //     .lean()
        //     .then((bookings) => res.render('admin/stored/stored-bookings', { bookings }))
        //     .catch(next);

        Promise.all([Booking.find({}).lean(), Booking.countDocumentsWithDeleted({ deleted: true})])
            .then(([bookings, deletedCount]) =>
                res.render('admin/stored/stored-bookings', {
                    deletedCount,
                    bookings,
                    layout: 'admin'
                }),
            )
            .catch(next);
    }

    // [GET] /admin/stored/branches
    storedBranches(req, res, next) {
        // Branch.find({})
        //     .lean()
        //     .then((branches) => res.render('admin/stored-branches', { branches }))
        //     .catch(next);
        Promise.all([Branch.find({}).lean(), Branch.countDocumentsWithDeleted({ deleted: true })])
            .then(([branches, deletedCount]) =>
                res.render('admin/stored/stored-branches', {
                    deletedCount,
                    branches,
                    layout: 'admin'
                }),
            )
            .catch(next);
    }

    // [GET] /admin/trash/services
    storedServices(req, res, next) {
        // Service.find({})
        //     .lean()
        //     .then((services) => res.render('admin/stored/stored-services', { services }))
        //     .catch(next);
        Promise.all([Service.find({}).lean(), Service.countDocumentsWithDeleted({ deleted: true })])
            .then(([services, deletedCount]) =>
                res.render('admin/stored/stored-services', {
                    deletedCount,
                    services,
                    layout: 'admin'
                }),
            )
            .catch(next);
    }

    // [GET] /admin/trash/services
    storedMemberships(req, res, next) {
        // Service.find({})
        //     .lean()
        //     .then((services) => res.render('admin/stored/stored-services', { services }))
        //     .catch(next);
        Promise.all([Membership.find({}).lean(), Membership.countDocumentsWithDeleted({ deleted: true })])
            .then(([memberships, deletedCount]) =>
                res.render('admin/stored/stored-memberships', {
                    deletedCount,
                    memberships,
                    layout: 'admin'
                }),
            )
            .catch(next);
    }

    // [GET] /admin/trash/branches
    trashBranches(req, res, next) {
        Branch.findWithDeleted({ deleted: true })
            .lean()
            .then((branches) => res.render('admin/trash/trash-branches', { branches, layout: 'admin' }))
            .catch(next);
    }

    // [GET] /admin/trash/services
    trashServices(req, res, next) {
        Service.findWithDeleted({ deleted: true })
            .lean()
            .then((services) => res.render('admin/trash/trash-services', { services, layout: 'admin' }))
            .catch(next);
    }

    // [GET] /admin/trash/services
    trashBookings(req, res, next) {
        Booking.findWithDeleted({ deleted: true })
            .lean()
            .then((bookings) => res.render('admin/trash/trash-bookings', { bookings, layout: 'admin' }))
            .catch(next);
    }

    // [GET] /admin/trash/memberships
    trashMemberships(req, res, next) {
        Membership.findWithDeleted({ deleted: true })
            .lean()
            .then((memberships) => res.render('admin/trash/trash-memberships', { memberships, layout: 'admin' }))
            .catch(next);
    }
}

module.exports = new AdminController();

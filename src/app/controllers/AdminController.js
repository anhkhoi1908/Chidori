const Booking = require('../../models/Booking');
const Branch = require('../../models/Branch');

class AdminController {
    // [GET] /admin/bookings
    storedBookings(req, res, next) {
        // res.render('admin/stored-bookings');

        Booking.find({})
            .lean()
            .then((bookings) => res.render('admin/stored-bookings', { bookings }))
            .catch(next);
    }

    storedBranches(req, res, next) {
        // Branch.find({})
        //     .lean()
        //     .then((branches) => res.render('admin/stored-branches', { branches }))
        //     .catch(next);
        Promise.all([Branch.find({}).lean(), Branch.countDocumentsWithDeleted({ deleted: true })])
            .then(([branches, deletedCount]) =>
                res.render('admin/stored-branches', {
                    deletedCount,
                    branches,
                }),
            )
            .catch(next);
    }

    // [GET] /me/trash/courses
    // trashCourses(req, res, next) {
    //     Course.findWithDeleted({deleted: true})
    //         .lean()
    //         .then((courses) => res.render('me/trash-courses', { courses }))
    //         .catch(next);
    // }
}

module.exports = new AdminController();

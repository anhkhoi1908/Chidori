const Booking = require('../../models/Booking');

class AdminController {
    // [GET] /admin/bookings
    storedBookings(req, res, next) {
        // res.render('admin/stored-bookings');

        Booking.find({})
            .lean()
            .then((bookings) => res.render('admin/stored-bookings', { bookings}))
            .catch(next);

        //     Promise.all([Course.find({}).lean(), Course.countDocumentsWithDeleted({ deleted: true })])
        //         .then(([courses, deletedCount]) =>
        //             res.render('me/stored-courses', {
        //                 deletedCount,
        //                 courses,
        //             }),
        //         )
        //         .catch(next);
        // }

        // [GET] /me/trash/courses
        // trashCourses(req, res, next) {
        //     Course.findWithDeleted({deleted: true})
        //         .lean()
        //         .then((courses) => res.render('me/trash-courses', { courses }))
        //         .catch(next);
        // }
    }
}

module.exports = new AdminController();

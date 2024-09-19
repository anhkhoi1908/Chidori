const Booking = require('../../models/Booking');

class BookingController {
    // [GET] /bookings/new
    index(req, res, next) {
        res.render('clients/booking-new');
        // Booking.find({})
        //     .lean()
        //     .then((bookings) => res.render('clients/booking-new', { bookings }))
        //     .catch(next);
    }

    // [POST] /bookings/create
    create(req, res, next) {
        const formData = { ...req.body };
        const booking = new Booking(formData);
        booking
            .save()
            // res.send('Craete success!!!');
            .then(() => res.redirect('/'))
            .catch((error) => {});
    }
}

module.exports = new BookingController();

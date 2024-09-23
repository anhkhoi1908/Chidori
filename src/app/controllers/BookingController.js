const Booking = require('../../models/Booking');
const Branch = require('../../models/Branch');
const Combo = require('../../models/Combo');

class BookingController {
    // [GET] /bookings/new
    index(req, res, next) {
        // res.render('clients/booking-new');

        Promise.all([Branch.find({}).lean(), Combo.find({}).lean()])
            .then(([branches, combos]) => res.render('clients/booking-new', { branches, combos }))
            .catch(next);
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

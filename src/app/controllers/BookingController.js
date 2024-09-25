const Booking = require('../../models/Booking');
const Branch = require('../../models/Branch');
const Combo = require('../../models/Combo');

class BookingController {
    // [GET] /clients/bookings/new
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

    // [DELETE] /branches/:id
    delete(req, res, next) {
        // res.jon(req.body)
        Booking.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
    
    // [DELETE] /branches/:id/force
    forceDelete(req, res, next) {
        Booking.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
    
    // [PATCH] /branches/:id/restore
    restore(req, res, next) {
        Booking.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
}

module.exports = new BookingController();

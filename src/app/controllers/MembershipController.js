const Membership = require('../../models/Membership')

class MembershipController {
    // [GET] /membership
    index(req, res, next) {
        res.render('membership');

        // Promise.all([Branch.find({}).lean(), Service.find({}).lean()])
        //     .then(([branches, services]) => res.render('home', { branches, services }))
        //     .catch(next);
    }

    // [POST] /membership/create
    create(req, res, next) {
        const formData = { ...req.body };
        const membership = new Membership(formData);
        membership
            .save()
            // res.send('Craete success!!!');
            .then(() => res.redirect('/'))
            .catch((error) => {});
    }
}

module.exports = new MembershipController();

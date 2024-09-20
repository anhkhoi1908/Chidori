const Branch = require('../../models/Branch');
const Service = require('../../models/Service');

class HomeController {
    // [GET] /courses/:slug
    index(req, res, next) {
        // res.render('home');

        Promise.all([Branch.find({}).lean(), Service.find({}).lean()])
            .then(([branches, services]) => res.render('home', { branches, services }))
            .catch(next);
    }
}

module.exports = new HomeController();

const Branch = require('../../models/Branch');

class HomeController {
    // [GET] /courses/:slug
    index(req, res, next) {
        // res.render('home');
        Branch.find({})
            .lean()
            .then((branches) => res.render('home', { branches }))
            .catch(next);
    }
}

module.exports = new HomeController();

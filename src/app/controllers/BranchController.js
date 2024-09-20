const Branch = require('../../models/Branch');

class BranchController {
    // [GET] /branches/new
    new(req, res, next) {
        res.render('branches/new');
    }

    // [POST] /branches/create
    create(req, res, next) {
        const formData = { ...req.body };
        const branch = new Branch(formData);
        branch
            .save()
            // res.send('Craete success!!!');
            .then(() => res.redirect('/admin/stored/branches'))
            .catch((error) => {});
    }

    // [GET] /branches/:id/edit
    edit(req, res, next) {
        // res.render('branches/edit');
        Branch.findById(req.params.id)
            .lean()
            .then((branch) => res.render('branches/edit', { branch }))
            .catch(next);
    }

    // [PUT] /branches/:id
    update(req, res, next) {
        // res.jon(req.body)
        Branch.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/'))
            .catch(next);
    }
}

module.exports = new BranchController();

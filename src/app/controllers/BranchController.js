const Branch = require('../../models/Branch');

class BranchController {
    // [GET] /branches/new
    new(req, res, next) {
        res.render('branches/new', {layout: 'admin'});
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
            .then((branch) => res.render('branches/edit', { branch, layout: 'admin' }))
            .catch(next);
    }

    // [PUT] /branches/:id
    update(req, res, next) {
        // res.jon(req.body)
        Branch.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/admin/stored/branches'))
            .catch(next);
    }

    // [DELETE] /branches/:id
    delete(req, res, next) {
        // res.jon(req.body)
        Branch.delete({ _id: req.params.id })
            .then(() => res.redirect('/admin/stored/branches'))
            .catch(next);
    }

    // [DELETE] /branches/:id/force
    forceDelete(req, res, next) {
        Branch.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    // [PATCH] /branches/:id/restore
    restore(req, res, next) {
        Branch.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    // [GET] /branches/:slug
    detail(req, res, next) {
        // res.send('COURSE DETAILS');
        Branch.findOne({ slug: req.params.slug })
            .lean()
            // .then((course) => res.json(course))
            .then((branch) => res.render('branches/detail', { branch }))
            .catch(next);
    }

    // [GET] /branches/:id/admin_detail
    admin_detail(req, res, next) {
        Branch.findById(req.params.id)
            .lean()
            .then((branch) => res.render('branches/admin_detail', { branch, layout: 'admin' }))
            .catch(next);
    }
}

module.exports = new BranchController();

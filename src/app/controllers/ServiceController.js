const Service = require('../../models/Service');

class ServiceController {
    // [GET] /services/new
    new(req, res, next) {
        res.render('services/new', {layout: 'admin'});
    }

    // [POST] /services/create
    create(req, res, next) {
        const formData = { ...req.body };
        const service = new Service(formData);
        service
            .save()
            // res.send('Craete success!!!');
            .then(() => res.redirect('/admin/stored/services'))
            .catch((error) => {});
    }

    // [GET] /services/:id/edit
    edit(req, res, next) {
        // res.render('services/edit');
        Service.findById(req.params.id)
            .lean()
            .then((service) => res.render('services/edit', { service, layout: 'admin' }))
            .catch(next);
    }

    // [PUT] /services/:id
    update(req, res, next) {
        // res.jon(req.body)
        Service.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/'))
            .catch(next);
    }

    // [DELETE] /services/:id
    delete(req, res, next) {
        // res.jon(req.body)
        Service.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    // [DELETE] /services/:id/force
    forceDelete(req, res, next) {
        Service.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    // [PATCH] /services/:id/restore    
    restore(req, res, next) {   
        Service.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    detail(req, res, next) {
        // res.send('COURSE DETAILS');
        Service.findOne({ slug: req.params.slug })
            .lean()
            // .then((course) => res.json(course))
            .then((service) => res.render('services/detail', { service }))
            .catch(next);
    }

}

module.exports = new ServiceController();

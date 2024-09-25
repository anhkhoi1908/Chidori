const membershipRouter = require('./membership');
const homeRouter = require('./home');
const clientsRouter = require('./clients');
const bookingsRouter = require('./bookings');
const branchesRouter = require('./branches');
const servicesRouter = require('./services');
const adminRouter = require('./admin');

function route(app) {
    app.use('/bookings', bookingsRouter);
    app.use('/branches', branchesRouter);
    app.use('/services', servicesRouter);
    app.use('/admin', adminRouter);
    app.use('/clients', clientsRouter);
    app.use('/membership', membershipRouter);
    app.use('/', homeRouter);
}

module.exports = route;

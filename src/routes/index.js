const homeRouter = require('./home');
const clientsRouter = require('./clients');
const bookingsRouter = require('./bookings');
const branchesRouter = require('./branches');
const adminRouter = require('./admin');

function route(app) {
    app.use('/bookings', bookingsRouter);
    app.use('/branches', branchesRouter);
    app.use('/admin', adminRouter);
    app.use('/clients', clientsRouter);
    app.use('/', homeRouter);
}

module.exports = route;

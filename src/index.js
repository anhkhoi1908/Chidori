const express = require('express');
const route = require('./routes');
const morgan = require('morgan');
const hbs = require('express-handlebars');
const database = require('./config/database');
const methodOverride = require('method-override');
const app = express();
const path = require('path');
const port = 3000;

// Connect to database
database.connect();

app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

// Method override
app.use(methodOverride('_method'));

// Template engine
app.engine(
    'hbs',
    hbs.engine({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        },
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// HTTP logger
app.use(morgan('combined'));

// Routes init
route(app);

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});

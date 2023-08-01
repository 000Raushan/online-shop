const express = require('express');
const csrf = require('csurf');
const path = require('path');
const experssSession = require('express-session');

const authRoutes = require('./routes/auth.routes');
const addCsrfTokenMiddleware = require('./middlewares/csrf-token');
const checkAuthMiddleware = require('./middlewares/check-auth');
const errorHandler = require('./middlewares/error-handler');
const db = require('./data/database');
const createSessionConfig = require('./config/session');
const productRoutes = require('./routes/products.routes');
const baseRoutes = require('./routes/base.routes');
const adminRoutes=require('./routes/admin.routes')

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(errorHandler);

const sessionConfig = createSessionConfig();
app.use(experssSession(sessionConfig));
app.use(csrf());
app.use(addCsrfTokenMiddleware);
app.use(checkAuthMiddleware);
app.use(authRoutes);
app.use(productRoutes);
app.use(baseRoutes);
app.use('/admin',adminRoutes);

db.connectToDatabase().then(function () {
    app.listen(3000);
}).catch(function (error) {
    console.log('faild to connect database!')
    console.log(error);
});


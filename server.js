const express = require('express');
const routes = require('./controllers');
const exphbs = require('express-handlebars');
const session = require('express-session');
const hbs = exphbs.create({});
const path = require('path');
const User = require('./models/user'); 
const authMiddleware = require('./public/js/authMiddleware'); 

const sequelize = require('./config/connection');
const SequlizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
    secret: "secretKey",
    cookie: {
        maxAge: 300000,
        httpOnly: true,
        secure: false,
        sameSite: 'strict'
    },
    resave: false,
    saveUnitialized: true,
    store: new SequlizeStore({
        db: sequelize
    })
}
app.use(session(sess));

app.get('/protected', authMiddleware, (req, res) => {
    res.send('Protected Route');
});
  
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(routes);

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
    sequelize.sync({ force: false })
});

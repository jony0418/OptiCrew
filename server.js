const express = require('express');
const routes = require('./controllers');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

app.use(routes);

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

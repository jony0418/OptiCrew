const express = require('express');
const routes = require('./controllers');


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});

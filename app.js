const express = require('express');
const app = express();

const routes = require('./routes');
const path = require('path');

app.set('view engine', 'ejs');
app.use(express.static(path.join('public')));
app.use('/', routes);

app.listen(3000, () => console.log('Portfolio running on http://localhost:3000'));


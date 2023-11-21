const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const app = express();

// connect to mongodb
mongoose.connect('mongodb://127.0.0.1/db_organization_mail_management').then((result) => {
  console.log('Connected to mongodb');
}).catch((err) => {
  console.log(err);
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))

// route app 
app.get('/', (req, res) => {
  res.render('authentication/login');
});
app.get('/register', (req, res) => {
  res.render('authentication/register');
});

app.listen(8080, () => {
  console.log('organization-mail-management on port http://127.0.0.1:8080');
});
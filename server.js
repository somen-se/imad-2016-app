var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/index.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '/'));
});

app.get('/ABOUT.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'ABOUT.html'));
});

app.get('/CONTACT.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'CONTACT.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/q.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'q.jpg'));
});

app.get('/ui/cropped-congruent_pentagon.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'cropped-congruent_pentagon.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

require('dotenv').config();
var express = require('express');
var app = express();

// Force HTTPS redirection
app.use(function(req, res, next) {
  if (req.secure || req.headers['x-forwarded-proto'] === 'https' || process.env.NODE_ENV !== 'production') {
    return next();
  } else {
    return res.redirect('https://' + req.headers.host + req.url);
  }
});

app.use(express.static('build'));

app.listen(process.env.PORT, '0.0.0.0', function() {});

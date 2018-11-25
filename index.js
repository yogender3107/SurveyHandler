const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const CookieSession = require('cookie-session');
const passport = require('passport');
require('./models/User');
require('./services/passport');
const authRoutes = require('./routes/authRoutes');

mongoose.connect(keys.mongoURI);

const app = express();

app.use(CookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
}))
app.use(passport.initialize());
app.use(passport.session());

authRoutes(app);

app.get('/', (req, res) => {
    res.send({ hi: 'there' })
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
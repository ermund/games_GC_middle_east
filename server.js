const express = require('express');
const bodyParser = require('body-parser');
const signupRoutes = require('./routes/signup');
const gamesRoutes = require('./routes/games');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/signup', signupRoutes);
app.use('/games', gamesRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

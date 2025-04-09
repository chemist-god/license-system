require('dotenv').config();
const express = require('express');
const cors = require('cors');
const pool = require('./models/db'); // We'll create this next

const app = express();
app.use(express.json());
app.use(cors());

// Routes
app.use('/auth', require('./routes/auth'));
app.use('/licenses', require('./routes/licenses'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
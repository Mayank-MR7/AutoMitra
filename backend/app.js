const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/franchise', require('./routes/franchiseRoutes'));
app.use('/api/mechanic', require('./routes/mechanicRoutes'));
app.use('/api/hire', require('./routes/hireRoutes'));
app.use('/api/insurance', require('./routes/insuranceRoutes'));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: 'Something broke!' });
});


module.exports = app;
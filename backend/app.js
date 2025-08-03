const express = require('express');
const cors = require('cors');
const app = express();


const allowedOrigins = [
  'http://localhost:3000',
  'https://www.automitra.com',
  'https://automitra.com',
  'https://www.automitraa.com',
  'https://automitraa.com'        // your actual production frontend
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};
app.use(cors(corsOptions));
app.use(express.json());

app.use('/api/franchise', require('./routes/franchiseRoutes'));
app.use('/api/mechanic', require('./routes/mechanicRoutes'));
app.use('/api/hire', require('./routes/hireRoutes'));
app.use('/api/insurance', require('./routes/insuranceRoutes'));
app.use('/api/contact', require('./routes/contactRoutes'));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: 'Something broke!' });
});


module.exports = app;
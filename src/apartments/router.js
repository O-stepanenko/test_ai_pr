const express = require('express');
const router = express.Router();
const apartments = require('./apartment_mock.json');

// Route to get all apartments
router.get('/apartments', (req, res) => {
  res.json(apartments);
});

// Route to get a single apartment by id
router.get('/apartments/:id', (req, res) => {
  const apartmentId = parseInt(req.params.id);
  const apartment = apartments.find(a => a.id === apartmentId);
  if (apartment) {
    res.json(apartment);
  } else {
    res.status(404).send('Apartment not found');
  }
});

module.exports = router;

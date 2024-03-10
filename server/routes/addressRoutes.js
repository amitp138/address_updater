const express = require('express');
const router = express.Router();
const Address = require('../models/address');
// Get all addresses
router.get('/addresses', async (req, res) => {
    try {
      const addresses = await Address.find();
      res.status(200).json(addresses);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server Error');
    }
  });
  
  // Add new address
  router.post('/add', async (req, res) => {
    try {
      const { street, city, state, zip } = req.body;
      const newAddress = new Address({ street, city, state, zip });
      await newAddress.save();
      res.status(201).json({ message: 'Address added successfully', address: newAddress });
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server Error');
    }
  });
  
  // Update address
  router.put('/update/:id', async (req, res) => {
    try {
      const { street, city, state, zip } = req.body;
      const updatedAddress = await Address.findByIdAndUpdate(req.params.id, { street, city, state, zip }, { new: true });
      res.status(200).json({ message: 'Address updated successfully', address: updatedAddress });
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server Error');
    }
  });
  
  // Delete address
  router.delete('/delete/:id', async (req, res) => {
    try {
      const result = await Address.deleteOne({ _id: req.params.id });
      if (result.deletedCount === 1) {
        res.status(200).json({ message: 'Address removed successfully' });
      } else {
        res.status(404).json({ message: 'Address not found' });
      }
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server Error');
    }
  });

  module.exports = router;
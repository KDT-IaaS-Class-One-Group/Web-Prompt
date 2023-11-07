const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontEnd', 'home.html'));
});

router.get('/profile', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontEnd', 'profile.html'));
});

router.get('/settings', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontEnd', 'settings.html'));
});

router.get('/logout', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontEnd', 'logout.html'));
});

module.exports = router;

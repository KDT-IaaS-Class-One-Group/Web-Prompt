const express = require('express');
const router = express.Router();
const path = require('path');

// 각 페이지에 대한 라우트 설정
router.get('/home', (req, res) => {
  console.log("hello")
  // res.sendFile(path.join(__dirname, '..', 'frontEnd', 'pages', 'home.html'));
});

router.get('/profile', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'frontEnd', 'pages', 'profile.html'));
});

router.get('/settings', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'frontEnd', 'pages', 'settings.html'));
});

router.get('/logout', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'frontEnd', 'pages', 'logout.html'));
});

module.exports = router;

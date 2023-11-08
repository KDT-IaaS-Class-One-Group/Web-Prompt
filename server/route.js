const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require("fs");

// 각 페이지에 대한 라우트 설정
router.get('/home', (req, res) => {
  console.log("hello")
  res.sendFile(path.join(__dirname, '..', 'frontEnd', 'pages', 'home.html'));
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

// POST 요청 처리
router.post('/submit', (req, res) => {
  const inputValue = req.body.inputText;
  console.log('사용자 입력 내용:', inputValue);
  res.json({ message: 'POST 요청을 받았습니다!' });
});

module.exports = router;

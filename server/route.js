const express = require('express');
const router = express.Router();
const path = require('path');

// 기본 홈페이지 라우팅
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontEnd', 'index.html'));
});

// 로그인 페이지 라우팅
router.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontEnd', 'login.html'));
});

// 회원가입 페이지 라우팅
router.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontEnd', 'signup.html'));
});

// 아이디 및 비밀번호 찾기 페이지 라우팅
router.get('/forgot', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontEnd', 'forgot.html'));
});

module.exports = router;

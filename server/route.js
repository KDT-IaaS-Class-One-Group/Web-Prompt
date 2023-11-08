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

  // json 파일을 읽고 편집하는 기능 추가

  // 파일 읽기 (비동기 방식)
  const filePath = path.join(__dirname, 'promptData.json');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('파일 읽기 에러:', err);
      return res.status(500).json({ error: '파일 읽기 에러' });
    }

    let jsonData = [];

    if (data) {
      // 읽어온 데이터가 있다면 JSON으로 파싱
      jsonData = JSON.parse(data);
    }

    // 새로운 데이터 생성 (사용자 입력 값만 포함)
    const newEntry = {
      inputValue: inputValue
    };

    // JSON 파일에 데이터 추가 (비동기 방식)
    jsonData.push(newEntry);

    // JSON 데이터를 다시 JSON 문자열로 변환
    const updatedJsonData = JSON.stringify(jsonData, null, 2);

    // 파일에 쓰기 (비동기 방식)
    fs.writeFile(filePath, updatedJsonData, 'utf8', (err) => {
      if (err) {
        console.error('파일 쓰기 에러:', err);
        return res.status(500).json({ error: '파일 쓰기 에러' });
      }

      console.log('데이터가 JSON 파일에 추가되었습니다.');
      res.json({ message: 'POST 요청을 받았습니다!' });
    });
  });
});


module.exports = router;

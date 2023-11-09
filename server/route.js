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
  const inputValue = req.body.inputText; // POST 요청에서 전송된 데이터 중에서 inputText라는 이름의 필드에 해당하는 값을 가져옴
  console.log('사용자 입력 내용:', inputValue);

  // json 파일을 읽고 편집하는 기능 추가

  // 파일 읽기 (비동기 방식)
  const filePath = path.join(__dirname, 'promptData.json'); // path.join(): 여러 개의 문자열을 하나의 경로로 결합
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('파일 읽기 에러:', err);
      return res.status(500).json({ error: '파일 읽기 에러' });
    }

    let jsonData = []; // jsonData는 빈 배열에 요소가 추가되고 변경되므로 let으로 변수 선언

    if (data) {
      jsonData = JSON.parse(data); // 읽어온 데이터가 있다면 JSON으로 파싱
    }

    const newEntry = { // 사용자가 입력한 값을 객체에 담음
      inputText: inputValue
    };

    // JSON 파일에 데이터 추가 (비동기 방식)
    jsonData.push(newEntry);

    // JSON 데이터를 다시 JSON 문자열로 변환
    const updatedJsonData = JSON.stringify(jsonData, null, 2); //? 이건 모르겠는데 없으면 오류가 난다.
    // jsonData를 null로 전달하고, 들여쓰기를 2칸하고 난 뒤에 작성한다는데
    // null로 왜 전달하는지를 모르겠고, 들여쓰기도 왜 하는지 당위성을 알 수 없다.

    // 파일에 쓰기 (비동기 방식)
    fs.writeFile(filePath, updatedJsonData, 'utf8', (err) => {
      if (err) {
        console.error('파일 쓰기 에러:', err);
        return res.status(500).json({ error: '파일 쓰기 에러' });
      }
      // 서버 콘솔에 출력
      console.log('데이터가 JSON 파일에 추가되었습니다.');
      res.json({ message: 'POST 요청을 받았습니다!' });
    });
  });
});



module.exports = router;

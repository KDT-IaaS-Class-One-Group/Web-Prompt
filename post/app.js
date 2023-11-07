const express = require('express');
const app = express();
const fs = require("fs");
const port = 3000;

// POST 요청 본문 해석 미들웨어 추가
app.use(express.json()); // JSON 형식의 POST 요청 본문을 해석
app.use(express.urlencoded({ extended: true })); // URL-encoded 형식의 POST 요청 본문을 해석

// test.html 제공
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/test.html');
});

// POST 요청 처리
app.post('/submit', (req, res) => {
    const inputData = req.body.inputText;
    console.log('사용자 입력 내용:', inputData);
    res.json({ message: 'POST 요청을 받았습니다!' });
});

// JSON 파일에 데이터를 저장하기
app.post('/save-data', (req, res) => {
    // 클라이언트로부터 받은 데이터
    const inputData = req.body;
  
    // JSON 파일에 데이터 저장
    fs.readFile('data.json', 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading file:', err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
  
      const jsonData = JSON.parse(data);
      jsonData.push(inputData);
  
      fs.writeFile('data.json', JSON.stringify(jsonData), 'utf8', (err) => {
        if (err) {
          console.error('Error writing file:', err);
          return res.status(500).json({ error: 'Internal Server Error' });
        }
  
        console.log('Data successfully saved to data.json');
        return res.status(200).json({ message: 'Data saved successfully' });
      });
    });
  });

app.listen(port, () => {
    console.log(`서버가 포트 ${port}에서 실행 중입니다`);
});

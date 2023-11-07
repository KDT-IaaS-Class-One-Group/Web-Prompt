const express = require('express');
const app = express();
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

app.listen(port, () => {
    console.log(`서버가 포트 ${port}에서 실행 중입니다`);
});

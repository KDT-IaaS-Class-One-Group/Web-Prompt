// 필요한 모듈들 import
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json()); // JSON 데이터 파싱을 위한 미들웨어 설정
app.use(express.urlencoded({ extended: true })); // POST 요청의 본문(body) 파싱을 위한 미들웨어 설정
app.use(express.static(path.join(__dirname, 'public'))); // 정적 파일 제공을 위한 미들웨어 설정

app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/notfound', (req, res) => {
  res.status(404).send('요청한 페이지를 찾을 수 없습니다.');
});

app.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  
  console.log(`ID: ${username}`);
  console.log(`PW: ${password}`);
  
  res.status(200).send('로그인 요청을 받았습니다.');
});

const server = app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});

module.exports = server;
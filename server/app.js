const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// JSON 파싱 및 URL 인코딩을 위한 미들웨어 설정
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 정적 파일 제공을 위한 미들웨어 설정 (정적 파일은 frontEnd 폴더에 있음)
app.use(express.static(path.join(__dirname, '..', 'frontEnd')));

// 라우팅 설정 (routes 폴더에 있는 route.js 파일 사용)
const route = require('./route');
app.use('/api', route); // 미들웨어 실행 로직

// 서버 시작
const server = app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});

module.exports = server;

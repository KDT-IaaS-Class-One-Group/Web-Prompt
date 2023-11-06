const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// JSON 파싱 및 URL 인코딩을 위한 미들웨어 설정
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const server = app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});

module.exports = server;

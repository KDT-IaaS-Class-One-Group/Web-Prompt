const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

const routes = require('./route'); // 라우팅 설정 파일을 불러옵니다.

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'frontEnd')));


app.use('/', routes); // 라우팅 설정을 추가합니다.

const server = app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});

module.exports = server;

const express = require('express');
const app = express();
const fs = require('fs');
const port = 3000;
const path = require("path");

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

  // JSON 파일 읽기
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
      // 파일이 없을 경우 빈 배열로 초기화
      const jsonData = [];
      // 새로운 데이터 추가
      jsonData.push(inputData);

      // JSON 파일에 데이터 저장
      fs.writeFile('data.json', JSON.stringify(jsonData), 'utf8', (err) => {
        if (err) {
          console.error('Error writing file:', err);
          return res.status(500).json({ error: 'Internal Server Error' });
        }

        console.log('Data successfully saved to data.json');
        return res.status(200).json({ message: 'Data saved successfully' });
      });
    } else {
      // 파일이 이미 존재할 경우에는 파일 내용을 읽어서 파싱한 후에 데이터 추가
      const jsonData = JSON.parse(data);
      jsonData.push(inputData);

      // JSON 파일에 데이터 저장
      fs.writeFile('data.json', JSON.stringify(jsonData), 'utf8', (err) => {
        if (err) {
          console.error('Error writing file:', err);
          return res.status(500).json({ error: 'Internal Server Error' });
        }

        console.log('Data successfully saved to data.json');
        return res.status(200).json({ message: 'Data saved successfully' });
      });
    }
  });
});

app.listen(port, () => {
  console.log(`서버가 포트 ${port}에서 실행 중입니다`);
});



// json 데이터가 변경되는지 확인
const chokidar = require('chokidar');

const filePath = 'data.json'; // 감시할 파일 경로

// 파일 변경 이벤트 감지
const watcher = chokidar.watch(filePath, {
  persistent: true
});

watcher.on('change', (path) => {
  console.log('파일이 변경되었습니다.');

  // 변경된 내용 읽어오기
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('파일 읽기 에러:', err);
    } else {
      // 변경된 내용 출력
      console.log('변경된 내용:', data);
    }
  });
});

console.log(`파일 감시가 시작되었습니다. (${filePath})`);

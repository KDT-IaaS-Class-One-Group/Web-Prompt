const express = require('express');
const router = express.Router();

// 데이터 라우팅 설정 예시
router.get('/data', (req, res) => {
  // 데이터 처리 로직 작성
  res.json({ message: '데이터 요청 처리 완료' });
});

module.exports = router;

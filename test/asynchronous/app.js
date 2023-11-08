// 동기 처리
console.log("1번");
console.log("2번");

// 비동기 처리
console.log("첫 번째");
setTimeout(function() {
  console.log("두 번째 (비동기적 작업 완료)");
}, 1000);
console.log("세 번째");

// async await
async function fetchData() {
  try {
    let response = await fetch('https://jsonplaceholder.typicode.com/todos/1'); // JSON 데이터를 가져옴
    if (!response.ok) {
      throw new Error('네트워크 응답이 실패했습니다.'); // HTTP 요청이 실패한 경우 오류 발생
    }
    let data = await response.json(); // 응답 데이터를 JSON으로 파싱
    console.log('데이터 가져오기 성공:', data); // 처리된 데이터를 출력
  } catch (error) {
    console.error('데이터를 가져오는 중 오류 발생:', error); // 오류가 발생한 경우 오류 메시지 출력
  }
}

fetchData(); // fetchData 함수 호출

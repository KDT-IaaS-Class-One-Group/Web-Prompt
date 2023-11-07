// 참조: https://smilehugo.tistory.com/entry/nodejs-json-create-store-read-update

//* app.js에 json 데이터를 붙여 넣어서 확인하는 방식
const abc = {
  A: "첫 글자",
  B: "가운데 글자",
  C: "마지막 글자"
}

const abcJSON = JSON.stringify(abc);
const parsedData = JSON.parse(abcJSON);

console.log(parsedData.A); // 첫 글자
console.log(parsedData.B); // 가운데 글자
console.log(parsedData.C); // 마지막 글자


//* fs 모듈을 이용한 json 파일 생성하기
const fs = require("fs");
fs.writeFileSync("first-json.json", abcJSON);


//* fs 모듈을 이용해 json 파일 읽기
const dataBuffer = fs.readFileSync("first-json.json")
console.log(dataBuffer); 
// <Buffer 7b 22 41 22 3a 22 ec b2 ab 20 ea b8 80 ec 9e 90 22 2c 22 42 22 3a 22 ea b0 80 ec 9a b4 eb 8d b0 20 ea b8 80 ec 9e 90 22 2c 22 43 22 3a 22 eb a7 88 ec ... 14 more bytes>

//! 이런 출력을 해결하기 위해서? -> 문자열로 변환
const dataJSON = dataBuffer.toString()
console.log(dataJSON)


//* 특정 key에 대응하는 value만 출력하기
const data = JSON.parse(dataJSON)
console.log(data.A); // 첫 글자

//* fs 모듈을 이용해 json 파일 업데이트
abc.A = "바꿔보자"
abc.B = "바꾸기"
abc.C = "덮어쓰기"

fs.writeFileSync("first-json.json", abcJSON);
console.log(abc.A);
console.log(abc.B);
console.log(abc.C);
const numbers = [1, 2, 3, 4, 5];

console.log("forEach() 연습하기:");
console.log("짝수만 출력하기:");
numbers.forEach(number => {
  if (number % 2 === 0) { // 나머지가 0인 number를 출력
    console.log(number);
  }
});

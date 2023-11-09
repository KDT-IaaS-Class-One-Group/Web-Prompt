const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 22 },
  { name: "David", age: 30 }
];

console.log("성인 사용자 정보 출력하기:");
users.forEach(user => {
  if (user.age >= 18) { // age가 18세 이상인 조건을 충족하는 애들을 매개변수 user에 담기
    console.log(users); // ! 이렇게 하면 forEach() 메서드 자체가 배열을 순회하기 때문에 동일한 객체가 두 번 찍힌다.
    // console.log(`이름: ${user.name}, 나이: ${user.age}`); 
  }
});

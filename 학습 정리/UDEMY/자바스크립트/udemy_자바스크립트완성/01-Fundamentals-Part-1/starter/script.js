// 변수명 특수 문자 _ , $
// 첫 문자는 대문자로 쓰지 않기

/*
1. Number - 숫자, 실수, 정수
2. String - 문자
3. Boolean - ture, false
4. Undefind - 정의하지 않은 값으로 부터 가져옴
    타입과 값이 동일함
5. null - 빈 값
    타입 - Object를 반환함
6. Symbol - 변할 수 없는 유일한 값
7. BigInt - 숫자 타입이 표기하기 어려운 큰 값

자바스크립트는 동적으로 타입을 결정한다.
*/

/*

*/
// 코딩 챌린지
/*
마크와 존스는 그들의 bmi를 비교하려고 한다.
bmi = mass / height ** 2 = mass / (height * height)
mass in kg, height in meter

1. 마크와 존의 무게와 키를 변수에 저장
2. 그들의 bmi를 식을 이용해 계산
3. markHigherBMI 변수를 만들어라, 이 변수는 마크가 존보다 bmi가 큰 지에 대한 정보를
가진다.

DATA 1 - Marks weight - 78, height - 1.69 John 92 1.95
DATA 2 - Marks 95 1.88 John 85 1.76
*/

let marksWeight, marksHeight, johnWeight, johnHeight, markHigherBMI;

let calculateBmi = function (weight, height) {
  return weight / height ** 2;
};

marksWeight = 76;
marksHeight = 1.69;
johnWeight = 92;
johnHeight = 1.95;

markHigherBMI =
  calculateBmi(marksWeight, marksHeight) > calculateBmi(johnWeight, johnHeight);

console.log(markHigherBMI);

marksWeight = 95;
marksHeight = 1.88;
johnWeight = 85;
johnHeight = 1.76;

markHigherBMI =
  calculateBmi(marksWeight, marksHeight) > calculateBmi(johnWeight, johnHeight);

console.log(markHigherBMI);

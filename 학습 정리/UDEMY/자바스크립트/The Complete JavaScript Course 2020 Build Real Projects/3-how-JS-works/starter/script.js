///////////////////////////////////////
// Lecture: Hoisting

// Function Declatration
calculateAge(1990);

function calculateAge(year){
    console.log(2016 - year);
}

calculateAge(1990);

// Function Expression

// retirement(1990); Function Exrpession에서는 호이스팅이 동작하지 않음

var retirement = function(year){
    console.log(65 - (2016 - year));
}
retirement(1990);

// Variables
console.log(age); //undefined, age가 먼저 선언됨을 알 수 있음
var age = 23; 
console.log(age);

function foo(){
    // foo function의 execution context object
    console.log(age);
    var age = 65;
    console.log(age);
}
foo();
console.log(age); // global execution object

///////////////////////////////////////
// Lecture: Scoping
// Where can we access a certain variable or function?
// new scope - new function
// parent의 scope에 접근이 가능 global에서 정의한 함수는
// global 변수 접근 가능 -> 함수 내에 정의한 함수는 부모 함수 변수 접근 가능
// Scope chain / scope는 코드에서 정의된 위치가 중요함


// First scoping example

var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    // second는 global, first 접근 가능
    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
        third()
    }
}
// 다음과 같이 호출하면 에러가 발생함
// third는 global만 잡근 가능, second의 c에 접근할 수 없음으로 에러를 발생
function third(){
    var d = 'John';
    // console.log(c)
}



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword

// global 객체
// console.log(this);

calculateAge(1985);

function calculateAge(year){
    console.log(2016 - year);
    // window object, method가 아니라 일반적인 함수임으로 this가 window
    console.log(this);
    
    // 함수에서 호출된 this는 유지됨
    what();
    function what(){
        console.log(this);
    }
}

var john = {
    name:'John',
    yearOfBirth : 1990,
    // john object를 반환, 메소드이기 때문
    calculateAge: function(){
        console.log(this);
        console.log(2018 - this.yearOfBirth);
        function innerFunction(){
            console.log(this);
        }
        innerFunction(); // Window 일반적인 함수호출의 default는 전역
        // this에는 가장 빠르게 메소드를 호출한 object가 할당된다.
        // dot으로 호출할 때 this가 유지된다는 느낌으로 생각하면 좋을듯
        // dot으로 연결되지 않으면 window
    }
}

john.calculateAge();

var mike = {
    name : 'Mike',
    yearOfBirth : 1984,

};

mike.calculateAge = john.calculateAge

mike.calculateAge();    
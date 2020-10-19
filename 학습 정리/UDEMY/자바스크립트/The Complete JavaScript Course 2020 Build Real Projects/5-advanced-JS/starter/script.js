// Function constructor
/*
var john = {
    name : 'John',
    yearOfBirth:1990,
    job:'teacher'
};

var Person = function(name, yearOfBirth, job){
    // 일반적인 함수에서 this는 글로벌 객체를 가르키겠지만 이는
    // 실용적이지 않다. new는 빈 객체를 만들고 this가 이를 가르키게 한다.

    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function(){
    console.log(2016 - this.yearOfBirth);
}

// new 오퍼레이터
// 빈 객체를 만든다. -> Person 함수가 불러진다.
var john = new Person('John',1990,'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

*/

// Object.create
/*
var personProto = {
    calculateAge : function(){
        console.log(2016 - this.yearOfBirth);
    }
}

var john = Object.create(personProto);
john.name = 'John';
john.job = 'teacher';
console.log(john);

var jane = Object.create(personProto, {
    name: {value : 'Jane'},
    yearOfBirth: {value: 1969},
    job: {value: 'designer'}
});
console.log(jane);

*/

// Primitives vs objects

// Primitives
var a = 23;
var b = a;
a = 46;

console.log(a);
console.log(b);
// Objects
// a = 46, b = 23
var obj1 = {
    name: 'John',
    age: 26
}

var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);
// obj1.age = 30 / obj2.age = 30 object를 복사하는게 아니라 같은
// object를 가르키고 있음

// Functions
var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Lisbon'
};

function change(a, b) {
    a = 30;
    b.city = 'San Francisco'
}
change(age, obj);
console.log(age); // 안 바뀜 - 값의 복제가 만들어짐
console.log(obj.city); // 바뀜 - 같은 주소가 (복제? 되서) 참조 되기 때문에
// 그 주소 값을 바꾸게 됨

// Lecture: Passing functions as arguments
/*
var years = [1990, 1965, 1937, 2005, 1998]

function arrayCalc(arr, fn){
    var arrRes = [];
    for (var i=0; i < arr.length; i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el){
    return 2016 - el;
}

function isFullAge(el){
    return el >= 18;
}
// Math.floor 내림, ceiling 올림, round 반 올림
function maxHeartRate(el){
    if (el >= 18 && el <= 81){
        return Math.round(206.9 - (0.67 * el))
    } else{
        return -1;
    }
}

// callback function - 함수에서 나중에 호출해주길 원함
var ages = arrayCalc(years, calculateAge);
console.log(ages);
var fullAges = arrayCalc(ages, isFullAge);

// 반복문과 실행 함수를 분리해, 재사용 및 더 읽기 좋아짐

// Lecture: Functions returning functions
function interviewQuestion(job){
    if (job == 'designer'){
        // ananymous
        return function(name){
            console.log(name + ', can you please explain what UX designer is?')
        }
    } else if(job === 'teacher'){
        return function(name){
            console.log('What subject do you teach, ' + name + '?');
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
teacherQuestion('John');
var designerQuestion = interviewQuestion('designer');
designerQuestion('John');
designerQuestion('Jane');

// 변수에 저장하지 않고 반환된 함수를 바로 호출할 수 있음
interviewQuestion('teacher')('Mark');
*/
// IIFE Immediately Invoked Function Expression
/*
// function 안에 변수는 바깥에서 접근할 수 없음
function game(){
    var score = Math.random() * 10;
    console.log(score >= 5);
}

game();

// () 로 감싸서 선언문을 표현식으로 바꾼다.
(function () {
    var score = Math.random() * 10;
    console.log(score >= 5);
})();

// console.log(score); score를 볼 순 없다.
// IIFE는 한 번만 호출가능하다.
(function (goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(3);
*/
// Closure
// An inner function has always access to the variables and parameters
// of its outer function, even after the outer function has returned
// 반환된 함수도 scope를 유지하는 느낌인 듯 - 메모리에 남아있음으로 메모리
// 관리에 주의해야 할 듯
/*
function retirement(retirementAge){
    var a = '. years left until retirement.'
    return function(yearOfBirth){
        // a, retirementAge를 사용 가능함
        // return 된 이후에도 가능함 - closure
        var age = 2016 - yearOfBirth;
        console.log((retirementAge - age) + a);
    } 
}

var retirementUS = retirement(66);
retirementUS(1990);
// retirement(66)(1990);

var retirementGermany = retirement(65);
var retirementIceland = retirement(67)

retirementGermany(1990);
retirementUS(1990);
retirementIceland(1990);

function interviewQuestion(job){
    return function(name){
        if(job == 'designer'){
            console.log(name + 'can you please explain what UX design is');
        } else if (job === 'teacher'){
            console.log('What subject do you teach, ' + name + '?');
        } else {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

interviewQuestion('teacher')('John');
*/
// Lecture : Bind, call, apply
/*
var john = {
    name: 'John',
    age : 26,
    job : 'teacher',
    presentation : function(style, timeOfDay){
        if (style === 'formal'){
            console.log('Good ' + timeOfDay + 'Ladies andd gentlemen! I\'m' + 
            this.name + 'I\'m ' + this.job + 'and I\'m' + this.age + ' years old.');
        } else if (style === 'friendly'){
            console.log('Hey What\'s up? I\'m ' + this.name 
            + ' I\'m a ' + this.job + 'and I\'m ' + this.age 
            + ' years old. Have a nice ' + timeOfDay + '.');
        } 
    }
}

john.presentation('formal','morning');

var emily = {
    name : 'Emily',
    age : 35,
    job : 'designer'
};
// call 은 첫 번째 argument로 this를 바꿔준다.
john.presentation.call(emily, 'friendly', 'afternoon');

// apply를 arguments를 array로 넣는다.
// john.presentation.apply(emily, ['friendly', 'afternoon']);

// bind - 함수를 호출하지 않고, 함수를 복사
// 첫 번째는 this, 그 다음 arguments
// arguments를 하나만 설정함 / presets argument
var johnFriendly = john.presentation.bind(john, 'friendly');

// 반환된 함수는 하나만 넣어줘도 됨
johnFriendly('morning');

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn){
    var arrRes = [];
    for (var i = 0; i < arr.length; i ++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes
}

function calculateAge(el){
    return 2016 - el;
}

// arguments가 두 개 필요함, arrayCalc는 하나만 입력함
function isFullAge(limit, el){
    return el >= limit;
}

var ages = arrayCalc(years, calculateAge);

var fullJapan = arrayCalc(ages, isFullAge.bind(this, limit=20))
console.log(fullJapan);
*/
/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

*/

// 즉시 실행 함수를 이용해, 내부에서 정의한 변수들이 바깥에 영향을 주거나 받는 것을 방지할 수 있다.
(function(){
    function Question(question, answers, answerIndex) {
        this.question = question;
        this.answers = answers;
        this.answerIndex = answerIndex;
    }
    
    // Prototype을 활용해 매 객체마다 함수를 만들지 않도록 한다.
    Question.prototype.displayQuestion = function () {
        console.log(this.question);
        var displayAnswers = ''
        for (var i = 0; i < this.answers.length; i++) {
            displayAnswers += (i + 1) + ' 번: ' + this.answers[i] + ' '
        }
        console.log(displayAnswers);
    }
    
    Question.prototype.matchAnswer = function (answerIndex) {
        
        if (answerIndex === this.answerIndex) {
            console.log('정답입니다.')
            return true;
        } else {
            console.log('틀렸습니다.')
            return false;
        }
    }

    
    question1 = new Question('1+1 은 ?', [1, 2, 3, 4, 5], 2);
    question2 = new Question('8+1 은 ?', [9, 10, 11, 12, 13], 1);
    question3 = new Question('17+2 은 ?', [15, 16, 17, 18, 19], 5);
    question4 = new Question('31+2 은 ?', [30, 31, 32, 33, 34], 4);
    question5 = new Question('1+4 은 ?', [5, 6, 7, 8, 9], 1);
    
    questions = [question1, question2, question3, question4, question5]

    // 클로저를 활용해 변수나 아무나 접근하지 못하도록 만들 수 있음
    function score(){
        var sc = 0;
        return function(flag){
            if (flag == true){
                sc += 1;
            }
            return sc;
        }
    }

    function displayRandomQuestion() {
        var answerFlag, current_score;
        questionIndex = Math.floor(Math.random() * questions.length);
        questions[questionIndex].displayQuestion();

        var userInput = prompt('콘솔 문제에 대한 정답은?');
        if (userInput === 'exit') {
            return 0
        } else {
            userInput = Number(userInput)
        }

        answerFlag = questions[questionIndex].matchAnswer(userInput);
        current_score = scoreAdd(answerFlag);
        console.log('현재 점수는 : ' + current_score);
        displayRandomQuestion()
    }

    var scoreAdd = score();
    
    // 무한 루프 대신에 재귀 호출을 사용하자
    displayRandomQuestion()
})();

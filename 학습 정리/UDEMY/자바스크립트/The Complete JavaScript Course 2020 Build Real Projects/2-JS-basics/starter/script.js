console.log('Hello World!!!')

// 변수는 값을 저장해서, 원할 때 다시 사용하기 위함

var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

// Number, String, Boolean, Undefined, Null 이 타입들은 non-object type
// 자바스크립트는 dynamic typing - 변수에 맞게 데이터 타입이 바뀐다.

//Boolean
var fullAge = false;
console.log(fullAge);

// 변수명은 실제로 의미하는 것을 적자, camelcase notation

var job;
// undefined - non-existent, 변수를 선언했지만 아직 할당하지 않음
console.log(job);

/*
    Variable mutation and type coercion(타입 강제 변환)
*/

var firstName = 'John';
var age = 28;

console.log(firstName + ' ' + age); 
// age는 string이 아니지만, 자바스크립트가 자동으로 string으로 바꿈

var job, isMarried;
job = 'teacher'
isMarried = false;

console.log(firstName + 'is a ' + age + ' year old' + job + '. Is he married? ' + isMarried)
// isMarried 은 boolean이지만 string으로 바꿔줌

// Variable mutation
age = 'twenty eight' // 이미 위에서 정의되었기 때문에 var를 쓰지 않음
// 원래 number type을 가졌던, age에 string을 할당함
job = 'driver';
// alert(job + age)

// var lastName = prompt('What is his last Name?');
// console.log(firstName + ' ' + lastName)

/*
 Basic operators
*/
var year, yearJohn, yearMark, ageJohn, ageMark;

// 변수를 이용하면 한 번에 여러 곳을 수정할 수 있다.
now = 2018;
ageJohn = 28;
ageMark = 33;
yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);
console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

// Logical operators
var johnOlder = ageJohn > ageMark; // False - boolean
console.log(johnOlder)

// typeof operator - 계산에 필요한 대상은 하나
console.log(typeof johnOlder);

/******************** 
// Operator precedence
*/

now = 2018;
yearJohn = 1989;
var fullAge = 18;

// 어떤 연산자가 먼저 계산될까 -> - 이후 >=

// Multiple operators
var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge) // true

// Grouping
ageJohn = now - yearJohn
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignments
// 할당 연산자는 right - to - left, y에 할당되고 그 다음 x에 할당된다.
var x, y;
x = y = (3 + 5) * 4 - 6;
console.log(x, y);

// More operators
x *= 2 // x = x * 2;
console.log(x);

x += 10 // x = x + 10;
console.log(x);
console.log(x++);

/*****************************
* CODING CHALLENGE 1
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 

GOOD LUCK 😀
*/

var markMass, johnMass, markHeight, johnHeight, markBmi, johnBmi;
markMass = 80;
johnMass = 90;
markHeight = 1.80;
johnHeight = 1.90;

markBmi = markMass / (markHeight * markHeight);
johnBmi = johnMass / (johnHeight, johnHeight);

flagMarkBmiHigher = markBmi > johnHeight;

console.log("Is Mark's BMI higer than John's? ", flagMarkBmiHigher);

/**********
 * If / ele statements
*/

var firstName = 'John';
var civilStatus = 'single';

// true라면 실행한다.
if (civilStatus == 'married'){
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}

var isMarried = true;

// true, false만으로도 가능 if(isMarried){} 로 처리 가능
if (isMarried == true){
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}

var markMass, johnMass, markHeight, johnHeight, markBmi, johnBmi;
markMass = 80;
johnMass = 90;
markHeight = 1.80;
johnHeight = 1.90;

markBmi = markMass / (markHeight * markHeight);
johnBmi = johnMass / (johnHeight, johnHeight);

flagMarkBmiHigher = markBmi > johnHeight;
// 누가 큰 지 - true 보다 해당하는 상황에 대해 말해주자
if (flagMarkBmiHigher){
    console.log("Is Mark\'s BMI higer than John\'s ");
} else {
    console.log("Is John\'s BMI higer than Mark\'s ");
}

/**
 * Boolean logic
 */

firstName = 'John';
age = 16;

//Betwwen 13 and 20 age >= 13 AND age < 20
//&& AND || OR ! NOT
if (age < 13){
    console.log(firstName + ' is a boy.');
} else if(age >= 13 && age < 20) { //Betwwen 13 and 20
    console.log(firstName + ' is a teenager');
} else if(age >= 20 && age < 30){
    console.log(firstName + ' is a young man.')
} else {
    console.log(firstName + ' is a man.')
}

/**
 * The Ternary(3개로 이루어진) Operator and
 */

firstName = 'John';
age = 14;

// 조건 ? 맞으면 실행(if) : 틀리면 실행(else)
age >= 18 ? console.log(firstName + ' drink beer.')
: console.log(firstName + 'drink juice.');

// 조건에 맞는 변수를 할당
var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink)

// if else 문으로 쓴다면
if (age >= 18) {
    drink = 'beer';
} else {
    drink = 'juice';
}

// 아래 쪽을 주로 이용하나, 단순한 것은 위의 경우를 사용

// Switch statement
job = 'teacher';
switch(job){
    case 'teacher':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drivers an uber in Lisbon');
        break
    case 'designer':
        console.log(firstName + ' designs beautiful webSites');
        break
    default:
        console.log(firstName + ' does something else.');
}

switch(true){
    case age < 13:
        console.log(firstName + ' is a boy.');
        break
    case age < 20:
        console.log(firstName + ' is a teenager.');
        break
    case age < 30:
        console.log(firstName + ' is a youngman.');
        break
    default:
        console.log(firstName + ' is a man.');
        break
}

/**
 * Truthy and Falsy values and equality operators
 */

// falsy values : undefined, null ,0, '', NaN 이들은 false로 평가됨
// truthy values : NOT falsy values

var height;

// height를 할당하지 않았다면 undefined -> if false로 해석됨
height = 23; // 할당했다면 값이 있음으로 true 그러나 0은 false로 해석됨에 주의
// '', 0 을 잘 처리하자
if (height || height === 0){
    console.log('Variable is defined');
} else {
    console.log('Variable has NOT been defined')
}

// Equality operators
// === strict equility 
// == 데이터 타입은 달라도 됨

if (height == '23'){
    console.log('The == operator does type coercion!')
}

// false, 데이터 타입이 다름
if (height === '23'){
    console.log('The == operator does type coercion!')
}


/*****************************
* CODING CHALLENGE 2
*/

/*
John and Mike both play basketball in different teams. In the latest 3 games, 
John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀
*/

// 1. Calculate the average score for each team 

var johnTeamScore = (89 + 120 + 103) / 3;
var mikeTeamScore = (116 + 94 + 123) / 3;

// 2. Decide which teams wins in average (highest average score), and print the winner to the console. 
// Also include the average score in the output.
// 3. Then change the scores to show different winners. 
// Don't forget to take into account there might be a draw (the same average score)

if (johnTeamScore > mikeTeamScore){
    console.log('winnder is John team and score : ', johnTeamScore);
    console.log('score change is ', johnTeamScore - mikeTeamScore);
} else if (mikeTeamScore > johnTeamScore){
    console.log('winnder is Mike team and score : ', mikeTeamScore);
    console.log('score change is ', mikeTeamScore - johnTeamScore);
} else{
    console.log('Draw');
    console.log('score change is ', mikeTeamScore - johnTeamScore);
}
var temp = johnTeamScore
johnTeamScore = mikeTeamScore
mikeTeamScore = temp

if (johnTeamScore > mikeTeamScore){
    console.log('winnder is John team and score : ', johnTeamScore);
} else if (mikeTeamScore > johnTeamScore){
    console.log('winnder is Mike team and score : ', mikeTeamScore);
} else{
    console.log('Draw');
}

// 4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. 
// Like before, log the average winner to the console. 
// HINT: you will need the && operator to take the decision.

var maryTeamScore = (97 + 134 + 105) / 3;
console.log(johnTeamScore, mikeTeamScore, maryTeamScore);
// 3가지 비교를 조금 복잡하게 한 거 같음 현재 if가 9가지가 나옴
// 그런데 모든 경우를 따져보면, 단독 우승 3 / 2명 우승 3/ 함께 우승 1가지로 각각 상황을
// 하는 것도 방법이었을 듯 -> 그러면 반복해서 체크하는게 더 많았을수도 
if (johnTeamScore === maryTeamScore){
    if (johnTeamScore > mikeTeamScore){
        console.log('winners are John team and Mary team, Score : ',johnTeamScore)
    } else if (johnTeamScore < mikeTeamScore){
        console.log('winner is Mike team, Score : ', mikeTeamScore)
    } else {
        console.log('Draw, Score : ', mikeTeamScore)
    }
} else if (johnTeamScore > maryTeamScore){
    if (johnTeamScore > mikeTeamScore){
        console.log('winner is John team, Score : ',johnTeamScore)
    } else if (johnTeamScore < mikeTeamScore){
        console.log('winner is Mike team, Score : ', mikeTeamScore)
    } else {
        console.log('winners are John team and Mike team, Score : ', mikeTeamScore)
    }
} else {
    if (maryTeamScore > mikeTeamScore){
        console.log('winner is Mary team, Score : ', maryTeamScore)
    } else if (maryTeamScore < mikeTeamScore){
        console.log('winner is Mike team, Score : ', mikeTeamScore)
    } else {
        console.log('winners are Mary team and Mike team, Score : ', maryTeamScore)
    }
}

/**
 * Functions
 */

// 여러 번 반복하는 코드를 functionn이란 container에 저장한 후 반복 사용

function calculateAge(birthYear){
    //  현재 년도 - 태어난 날
    return 2018 - birthYear
}

var ageJohn = calculateAge(1990);
var ageMike= calculateAge(1948);
var ageJane = calculateAge(1969);

console.log(ageJohn, ageMike, ageJane);

// 반복하지 말고 함수로

function yearsUntilRetirement(year, firstName){
    var age = calculateAge(year);
    var retirement = 65 - age;
    if (retirement > 0){
        console.log(firstName + ' retires in ' + retirement
        + ' years');
    } else {
        console.log(firstName + ' is already retired');
    }
}
yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Hike');
yearsUntilRetirement(1969, 'Jane');

/**
 * Functions Statements and Expressions
 */
// Function declaration
// function whatDoYouDO(job, firstName){

// }

// Function expression
// return 함으로 break을 적지 않아도 문제되지 않음
 var whatDoYouDO = function(job, firstName){
     switch(job){
         case 'teacher':
             return firstName + ' teaches kids how to code'
        
         case 'driver':
             return firstName + ' drives a cab in Lisbon.'

         case 'designer':
            return firstName + ' desingns beautiful websites'

         default:
             return firstName + ' does something else'
     }
 }

 console.log(whatDoYouDO('teacher', 'John'))
 console.log(whatDoYouDO('designer', 'Jane'))
 console.log(whatDoYouDO('retired', 'Mark'))

/**
 * Arrays
 */

//  초기화
 var names = ['John','Mark','Jane'];
 var years = new Array(1990, 1969, 1948)

 // index는 0 부터 시작함
console.log(names[0])
console.log(names.length)

// 인덱스로 접근해서 수정 가능
names[1] = 'Ben';
console.log(names);

// 한 번에 큰 인덱스 값을 바꾸면 그 사이 값은 undefined
names[5] = 'Mary'; // index 3,4 는 undefined 된다.
console.log(names)
console.log(names[3])

// Different data types
var john = ['John', 'Smith', 1990, 'teacher', false];

// 추가
john.push('blue');
console.log(john);
john.unshift('Mr.');
console.log(john);

// 제거
john.pop();
console.log();
john.pop();
console.log();

john.shift();
console.log();

// 배열에 해당하는 인덱스를 반환함, 없으면 -1
console.log(john.indexOf(1990));

// -1을 체크해서 배열에 없는지 확인
var isDesigner = john.indexOf('designer') === -1 ? 
'John is Not a designer':'John is a designer'
console.log(isDesigner)

/*****************************
* CODING CHALLENGE 3
*/

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). 
He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, 
and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

GOOD LUCK 😀
*/

var johnBills = [124, 48, 268];
var johnTips = []
function calculateTip(bill){
    if (bill < 50){
        return bill * (1.2);
    } else if(bill < 200){
        return bill * (1.15);
    } else {
        return bill * (1.10);
    }
}

johnTips.push(calculateTip(johnBills[0]));
johnTips.push(calculateTip(johnBills[1]));
johnTips.push(calculateTip(johnBills[2]));
console.log(johnBills);
console.log(johnTips);

/**
 * Objects and properties
 */

 var john = {
     firstName: "John",
     lastName : 'Smith',
     birthYear : 1990,
     family: ['Jane','Mark','Bob','Emily'],
     job : 'teacher',
     isMarried : false
 };

 console.log(john);
 console.log(john.firstName);
 console.log(john['firstName'])

 john.job = 'designer'
 john['isMarried'] = true;
 console.log(john)

//  new Object syntax
 var jane = new Object();
 jane.firstName = 'Jane';
 jane['lastName'] = 'Smith'

/**
 * Objects and methods
 */

john = {
    firstName: "John",
    lastName : 'Smith',
    birthYear : 1990,
    family: ['Jane','Mark','Bob','Emily'],
    job : 'teacher',
    isMarried : false,
    calcAge: function(){
        this.age = 2018 - this.birthYear;
    }
};

john.calcAge()
console.log(john.age)

/*****************************
* CODING CHALLENGE 4
*/

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. 
Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. 
    Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, 
    together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

GOOD LUCK 😀
*/

var mark_obj = {
    fullName : 'mark',
    mass : 79,
    height : 179,
    calculateBMI : function(){
        this.BMI = this.mass / ((this.height / 100) * (this.height / 100))
    } 
}

var john_obj = {
    fullName : 'john',
    mass : 79,
    height : 179,
    calculateBMI : function(){
        this.BMI = this.mass / ((this.height / 100) * (this.height / 100))
    }
}

mark_obj.calculateBMI()
john_obj.calculateBMI()

compareBMI = function(obj1, obj2){
    var highBMI
    if (obj1.BMI > obj2.BMI){
        highBMI = obj1;
    } else if(obj2.BMI > obj1.BMI){
        highBMI = obj2;
    }
    return highBMI
}

var highBMI = compareBMI(mark_obj, john_obj)

if (highBMI){
    console.log(highBMI.fullName + ' has higher BMI ' + highBMI.BMI);
} else{
    console.log('they have same BMI');
}

// BMI 는 소문자로 하는게 좋겠음, 같으면 undefined로 반환하는 건 괜찮지 않아보이긴함

/**
 * Loops and iteration
 */

// 아래와 같이 작성하는 것은 좋은 방법이 아님
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);
// console.log(10);

// For Loop
// 조건이 맞다면 다음 루프가 실행된다.
for (var i = 0; i < 10; i++){
    console.log(i)
}
// i+=1 i+=2 등 가능

// i = 0, 0<10 true, log i to console, i ++
// i = 1, 1<10 true, log i to console, i ++
// i = 9, 9<10 true, log i to console, i ++
// i = 10, 10<10 False, exit the loops
// 종료 후 i는 10임
console.log(i)

var john = ['John', 'Smith', 1990, 'designer', false]

// 이전 방법
// console.log(john[0]);
// console.log(john[1]);
// console.log(john[2]);
// console.log(john[3]);
// console.log(john[4]);

for (var i = 0; i < john.length; i ++){
    // i - 0,1,2,3,4
    console.log(john[i]);
}

// While loop - 조건이 맞으면 반복
var i = 0
while(i < john.length){
    console.log(john[i]);
    i++;
}

// continue and break statements
var john = ['John', 'Smith', 1990, 'designer', false]
for (var i = 0; i < john.length; i ++){
    if (typeof john[i] !== 'string'){
        continue;
    }
    console.log(john[i]);
}

for (var i = 0; i < john.length; i ++){
    if (typeof john[i] !== 'string'){
        break;
    }
    console.log(john[i]);
}

// Looping Backwards
for (var i = john.length -1; i>=0; i--){
    console.log(john[i])
}

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, 
and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 
2) an array containing final paid amounts (bill + tip). 
HINT: Start with two empty arrays [] as properties and then fill them up in the loop.


EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. 
The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 
10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. 
HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). 
After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

GOOD LUCK 😀
*/

var johnBills = {
    values : [124, 48, 268, 180, 42],
    calculateTip : function(){
        var tips = []
        var finalpay = []
        for(i=0; i<this.values.length; i++){
            if (this.values[i] < 100){
                tips.push(0.2 * this.values[i]);
                finalpay.push(1.2 * this.values[i]);
            } else if (this.values[i] < 300){
                tips.push(0.15 * this.values[i]);
                finalpay.push(1.15 * this.values[i]);
            } else {
                tips.push(0.1 * this.values[i]);
                finalpay.push(1.1 * this.values[i]);
            }
        }

        return [tips, finalpay]
    }
}

var [johnTip, johnPayamount] = johnBills.calculateTip();

console.log(johnTip, johnPayamount)

var markBills = {
    values : [124, 48, 268, 180, 42],
    calculateTip : function(){
        var tips = []
        var finalpay = []
        for(var i=0; i<this.values.length; i++){
            if (this.values[i] < 100){
                tips.push(0.2 * this.values[i]);
                finalpay.push(1.2 * this.values[i]);
            } else if (this.values[i] < 300){
                tips.push(0.1 * this.values[i]);
                finalpay.push(1.1 * this.values[i]);
            } else {
                tips.push(0.25 * this.values[i]);
                finalpay.push(1.25 * this.values[i]);
            }
        }

        return [tips, finalpay]
    }
}

var [markTip, markPayamount] = markBills.calculateTip();

function calculateAverageTips(tips){
    sumTips = 0;
    for(var i=0; i<tips.length; i++){
        sumTips += tips[i];
    }
    return sumTips / tips.length
}


var johnAverageTip = calculateAverageTips(johnTip);
var markAverageTip = calculateAverageTips(markTip);
console.log(johnAverageTip, markAverageTip)

if (johnAverageTip > markAverageTip){
    console.log('John\'s family have higher average tip than Mark\s family')
} else if(markAverageTip > johnAverageTip){
    console.log('Mark\'s family have higher average tip than John\s family')
} else{
    console.log('Their family have same average tip');
}
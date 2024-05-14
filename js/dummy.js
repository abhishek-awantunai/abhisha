/**
 * Array
 * Object 
 */

let name = "Abhishek";
let age = 21;

// const arr = ['Abhishek', 'Amisha', 'Ayushi', 'Priyanka', 'Nikki'];
/**
 * Indexed 
 * Keyed
 *  Array   
 *
 *   ['Abhishek', 'Amisha', 'Ayushi', 'Priyanka', 'Nikki']
 *        0          1         2          3          4
 * 
 */


// console.log(arr);
// arr.push('Geeta Basra');
// console.log(arr);
// arr.pop();
// console.log(arr);
// console.log(arr[1]);

// const obj = {
//     name: 'My Resume',
//     marks: '93',
//     total: 121231,
//     percentage: 87.23
// };

// console.log(obj)
// console.log(obj['percentage'])
// console.log(obj['marks'])

let a = 55;
let b = 0;
let c = false;

/**
 * 
 * == 
 * === 
 * >
 * >=
 * <
 * <= 
 * 
 */


// double equal operator
// tripple equal operator

// console.log(a <= 55);

function isStudentPassOrFail(marks){
    const percentage = (marks/500)*100
    if(percentage > 33){
        console.log('Student Passed with ' + percentage + '%');
    } else{
        console.log('Student Failed with ' + percentage + '%');
    }
}
// isStudentPassOrFail(490);


const name1 = 'Amisha';
const name2 = 'Ayushi';
const name3 = 'Nikki';
const name4 = 'Ranjit';


function findWife(name){
    // if(name == 'Amisha'){
    //     console.log('She is my beautiful wife');
    // } else if (name == 'Ayushi') {
    //     console.log('She is my sali');
    // } else if (name == 'Ranjit'){
    //     console.log('Suno Sasur ji');
    // } else{
    //     console.log('Not related');
    // }


    switch(name){
        case 'Amisha':
            console.log('She is my beautiful wife');
            break;
        case 'Ayushi':
            console.log('She is my sali');
            break;
        case 'Ranjit':
            console.log('Suno Sasur ji');
            break;
        default:
            console.log('Not related');
    }
}

// findWife(name4);




/*

i = 6




0
1
2
3
4
5

*/

// for(let i = 0; i <= 100; i++){
//     console.log(i);
// }

const numArr = [1,2,33,21,221];

const arr = ['Abhishek', 'Amisha', 'Ayushi', 'Priyanka', 'Nikki','Abhishek', 'Amisha', 'Ayushi', 'Priyanka', 'Nikki','Abhishek', 'Amisha', 'Ayushi', 'Priyanka', 'Nikki','Abhishek', 'Amisha', 'Ayushi', 'Priyanka', 'Nikki'];

for(let i=0;i < arr.length;i++){
    // console.log(arr[i]);
}








/**
 * 
 * Create a function to add two numbers
 * 
 * Create a function to multiply three numbers
 * 
 * Create a function to calculate BMI of a person Formula [ weight in kg / height in meter ]
 *  - parameter will be height in ft and weight in pounds
 * 
 * Create a function to print the values of an array
 * 
 * Create a function to add the values of an array
 * 
 * Create a function to find the length of the array
 * 
 * Create a function to print the grade of a student
 *  - parameter will be total_marks
 *  - you have to print his percentage and grade
 *  - agar 80 se jyada hai to - A
 *  - agar 60 se jyada hai and 80 se kam hai to - B
 *  - agar 50 se jyada hai and 60 se kam hai to - C
 *  - agar 35 se jyada hai and 50 se kam hai to - D
 *  - 35 se kam hai to - E
 * 
 * Create a function to calculate percentage and grade of student
 * - parameter will be his 5 subjects marks
 * 
 * Create a function to convert $ to INR
 * 
 * Create a function to calculate seconds in year
 *  - parameter will be year
 * 
 */





// Function declarations
function anyNameOfFunction(number1, number2){
    console.log(number1*number2);
}



// Function call
// anyNameOfFunction(23, 32);




// const obj ={
//     name: 'amisha',
//     printMyAge: function(age){
//         console.log(age);
//     }
// }

// console.log(obj.printMyAge(33))





/**
 * 
 * DAY : 3
 * 
 * OPERATORS
 * 
 */


// Arithmetic Operators
/**
 * 
 * Arithmetic Operators on Numbers
 * 
 */


const variable1 = 5
const variable2 = 15


// Addition
// console.log(variable1 + variable2);

// Subtraction
// console.log(variable1 - variable2);

// Multiplication
// console.log(variable1*variable2);

// Division
// console.log(variable2/variable1);


/**
 * 
 * Arithmetic Operators on Strings
 * 
 */

const stringVariable1 = 'a5abcd'; // NaN
const stringVariable2 = '1'; // 1 


// console.log(stringVariable1+stringVariable2);  //  --> a5abcd1
// console.log(stringVariable1-stringVariable2);  //  --> NaN
// console.log(stringVariable1*stringVariable2);  //  --> NaN
// console.log(stringVariable1/stringVariable2);  //  --> NaN


/**
 * 
 * Arithmetic Operators on Boolean
 * 
 */

const booleanVariable1 = false; // 0
const booleanVariable2 = true; // 1

// console.log(booleanVariable1+booleanVariable2);  //  --> 1
// console.log(booleanVariable1-booleanVariable2);  //  --> -1
// console.log(booleanVariable1*booleanVariable2);  //  --> 0
// console.log(booleanVariable1/booleanVariable2);  //  --> 0

const num1 = 22;
const num2 = 5;
const num3 = 2;

/**
 * 
 * Modulus Operators [ % ]
 */ 
// console.log(num1%num2); // --> 2
// console.log(num1%num3); // --> 0

/**
 * 
 * Exponential Operators [ ** ] 
 */ 
// console.log(5**10)

/**
 * 
 * Increment Operators [ ** ] 
 */ 
let amishaGhnonchu = 10;
amishaGhnonchu = amishaGhnonchu + 6;   // 16
amishaGhnonchu--;   // 15
amishaGhnonchu++;   // 16
amishaGhnonchu++;   // 17
amishaGhnonchu++;   // 18
amishaGhnonchu++;   // 19
amishaGhnonchu--;   // 18
amishaGhnonchu--;   // 17
amishaGhnonchu--;   // 16
amishaGhnonchu--;   // 15

// console.log(amishaGhnonchu) // 15


// Assignment Operators
const homeTown = 'jamshedpur';

let compoundNum = 7;

// Simple Assignment Operator
compoundNum = compoundNum + 1;
// Compound Assignment Operator
compoundNum++;

// Simple Assignment Operator
compoundNum = compoundNum + 6;
// Compound Assignment Operator
compoundNum += 6;

// Simple Assignment Operator
compoundNum = compoundNum - 1;
// Compound Assignment Operator
compoundNum--;

// Simple Assignment Operator
compoundNum = compoundNum - 6;
// Compound Assignment Operator
compoundNum -= 6;

// Simple Assignment Operator
compoundNum = compoundNum * 6;
// Compound Assignment Operator
compoundNum *= 6;

// Simple Assignment Operator
compoundNum = compoundNum / 6;
// Compound Assignment Operator
compoundNum /= 6;


/**
 * 
 * Comparison Operators
 * >, <, >=, <=, ==, ===, !=, !==
 * 
 */

const fruit = 20;
const vegetables = 12;

if (vegetables > fruit){
    // console.log('vegetables khatam karenge');
} else {
    // console.log('fruit khatam karenge');
}

const amishaAge = 28; // value = 28, type = number
const priyankaAge = '28'; // value = 28, type = string
const abhishekAge = 32; // value = 28, type = string
const nikkiAge = 12; // value = 28, type = string

if (nikkiAge <= amishaAge && nikkiAge <= 15) {
    // console.log('Nikki is a teenager');
}

// console.log(amishaAge == priyankaAge); // true
// console.log(amishaAge === priyankaAge); // false

// console.log(amishaAge != priyankaAge); // false
// console.log( abhishekAge != priyankaAge); // true

// console.log(amishaAge !== priyankaAge); // true
// console.log( abhishekAge !== priyankaAge); // true

/**
 * 
 * Logical Operator
 * 
 * AND Operator
 * comparision && comparision
 * true && true => true
 * true && false => false
 * false && true => false
 * false && false => false
 * 
 * 
 * OR Operator
 * comparision || comparision
 * true || true => true
 * true || false => true
 * false || true => true
 * false || false => false
 * 
 */


/**
 * 
 * if(comparision){ // true / false
 * 
 * } else {
 * 
 * }
 * 
 */


const isTerrorist = true;

console.log(!!!isTerrorist)

if(isTerrorist) {
    console.log('Terrorist');
} else {
    console.log('Hero');
}

// Ternary Operator
isTerrorist ? console.log('Terrorist') : console.log('Hero');


if (!(amishaAge > nikkiAge)) {}


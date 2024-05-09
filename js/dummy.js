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
    console.log(arr[i]);
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



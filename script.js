// 1. get from the user a number and count 1 to the number chosen
// 2. get from the user two numbers and count untill the number chosen in steps of the second number
// 3. multiplaction table
// 4. pyramid - the user sets a number of levels 
// 4.1 base on top levels to the side
// 4.2. base on bottom
// 4.3 centered



function countToNum() {
    userInput = prompt("enter number:");
    for (let count = 1; count < userInput;) {
        console.log(count);
        count++;
    }
    console.log(userInput)

};

function stepsToNum() {
    let userInput = +prompt("enter number");
    let stepNum = +prompt("enter number");
    for (let count = 0; count <= userInput; count += stepNum) {
        console.log(count);
    }
}

function multiplactionTable() {
    for (let count = 1; count <= 10; count++) {
        stepsToNum2(count * 10, count);
    }
}

function stepsToNum2(num, step) {
    let str = "";
    for (let count = step; count <= num; count += step) {
        str += `${count}\t`;
    }
    console.log(str);
}

function pyramid1() {
    numOfLevel = +prompt("enter number of levels");
    for (let i = 0; i < numOfLevel; i++) {
        let star = "";
        for (let j = 0; j <= i; j++) {
            star += "* ";
        }
        console.log(star);
    }
}

function pyramid2() {
    numOfLevel = +prompt("enter number of levels");
    for (let i = numOfLevel; i >= 0; i--) {
        let star = "";
        for (let j = 0; j <= i; j++) {
            star += "* ";
        }
        console.log(star);
    }
}

function pyramid3() {
    numOfLevel = +prompt("enter number of levels");
    for (let i = 1; i <= numOfLevel; i++) {
        let star = "";
        for (let j = 1; j <= numOfLevel - i; j++) {
            star += " ";
        }
        for (let k = 1; k <= i * 2 - 1; k++) {
            star += "*";
        }
        console.log(star);

    }
}

function pyramid4() {
    numOfLevel = +prompt("enter number of levels");
    for (let i = 1; i <= numOfLevel; i++) {
        let star = "";
        for (let j = 1; j <= numOfLevel - i; j++) {
            star += " ";
        }
        for (let k = 1; k <= i; k++) {
            star += "*";
        }
        console.log(star);

    }
}

function prime() {
    let userInput = +prompt("enter number");
    for (let i = 1; i <= userInput; i++) {
        for (let j = 2; j <= i; j++) {
            if (j === i) {
                console.log(i);
            }
            if (i % j === 0) {
                break;
            }
        }
    }
}

function countDuplication() {
    let userInput = +prompt("enter number");
    let arr = [1, 3, 4, 5, 6, 7, 8, 5, 5, 5, 30, 30, 22, 22, 2, 4, 3, 3];
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === userInput) {
            count++;
        }
    }
    console.log(`${userInput} appear ${count} times`);
}


// get 2 numbers from the user
// print the sum of all the numbers between the user input
// example:
//      arr = [1, 3, 4, 5, 6, 7, 8, 30, 22, 2, 3, 24]
//      userInput num1 = 31
//      userInput num2 = 10
//      print: the sum of the numbers between num1 and num2 is 66: 30 + 22 + 24

function sumAllNumsInRange() {
    let userNum1 = +prompt("enter first number");
    let userNum2 = +prompt(`enter second number`);
    let sum = 0;
    let str = "";

    let arr = [1, 3, 4, 5, 6, 7, 8, 30, 22, 2, 10, 24];
    for (let i = 0; i < arr.length; i++) {
        if ((userNum1 <= userNum2 && arr[i] >= userNum1 && arr[i] <= userNum2) ||
            (userNum1 > userNum2 && arr[i] >= userNum2 && arr[i] <= userNum1)) {
            sum += arr[i];
            str += ` + ${arr[i]} `;
        }
    }

    console.log(`the sum of the numbers between ${userNum1} and ${userNum2} is: ${sum} = ${str}`);
    console.log(arr);
}

function getSumAllNumsInRange(userNum1, userNum2, arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if ((userNum1 <= userNum2 && arr[i] >= userNum1 && arr[i] <= userNum2) ||
            (userNum1 > userNum2 && arr[i] >= userNum2 && arr[i] <= userNum1)) {
            sum += arr[i];
        }
    }

    return sum;
}

function minMax() {
    let arr = [11, 3, 4, 5, 6, 7, 8, 30, 22, 2, 10, 24];
    let max = arr[0];
    let min = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    let sum = getSumAllNumsInRange(min, max, arr);
    let avg = sum / arr.length;

    console.log("avg: " + avg);
    console.log("max: " + max);
    console.log("min: " + min);
}
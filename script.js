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
        let star = " ";
        for (let j = 1; j <= numOfLevel - i; j++) {
            star += " ";
        }
        for (let k = 1; k <= i * 2 - 1; k++) {
            star += "*";
        }
        console.log(star);

    }
}
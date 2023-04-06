// Q1:
// Answer1:
// let num1 = prompt("Enter first number:");
// let num2 = prompt("Enter second number:");

// if (num1 > num2) {
//     console.log("The Larger Number Is." + " " + num1);
// } else if (num2 > num1) {
//     console.log("The Larger Number Is." + " " + num2);
// } else {
//     console.log("Both Numbers Are Equal.");
// }

// Q2 :
// Answer 2:
// let num = prompt("Enter a number:");
// if (num > 0) {
//   alert("The sign is +");
// } else if (num < 0) {
//   alert("The sign is -");
// } else {
//   alert("The number is 0");
// }

// Q3:
// A3:
// let num1 = prompt("Enter number 1:");
// let num2 = prompt("Enter number 2:");
// let num3 = prompt("Enter number 3:");
// let num4 = prompt("Enter number 4:");
// let num5 = prompt("Enter number 5:");

// // Find the larger number using Math.max() function
// let larger = Math.max(num1, num2, num3, num4, num5);

// // Display the larger number in the console
// console.log("The larger number is:", larger);


// Q4:
// A4:
// for (let i = 0; i <= 15; i++) {
//     if (i % 2 === 0) {
//         console.log("EVEN :" + " " + i);
//     } else {
//         console.log("ODD :" + " " + i);
//     }
// }


// Q5:
// A5:
// let marksSheet = +prompt('type yours marks');
// let grade;
// if (marksSheet >= 0 && marksSheet <= 100) {
//     if (marksSheet >= 91) {
//         grade = "A";
//     }
//     else if (marksSheet >= 81) {
//         grade = "B";
//     }
//     else if (marksSheet >= 71) {
//         grade = "C"
//     }
//     else if (marksSheet >= 61) {
//         grade = "D"
//     }
//     else if (marksSheet >= 51) {
//         grade = "E"
//     }
//     else {
//         grade = "Fail"
//     }
//     console.log(marksSheet + " " + grade)
// }


// Q6:
// A6:
// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//       console.log("Fizz");
//     } else if (i % 5 === 0) {
//       console.log("Buzz");
//     } else {
//       console.log(i);
//     }
//   }


// Q7:
// A7:
// for (let i = 1; i <= 5; i++) {
//     let row = '';
//     for (let j = 1; j <= i; j++) {
//       row += '* ';
//     }
//     console.log(row);
//   }
// const list = document.querySelector(".first-button");
// list.addEventListener("click", myFunction);

// function myFunction() {
//   document.querySelector(".first-button").onclick = document.getElementById(
//     "first-para"
//   ).innerHTML = "hello javascript";
// }

// const tryfunction = document.getElementById("2-btn");
// tryfunction.addEventListener("click", btnfunction);

// function btnfunction() {
//   document.getElementById("2-btn").onclick = document.getElementById(
//     "2-para"
//   ).innerHTML = "hello world";
// }

// const x = multi(12, 8);
// document.getElementById("demo").innerHTML = x;

// function multi(a, b) {
//   return a * b;
// }

// function Cars(car, model, color) {
//   this.carName = car;
//   this.modelName = model;
//   this.paint = color;
// }

// const myCar = new Cars("gtr", "r-35", "black");
// document.getElementById("car").innerHTML =
//   "my car is " + myCar.carName + myCar.modelName;

// function Person(first, last, age, eye, dob) {
//   this.firstName = first;
//   this.lastName = last;
//   this.age = age;
//   this.eyeColor = eye;
//   this.dob = new Date();
//   this.fullName = function () {
//     return this.firstName + "   " + this.lastName;
//   };
// }

// // Create a Person object
// const myFather = new Person("John", "Doe", 50, "blue");

// // Display full name
// document.getElementById("dated").innerHTML =
//   "My father is " + myFather.fullName() + myFather.dob;

// const largeNum = new Array(5);
// for (i = 0; i <= 5; i++) {
//   const userInput = prompt(`Enter five numbers `); //5
//   const number = parseFloat("userInput"); //5

//   if (number > userInput) {
//     largeNum = number;
//   } else {
//     console.log("the largest number is:", largeNum);
//   }
// }
// function findlargenum() {
//   const inputArray = [];
//   for (i = 1; i <= 5; i++) {
//     inputArray.push(Number(document.getElementById("array-input").value));
//   }
//   let largeNum = Math.max(...inputArray);
//   console.log("largest number is:" + largeNum);
// }

// // sorting
// const cars = ["5000", "900", "100"];
// document.getElementById("demo").innerHTML = cars;

// function alphabet() {
//   cars.sort(function () {
//     return 0.5 - Math.random();
//   });
//   document.getElementById("demo").innerHTML = cars;
// }

// function numeric() {
//   cars.sort(function (a, b) {
//     return a - b;
//   });
//   document.getElementById("demo").innerHTML = cars;
// }

// // vertical array sort

// const numbers = [10, 40, 30, 70, 89];
// let txt = "";
// numbers.forEach(myFunction);
// document.getElementById("demo").innerHTML = txt;

// function myFunction(value) {
//   txt += value + "<br>";
// }

// fuction to get input

// function getUserInputs() {
//   let inputs = [];
//   for (let i = 0; i < 5; i++) {
//     let userInput = prompt(`Enter 5 numbers ${i + 1}:`);
//     inputs.push(parseFloat(userInput));
//   }
//   return inputs;
// }

//fuction to shoe large number

// function findlargenum(numbers) {
//   let largest = numbers[0];
//   for (i = 0; i < numbers.length; i++) {
//     if (numbers[i] > largest) {
//       largest = numbers[i];
//     }
//   }
//   return largest;
// }

// // main execution

// let userInputs = getUserInputs(); // f1
// let largestNumber = findlargenum(userInputs); //f2
// console.log(`the largest number is ${largestNumber}`);

// let date;
// switch (new Date().getDay()) {
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//     day = "tuesday";
//     break;
//   case 3:
//     day = "wedensday";
//     break;
//   case 4:
//     day = "thursday";
//   // break;
// }
// document.getElementById("demo").innerHTML = "today is" + day;

// const cars = ["gtr", "bmw", "ferrrai", "porshce"];
// let text = "";
// for (i = 0; i < cars.length; i++) {
//   text += cars[i];
// }
// document.getElementById("demo").innerHTML = text;
// dddsds;






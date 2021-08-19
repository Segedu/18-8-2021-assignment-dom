////1
// function printToWindow() {
//   document.write("hello there");
// }

////2
// function printToWindow() {
//   document.write("hello there David");
// }

////3
// var userName = prompt("enter name");
// function printToWindow(name) {
//   document.write("hello there");
// }
// printToWindow(userName);

////unknown
// var userAge = Number(prompt("enter age"));
// var userName = prompt("enter name");
// function printUserInputs(name, age) {
//   document.write(name, " ", age);
// }
// printUserInputs(userAge, userName);

////4
// var userAge = Number(prompt("enter age"));
// var userName = prompt("enter name");
// var lastName = prompt("enter last name");
// function printUserInputs() {
//   document.write(
//     `age:${userAge}, " ", name:${userName}, " ", last name:${lastName}`
//   );
// }
// printUserInputs(userAge, userName, lastName);

////5

// var userAge = Number(prompt("enter age"));
// var userName = prompt("enter name");
// function printInDiv(age, name) {
//   var divElement = document.getElementById("myDiv");
//   divElement.innerHTML = `name:${name} age:${age}`;
// }
// printInDiv(userAge, userName);

////6
// var userAge = Number(prompt("enter age"));
// var userName = prompt("enter name");
// var lastName = prompt("enter last name");
// function printInDivSperatly(age, name, lastName) {
//   document.getElementById(
//     "secondDiv"
//   ).innerHTML = `age:${age}, name:${name}, lastName:${lastName}`;
//   document.getElementById(
//     "thirdDiv"
//   ).innerHTML = `age:${age}, name:${name}, lastName:${lastName}`;
//   document.getElementById(
//     "fourthDiv"
//   ).innerHTML = `age:${age}, name:${name}, lastName:${lastName}`;
// }
// printInDivSperatly(userAge, userName, lastName);

////7
// var userAge = Number(prompt("enter age"));
// var userName = prompt("enter name");
// function printToWindow(name, age) {
//   document.write(`<div>name, age</div>`);
// }
// printToWindow(userAge, userName);

////8
// var userAge = Number(prompt("enter age"));
// var userName = prompt("enter name");
// var lastName = prompt("enter last name");
// function printToWindow(age, name, lastName) {
//   document.write(
//     `<div><p>age:${age}, name:${name}, lastName:${lastName}</p></div>`
//   );
// }
// printToWindow(userAge, userName, lastName);

////9
// var userAge = Number(prompt("enter age"));
// var userName = prompt("enter name");
// var lastName = prompt("enter last name");
// function printToWindow(age, name, lastName) {
//   document.write(`<p id="pId">age:${age}, name:${name}, lastName:${lastName}</p>`);
// }
// printToWindow(userAge, userName, lastName);

////10
// var userAge = Number(prompt("enter age"));
// var userName = prompt("enter name");
// var lastName = prompt("enter last name");
// function printToWindow(age, name, lastName) {
//   document.write(`<div><p id="pId">age:${age}, name:${name}, lastName:${lastName}</p></div>`);
// }
// printToWindow(userAge, userName, lastName);

////11
// var firstName = prompt("enter first name");
// function printFirstName(name) {
//   document.write(`<p id="parag">name:${name}</p>`);
// }
// printFirstName(firstName);

// var lastName = prompt("enter last name");
// function printLastName(lastname) {
//   document.write(`<p id="parag">name:${firstName} lastname:${lastname}</p>`);
// }
// printLastName(lastName);

////12
// var firstName = prompt("enter first name");
// function printFirstName(name) {
//   document.write(`<p id="parag">name:${name}</p>`);
// }
// printFirstName(firstName);

// var lastName = prompt("enter last name");
// const d = new Date();
// function printLastName(lastname) {
//   document.getElementById("parag").innerHTML += ` lastname:${lastname}`;
//   document.write(d);
// }
// printLastName(lastName);

////13
// var userColor = prompt("choose color"),
//   userCompany = prompt("choose car company"),
//   userCapacity = prompt("choose car capacity");

// function getCarObject(color, company, capacity) {
//   car = {
//     color: color,
//     company: company,
//     capacity: capacity,
//   };
//   document.write(car.color, car.company, car.capacity);
// }
// getCarObject(userColor, userCompany, userCapacity);

////14

// var userColor = prompt("choose color"),
//   userCompany = prompt("choose car company"),
//   userCapacity = prompt("choose car capacity");
// function getCarObject(color, company, capacity) {
//   secondCar = {
//     color: color,
//     company: company,
//     capacity: capacity,
//     year: new Date().getFullYear(),
//   };
//   document.write(secondCar.color, secondCar.company, secondCar.capacity, secondCar.year);
// }
// getCarObject(userColor, userCompany, userCapacity);

////15
// var userColor = prompt("choose color"),
//   userCompany = prompt("choose car company"),
//   userCapacity = prompt("choose car capacity");
// function getCarObject(color, company, capacity) {
//   thirdCar = {
//     color: color,
//     company: company,
//     capacity: capacity,
//   };
//   document.write(`<div>${thirdCar}</div>`);
// }
// getCarObject(userColor, userCompany, userCapacity);

////16

// var userColor = prompt("choose color"),
// userCompany = prompt("choose car company"),
// userCapacity = prompt("choose car capacity");
// function getCarObject(color, company, capacity) {
//   forthCar = {
//     color: color,
//     company: company,
//     capacity: capacity,
//     year: new Date().getFullYear(),
//   };
//   document.write(
//     `<div>${forthCar.color}</div>`,
//     `<div>${forthCar.company}</div>`,
//     `<div>${forthCar.capacity}</div>`,
//     `<div>${forthCar.year}</div>`
//   );
// }
// getCarObject(userColor, userCompany, userCapacity);

//17
// var userColor = prompt("choose color"),
//   userCompany = prompt("choose car company"),
//   userCapacity = prompt("choose car capacity");
// function getCarObject(color, company, capacity) {
//   fifthCar = {
//     color: color,
//     company: company,
//     capacity: capacity,
//     year: new Date().getFullYear(),
//   };
//   document.write(
//     `<div id="firstDiv">${fifthCar.color}</div>`,
//     `<div id="secondDiv">${fifthCar.company}</div>`,
//     `<div id="thirdDiv">${fifthCar.capacity}</div>`,
//     `<div id="fourthDiv">${fifthCar.year}</div>`
//   );
// }
// getCarObject(userColor, userCompany, userCapacity);

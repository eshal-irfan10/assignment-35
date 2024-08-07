// function date (){
//     let d = new Date()
//     document.write(d) 
// }
//  date()
// let f_name = prompt("Enter your fname");
// let l_name = prompt("Enter your lname");
// function greets (f_name , l_name){
// document.write(" Welcome "  + " " + f_name + " " + l_name)
// }
// greets(f_name , l_name);

// let a = +prompt("Enter a number :");
// let b = +prompt("Enter a number :");
// function sum(a , b){
//     return a + b;
// }
// console.log(sum(a ,b));
// let num1 = +prompt("Enter a number :");
// let num2 = +prompt("Enter a number :");
// let operator = prompt("Enter any operater :");
// function calculater(num1 , num2 , operater){
//     if(operater === "+"){
//         document.write(num1 + ""+ num2 + "" + operator + "=" + "" + (num1 + num2))

//     }
//     else if(operater === " - "){
//         document.write(num1 + ""+ num2 + "" +  operator + "=" + "" + (num1 - num2))
//     }
//     else if (operater === "*"){
//         document.write(num1 + ""+ num2 + "" + operator + "=" + "" + (num1 * num2))
//     }
//     else if(operater === "/"){
//         document.write(num1 + ""+ num2 + "" +  operator + "=" + "" + (num1 / num2))
//     }
// }
// calculater(num1 , num2 , operator)
// function square(num){
//     return num * num
// }
// console.log(square[2]);
// function factorial(n) {
//     if (n < 0) {
//       return "Factorial is not defined for negative numbers";
//     }
//     if (n === 0 || n === 1) {
//       return 1;
//     }
//     return n * factorial(n - 1);
//   }
  
  
//   console.log(factorial(5)); 
//   console.log(factorial(0)); 
//   console.log(factorial(-1)); 
//   // Function to display counting
// function displayCounting(start, end) {
//     // Validate input
//     if (isNaN(start) || isNaN(end)) {
//         console.error('Please enter valid numbers.');
//         return;
//     }

//     if (start > end) {
//         console.error('Start number should be less than or equal to end number.');
//         return;
//     }

//     // Create a container for the counting display
//     var displayDiv = document.createElement('div');
//     displayDiv.id = 'countingDisplay';
//     document.body.appendChild(displayDiv);

//     // Display the counting
//     for (var i = start; i <= end; i++) {
//         displayDiv.innerHTML += i + '<br>';
//     }
// }
// var startInput = document.createElement('input');
// startInput.type = 'number';
// startInput.id = 'start';
// startInput.placeholder = 'Start Number';

// var endInput = document.createElement('input');
// endInput.type = 'number';
// endInput.id = 'end';
// endInput.placeholder = 'End Number';

// var button = document.createElement('button');
// button.innerText = 'Display Counting';
// button.onclick = function() {
//     var start = parseInt(startInput.value);
//     var end = parseInt(endInput.value);
//     displayCounting(start, end);
// };

// document.body.appendChild(startInput);
// document.body.appendChild(endInput);
// document.body.appendChild(button);

//   function displayCounting() {
//     let start = parseInt(document.querySelector('#start').value);
//     let end = parseInt(document.querySelector('#end').value);
//     let resultDiv = document.querySelector('#result');
    
//     resultDiv.innerHTML = ''; 

//     if (isNaN(start) || isNaN(end)) {
//       resultDiv.innerHTML = 'Please enter valid numbers for both start and end.';
//       return;
//     }

//     if (start > end) {
//       resultDiv.innerHTML = 'Start number should be less than or equal to end number.';
//       return;
//     }

//     for (let i = start; i <= end; i++) {
//       let p = document.createElement('p');
//       p.textContent = i;
//       resultDiv.appendChild(p);
// }
// }
// function calculateHypotenuse(base, perpendicular) {
//     function calculateSquare(num) {
//         return num * num;
//     }

//     const baseSquare = calculateSquare(base);
//     const perpendicularSquare = calculateSquare(perpendicular);


//     const hypotenuse = Math.sqrt(baseSquare + perpendicularSquare);

//     return hypotenuse;
// }

// // Example usage:
// const base = 3;
// const perpendicular = 4;
// const hypotenuse = calculateHypotenuse(base, perpendicular);
// console.log("The hypotenuse is:", hypotenuse);

// //ques;9
// function areaOfRectangle(width, height) {
//     return "area of Rectangleis :" + width * height
    
// }
// console.log(areaOfRectangle(6,7));
// console.log(areaOfRectangle(6,8));
// console.log(areaOfRectangle(4,7));

// let radius = +prompt("Enter radius value:")

//  function circumference(radius){
    // return "The Circumference is:" + (2*3.41*radius);
// }
// // console.log(circumference(radius));

// function calcarea(radius){
//     return "The area is : " + (3.41*radius*radius)
// }
// console.log(calcarea(radius));




 //ques:
// let start_number = +prompt("Enter a start number");
// let end_number = +prompt("Enter a end number");
// function count(start_number,end_number) {
// if (start_number > end_number){
//     for(let i= start_number; i>end_number; i--)
//     document.write(i + "<br>")
// }
// else if (start_number < end_number ){
//     for(let i= start_number; i<=end_number; i++)
//     document.write(i + "<br>")
// }
// else if (start_number === end_number)
// document.write("both are equal")
// }
// count(start_number,end_number);
// function isPalindrome(str) {
//     let cleaned = '';
//     for (let char of str.toLowerCase()) {
//         if (char >= 'a' && char <= 'z' || char >= '0' && char <= '9') {
//             cleaned += char;
//         }
//     }
//     return cleaned === cleaned.split('').reverse().join('');
// }

// console.log(isPalindrome("A man, a plan, a canal, Panama!")); // true
// // console.log(isPalindrome("Hello, World!")); 
// const text = 'the quick brown fox';
// const text_ = text.split(' ').map(function(word) {
//     return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
// }).join(' ');

// document.write("Example string : " + text + "<br>");
// document.write("Expected string : " + text_  );
// const _text = "Web Development Tutorial";
// const t_ext = _text.slice(4,15)
// document.write("Example string : " + _text + "<br>");
// document.write("Expected string : " + t_ext  );
// function countOccurrences(str, letter) {
//     let count = 0;
//     for (let char of str) {
//         if (char === letter) {
//             count++;
//         }
//     }
//     return count;
// }
// const string = 'JSResourceS.com';
// const letter = 'o';
// console.log(`The letter "${letter}" occurs ${countOccurrences(string, letter)} times in the string "${string}".`);
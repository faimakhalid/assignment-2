// Chapter:3
// Task 1: Declare height and add 10
var height = 170;
var newHeight = height + 10;
alert("New Height: " + newHeight);  // Displays 180

// Task 2: Declare num1 and num2
var num1 = 50;
var num2 = 30;

// Task 3: Create sum and display it
var sum = num1 + num2;
alert("Sum: " + sum);  // Displays 80

// Task 4: Declare numToBeAdded and calculate total
var numToBeAdded = 20;
var total = sum + numToBeAdded;
alert("Total: " + total);  // Displays 100

// Task 5: Add 10% tax to price and display total price
var price = 120;
var tax = price * 0.10;  // 10% of price
var totalPrice = price + tax;
alert("Total Price with Tax: " + totalPrice);  // Displays 132

// chapter:4

// Task 1: Create myAddress variable in camelCase and display it
var myAddress = "Lahore";  // Assign your city name here
alert("My Address: " + myAddress);

// Task 2: Declare three variables in camelCase and display them together
var userName = "Fatima Khalid";
var userEmail = "fatima@example.com";
var userPassword = "mySecurePassword";
alert("User Info:\nName: " + userName + "\nEmail: " + userEmail + "\nPassword: " + userPassword);

// Task 3: Declare variable with spaces and observe
// This will cause an error because spaces are not allowed in variable names
// var user address = "123 Street";  // Uncomment this to see the error

// Correct variable name using camelCase
var userAddress = "123 Street, Lahore";
alert("User Address: " + userAddress);

// Task 4: Declare variable rose and try accessing it with different case
var rose = "Floribundas";
alert("rose (lowercase): " + rose);

// Accessing the variable using 'Rose' will cause an error
// Uncommenting the following line will give an "undefined" error, because JavaScript is case-sensitive
// alert("Rose (uppercase): " + Rose);  // This will throw an error


// Chapter:5
// Task 1: Add 25 and 30, assign the result to 'sum', and display it
var sum = 25 + 30;
alert("Sum of 25 and 30: " + sum);  // Displays 55

// Task 2: Create num1 and num2, add them, and display the sum
var num1 = 25;
var num2 = 5;
var sum = num1 + num2;
alert("Sum of num1 and num2: " + sum);  // Displays 30

// Task 3: Assign the remainder of 27 divided by 4 to 'modulusResult' and display it
var modulusResult = 27 % 4;
alert("Remainder of 27 divided by 4: " + modulusResult);  // Displays 3


// chapter:6

// Task 1: Post-increment (num++) and display num and newNum
var num = 3;
var newNum = num++;  // Post-increment: newNum gets the value of num before it is incremented
alert("num: " + num);      // Displays 4 (because num is incremented after the assignment)
alert("newNum: " + newNum);  // Displays 3 (the value before increment)

// Task 2: Use counter++ twice and display the final value of counter
var counter = 10;
counter++;
counter++;
alert("Final counter value: " + counter);  // Displays 12 (incremented twice)

// Task 3: Post-decrement and pre-increment with points
var points = 20;
points--;        // Post-decrement: points = 19
++points;        // Pre-increment: points = 20
alert("Final points value: " + points);  // Displays 20

// Task 4: Increment number three times and display the final value
var number = 0;
++number;  // number = 1
++number;  // number = 2
++number;  // number = 3
alert("Final number value: " + number);  // Displays 3

// Chapter:7

// Task 1: Combine parentheses and modulus operator %
var calculation = (20 % 6) + 5;  // First, 20 % 6 is calculated, then 5 is added
alert("Calculation: " + calculation);  // Displays 7

// Task 2: Calculate (6 + 2) * (5 - 3)
var expressionValue = (6 + 2) * (5 - 3);  // First, 6 + 2 and 5 - 3 are calculated, then multiplied
alert("Expression Value: " + expressionValue);  // Displays 16

// Task 3: Value of finalTotal in expression with operator precedence
var finalTotal = 5 + 2 * 3;  // Multiplication happens first, then addition
alert("Final Total: " + finalTotal);  // Displays 11

// Task 4: Evaluate the value of answer
var answer = 10 + 5 * (3 - 1) / 2;  // First, parentheses, then multiplication, division, and addition
alert("Answer: " + answer);  // Displays 15
 


// Chapter:8

// Task 1: Ask for user's name and display a greeting
var userName = prompt("What is your name?");
alert("Hello, " + userName + "!");

// Task 2: Ask for user's age and handle the "Cancel" case
var age = prompt("How old are you?");
if (age === null) {
  alert("No age provided");  // User clicked "Cancel"
} else {
  alert("You are " + age + " years old.");
}

// Task 3: Ask for the number of pets and handle empty input
var pets = prompt("How many pets do you have?");
if (pets === "") {
  alert("You didn't enter anything.");  // Empty input
} else {
  alert("You have " + pets + " pets.");
}

// Task 4: Ask for a number between 1 and 10, convert and multiply
var number = prompt("Enter a number between 1 and 10");
var result = Number(number) * 2;  // Convert the input to a number and multiply by 2
alert("The result is: " + result);

// Task 5: Ask for favorite number and assign a default if no input
var favNum = prompt("What is your favorite number?");
if (favNum === "") {
  favNum = 7;  // Assign default value if the input is empty
}
alert("Your favorite number is: " + favNum);

// Chapter:9

var score = 0;  // Initialize the score

// Task 1 & 2: Asking for the capital of France and checking the answer
var franceCapital = prompt("What is the capital of France?");
if (franceCapital === "Paris") {
  alert("Correct!");
  score++;  // Increment score if correct
} else {
  alert("Incorrect, the correct answer is Paris.");
}

// Task 3: Asking for the capital of the United Kingdom with multiple correct answers
var ukCapital = prompt("What is the capital of the United Kingdom?");
if (ukCapital === "London" || ukCapital === "The United Kingdom") {
  alert("Correct!");
  score++;  // Increment score if correct
} else {
  alert("Incorrect, the correct answer is London.");
}

// Task 4: Testing multiple variables (capital of Germany and math question)
var germanyCapital = prompt("What is the capital of Germany?");
var mathAnswer = prompt("What is 10 + 10?");

if (germanyCapital === "Berlin") {
  score++;  // Increment score if correct
}
if (mathAnswer == 20) {
  score++;  // Increment score if correct
}

// Task 5: Display result based on how many answers are correct
if (germanyCapital === "Berlin" && mathAnswer == 20) {
  alert("You got both right!");
} else if (germanyCapital === "Berlin" || mathAnswer == 20) {
  alert("You got one correct!");
} else {
  alert("You got both wrong.");
}

// Final Score
alert("Your final score is: " + score);


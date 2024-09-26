// *********************** CH#12 & 13 IF...ELSE & ELSE IF STATEMENT,TESTING SET OF CONDITIONS*********************

// ********************************************Q#1****************************************************************
// Q1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).


var userInput = prompt(" Enter Number,Strings or Characters like uppercase and lover case letters");

if (userInput.charCodeAt() >= 48 && userInput.charCodeAt() <= 57) {
  alert("number: "+userInput);
} else if (userInput.charCodeAt() >= 65 && userInput.charCodeAt() <= 90) {

    alert("Upper-case letter: "+userInput);

} else if (userInput.charCodeAt() >= 97 && userInput.charCodeAt() <= 122) {

    alert("Lower-case letter: "+userInput);  

} else if (userInput.charCodeAt() >= 33 && userInput.charCodeAt() <= 47 || userInput.charCodeAt() >= 58 && userInput.charCodeAt() <= 64) {

    alert("special characters: "+userInput);    

} else {
  alert("IN progress");
}

// ********************************************Q#2****************************************************************
// Q2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.


var num1=prompt("enter first number")
var num2=prompt("enter second number")

if(num1>num2){
    alert("largest number is: "+num1)
}
else if(num1===num2){
    alert("Both numbers are equal")

}
else{
    alert("largest number is: "+num2)
 
}

// ********************************************Q#3****************************************************************

// Q3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.

var num=prompt("Enter a number to find positive or negative number")

if(num>0){
    alert(num+" is positive number")
}
else if(num<0){
    alert(num+" is negative number")

}
else if(num==0){
    alert("The given input is zero")

}
else{
    alert("Syntax Error")
 
}

// ********************************************Q#4****************************************************************
// Q4. Write a program that takes a character (i.e. string of
//    length 1) and returns true if it is a vowel, false otherwise


var character=prompt("Enter a  character to find vowel").toLowerCase();

if(character==="a"||character==="e"||character==="i"||character==="o"||character==="u"){
    alert("True")
}
else{
    alert("False")
}




// ********************************************Q#5****************************************************************
// Q5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.



 var store_password="admin123"
 var enter_password=prompt("Enter password")
 if(enter_password===store_password){
    alert("“Correct! The password you entered matches the original password.")
 }  
 else if(!enter_password){
   alert(" Please enter your password")
 }
 else{
    alert("Incorrect password")
 }

// ********************************************Q#6****************************************************************
// Q6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }
  
// :Correction:


var greeting;
var hour = 13;
if (hour < 18) {
alert(greeting = "Good day");}
else{
alert(greeting = "Good evening");
}


// ********************************************Q#7****************************************************************
// Q7. Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements



 var clock=prompt("Enter hours in 24 hours format")
 if(clock==="0000"||clock==="2400"){
alert("12:00 AM")
 }
 else if(clock==="0100"){
   alert("1:00 AM")
}
else if(clock==="0200"){
   alert("2:00 AM")
}
else if(clock==="0300"){
   alert("3:00 AM")
}
else if(clock==="0400"){
   alert("4:00 AM")
}
else if(clock==="0500"){
   alert("5:00 AM")
}
else if(clock==="0600"){
   alert("6:00 AM")
}
else if(clock==="0700"){
   alert("7:00 AM")
}
else if(clock==="0800"){
   alert("8:00 AM")
}
else if(clock==="0900"){
   alert("9:00 AM")
}
else if(clock==="1000"){
   alert("10:00 AM")
}
else if(clock==="1100"){
   alert("11:00 AM")
}
else if(clock==="1200"){
   alert("12:00 PM")
}
else if(clock==="1300"){
   alert("1:00 PM")
}
else if(clock==="1400"){
   alert("2:00 PM")
}
else if(clock==="1500"){
   alert("3:00 PM")
}
else if(clock==="1600"){
   alert("4:00 PM")
}
else if(clock==="1700"){
   alert("5:00 PM")
}
else if(clock==="1800"){
   alert("6:00 PM")
}
else if(clock==="1900"){
   alert("7:00 PM")
}
else if(clock==="2000"){
   alert("8:00 PM")
}
else if(clock==="2100"){
   alert("9:00 PM")
}

else if(clock==="2200"){
   alert("10:00 PM")
}
else if(clock==="2300"){
   alert("11:00 PM")
}
else if(clock==="2400"){
   alert("8:00 PM")
}
else{
   alert("Error! Enter OK for 24 hours clock format guide")
   document.write(`<h1>24 hours clock format</h1>
      0000 = 12:00 AM<br>0100 = 1:00 AM<br>0200 = 2:00 AM<br>0300 = 3:00 AM<br>0400 = 4:00 AM<br>0500 = 5:00 AM<br>0600 = 6:00 AM<br>0700 = 7:00 AM<br>0800 = 8:00 AM<br>0900 = 9:00 AM<br>1000 = 10:00 AM<br>1100 = 11:00 AM<br>1200 = 12:00 PM<br>1300 = 1:00 PM<br>1400 = 2:00 PM<br>1500 = 3:00 PM<br>1600 = 4:00 PM<br>1700 = 5:00 PM<br>1800 = 6:00 PM<br>1900 = 7:00 PM<br>2000 = 8:00 PM<br>2100 = 9:00 PM<br>2200 = 10:00 PM<br>2300 = 11:00PM`)
}




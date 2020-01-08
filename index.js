/**
 * 

Create an application that 
generates a random password based on user-selected criteria. This app will run in the browser and feature dynamically updated HTML and CSS powered by your JavaScript code.

The user will be prompted to choose from the following password criteria:

* Length (must be between 8 and 128 characters)

* Character type:

  * Special characters ([see examples](https://www.owasp.org/index.php/Password_special_characters))

  * Numeric characters

  * Lowercase characters

  * Uppercase characters

The application should validate user input and ensure that at least one character type is selected.

Once all prompts are answered, the user will be presented with a password matching the answered prompts. Displaying the generated password in an alert is acceptable, but attempt to write the password to the page instead.

As a bonus, the user should also have the option to click a button to copy the password to their clipboard.

![password generator demo](./Assets/03-JavaScript-homework-demo.png)


## Acceptance Criteria

GIVEN that a user needs a new, secure password

WHEN prompted for password criteria

THEN a password is generated

- - -


 */




//  ===============================================================================================
// CHARLIE'S COMMENTS

//         do you want special characters


// prompt

// confirm

// if yes,random choice

// add to password pool
// list of characters password could be
// //do you want lower charset
// yes add to pool
// do you want capital
// after all questions asked, randomly generate password based on password length

// dom manipulation

// variables hold values
// primitive types
//  - Numbers, Stings, Booleans(true || false) 

// var myFirstArray = [ `one`, 1 , true , [1,2,3] ]
// var myFirstObject = {
//     courseAssistant: "charlie"
// }


// console.log(myFirstObject.courseAssistant)
// console.log(myFirstObject["courseAssistant"])
// var fruits = "apple"
// if("do something condition") {

// } else if("do something condition") {

// } else {

// }

// var counter = 0
// while("something is true do the thing in the curlys") {
//     // do something
// }
// while( counter < fruitsArray.length) {
//     counter++
// }

// for(var i =0; "some condition"; i++) {
//     i++
// }
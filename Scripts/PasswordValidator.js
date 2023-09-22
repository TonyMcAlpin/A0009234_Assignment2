// JavaScript source code

let password = prompt("Please enter a new passowrd")
let action = false;



do {

    let verifyPass = prompt("Please retype your passowrd to verify")
    if (verifyPass != password) {
        alert("That is not correct. Try again");
    }
    else {
        alert("Your passowrd has been validated");
        action = true;
    }
} while (action == false);
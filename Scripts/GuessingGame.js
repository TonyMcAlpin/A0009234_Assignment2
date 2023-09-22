// JavaScript source code

let myNumber = Math.floor(Math.random() * 10) + 1;
alert(myNumber);

let yourGuess = Number(prompt("Guess the number I am thinking of between 1 and 10"))

if (yourGuess === myNumber) {
    alert("That is correct!");
}

while (yourGuess !== myNumber) {
    let yourGuess = Number(prompt("Thats not correct. Please try again"))
    if (yourGuess === myNumber) {
        alert("Correct");
        break;
    }

}


/* NOTES:
The choice of having three different functions validating the input depends on the fact that I wanted to practice with functions; normally I would write only one function.
*/

// ---- GAME'S PARAMETERS
//how many numbers
var difficulty = 5;
//waiting time (in milliseconds)
var time = 1000;
//arr containing random numbers
var randomNumbers = [];


// ---- FUNCTIONS
//function which creates an array of n numbers with no duplicates; it returns an array
function createRandomNumbers(howMany, min, max) {
    var result = []; //array which will contain the random numbers

    var number = 0;
    for(var i = 0; i < howMany;) {
        number = Math.floor(Math.random() * (max - min + 1) ) + min;

        if(!result.includes(number)) {
            result.push(number);
            i++;
        }

    }

    return result;
}

// function: check the input from the user. It returns a boolean.
function checkInput(value) {
        return !isNaN(value);
    }
    
// function: check whether the input is a duplicate; it push the input into an array if it is not a duplicate; it returns a boolean.
var userInputsArray = []; //array containing the user inputs (used only by the fn checkUserDuplicates)
function checkUserDuplicates(value) {
        
        if(!userInputsArray.includes(value)) {
            userInputsArray.push(value);
            
            return true;
        }

    return false;
}

// function: get the input from the user and pass it through the checkInput fn and checkUserUpdate; it loops until the input is not correct; it returns the input.
function getInput() {
    var userInput = 0; // user input (initialization)
    var check = false; //flag (initialization)
    var message = "Inserisci uno dei numeri visti in precedenza";

    userInput = parseInt(prompt(message));

    while(!check) {
        // input validation
        if(!checkInput(userInput)) {
            userInput = parseInt(prompt("Il numero inserito non è valido. Sono accettati solo numeri interi da 1 a 100"));
        } else {
            // is the inpute a duplicate?
            if(!checkUserDuplicates(userInput)) {
                userInput = parseInt(prompt("Hai già inserito questo numero. Riprova"));
            } else {
                check = true;
            }
        }
    }

    return userInput;
}

// function: victory message
function victoryMessage(userNumbersArray, randomNumbersArray) {
    var message = ""; //victory message (initialization)
    var lengthUserArray = userNumbersArray.length;
    var lengthRandomArray = randomNumbersArray.length;

    if(lengthUserArray === lengthRandomArray) {
        message = `Hai vinto! Hai indovinato tutti i numeri: ${userNumbersArray.join(", ")}.`
    } else if(lengthUserArray > 0) {
        message = `Hai indovinato ${lengthUserArray === 1 ? "un numero" : lengthUserArray + " numeri"} su ${lengthRandomArray}. Riprova!`;
    } else {
        message = "Hai perso: non hai indovinato nessun numero.";
    }
    
    return message;
}

// function: game
//???? dovrei passare le altre funzioni come argomenti o va bene prenderle da fuori ????
function game(randomNumbersArray) {
    var userNumber = 0; //number from the user (initialization)
    var guessedNumbers = []; //numbers guessed by the user (inizialization)

    for(var i = 0; i < randomNumbersArray.length; i++) {

        // get the user numbers and check
        userNumber = getInput();

        if(randomNumbersArray.includes(userNumber)) {
            guessedNumbers.push(userNumber);
        }
    }

    alert(victoryMessage(guessedNumbers, randomNumbersArray));
}


// ---- SCRIPT
//???? Come posso chiamare questa sezione in cui tutto viene eseguito????
//getting the random numbers
var randomNumbers = createRandomNumbers(difficulty, 1, 100);
console.log(randomNumbers); //a little help for the developer (useless for the script itself)

//show the random numbers to the user
alert(`Leggi e memorizza i numeri seguenti: ${randomNumbers.join(", ")}.`);

//get the user answer after a certain amount of time, evaluate the answers and give back the result
setTimeout(function(){
    game(randomNumbers);
}, time);

// ---- GAME'S PARAMETERS
//how many numbers
var difficulty = 5;
//waiting time (in milliseconds)
var time = 30000;
//arr containing random numbers
var randomNumbers = [];
var guessedNumbers = []; //arr containing the numbers the user guessed

//
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

// ---- FUNCTIONS
//function: get input from the user and check whether it is valid; it loops until the input is valid; it returns the input.
function getCheckInputs() {
    var check = false; //flag (initialization)
    var message = "Inserisci uno dei numeri mostrati in precedenza:" //message to get the input

    while(!check) {
        //getting the  input
        userInput = parseInt(prompt(message));

        //checking if the input is valid
        if(!isNaN(userInput)) {
            check = true;
        }
    }
    
    return userInput;
}

//function: victory message
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

//function: game
//???? dovrei passare le altre funzioni come argomenti o va bene prenderle da fuori ????
function game(randomNumbersArray) {
    var userNumber = 0; //numero inserito da utente (inizializzazione variabile)
    var guessedNumbers = []; //numeri indovinati dall'utente

    for(var i = 0; i < randomNumbersArray.length; i++) {

        // get the user numbers and check
        userNumber = getCheckInputs();

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
setTimeout(game(randomNumbers), time);

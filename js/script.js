//esercizio base
//funzione: crea un arrai di numeri random senza duplicati; restituisce un array
function createRandomNumbers(howMany, min, max) {
    var result = []; //conterrà i numeri restituiti dalla funzione
    var number = 0; //numero random (inizializzazione)

    for(var i = 0; i < howMany;) {
        number = Math.floor(Math.random() * (max - min + 1) ) + min;

        if(!result.includes(number)) {
            result.push(number);
            i++;
        }

    }

    return result;
}

//numeri random
var randomNumbers = createRandomNumbers(5, 1, 100);

//mostro i numeri all'utente
alert('Leggi e memorizza i numeri seguenti: ' + randomNumbers.join(', ') + '.');

setTimeout(function() {
    var userNumber = 0; //numero inserito da utente (inizializzazione variabile)
    var guessedNumbers = []; //numeri indovinati dall'utente
    for(var i = 0; i < randomNumbers.length; i++) {
        userNumber = parseInt(prompt('Inserisci uno dei numeri mostrati in precedenza:'));

        if(randomNumbers.includes(userNumber)) {
            guessedNumbers.push(userNumber);
        }
    }
    alert('Hai indovinato ' + guessedNumbers.length + ' numeri: ' + guessedNumbers.join(', '));

}, 30000);


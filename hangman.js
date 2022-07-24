const words = ['potato', 'mobile', 'lego', 'jacket',
'apple', 'cat', 'throne', 'street'];

const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

let randomWord = "";
let secretWord = [];
let usedLetters = [];






function pickWord(arr) {
    const randomWordIndex = Math.floor(Math.random() * arr.length);
    randomWord = arr[randomWordIndex].toUpperCase().split("");
    // console.log(randomWord);
    return randomWord
}

function createSecretWord(word) {
    secretWord = [];
    for (let i = 0; i < word.length; i++){
        secretWord.push("_")
    }
    
    // secretWord = secretWord;
    // console.log(secretWord);
}

function checkForLetter(letter) {
    if (!usedLetters.includes(letter)){
        usedLetters.push(letter);
        for (let i = 0; i < secretWord.length; i++) {
            if (randomWord[i] === letter) {
                secretWord[i] = letter;
            }
        }
    } else {
        console.log("Already used");
    }
    
    
}

function play() {
    usedLetters = []
    let lives = 6;
    pickWord(words);
    createSecretWord(randomWord);
    console.log(secretWord);
    let letterInput = prompt("Enter letter: ").toUpperCase();
    while (letterInput !== 'EXIT'){
        if (!randomWord.includes(letterInput)) {
            if (!usedLetters.includes(letterInput)) {
                lives--
            }
            console.log(`You have ${lives} lives.`);
            if (lives === 0) {
                console.log("You lost! Play again!!");
                let playAgain = prompt("play again?").toUpperCase();
                if (playAgain === "Y") {
                    play()
                } else if (playAgain === "N") {
                    break
                }
            }
         }
        checkForLetter(letterInput);
        console.log(secretWord);
        if (!secretWord.includes("_")) {
            console.log("You won! Play again!!");
            let playAgain = prompt("play again?").toUpperCase();
                if (playAgain === "Y") {
                    play()
                } else if (playAgain === "N") {
                    break
                }
        }
        console.log("used letters: " + usedLetters);
        letterInput = prompt("Enter letter: ").toUpperCase();
        }   
    
    }





// secretWord = secretWord.join(" ")

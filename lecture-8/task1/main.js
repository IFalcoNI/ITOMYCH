const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const getRandomInt = () => {
    return Math.floor(Math.random() * 6 + 1);
}

let result = 0
let random = 0
const startGame = () => {
    const rl = readline.createInterface({ input, output });
    rl.question('Enter number in range 1 to 6 or result to see your progress\n', (answer) => {
        random = getRandomInt()
        if (random == answer) {
            result += 2
            console.log("You are right, number was", random, "added 2 point to result");
        } else if (random - 1 == answer || random - 1 == answer) {
            result += 1
            console.log("You were close, number was", random, "added 1 point to result");
        } else {
            console.log("Try again, number was", random);
        }
        rl.close()
        answer == 'result' ? console.log("Result is",result) : startGame()
    })
}
startGame()
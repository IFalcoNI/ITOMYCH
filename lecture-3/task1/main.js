const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter number\n', (inputed) => {
    let anyLine = ''
    for (let i = 0; i < inputed.length; i++) {
        anyLine += inputed[i] + " "
    }
    console.log(anyLine)
    // console.log(inputed[0] + " " + inputed[1])
    readline.close()
})
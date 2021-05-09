
const argv = require('minimist')(process.argv.slice(2))
const fs = require('fs')
const moduleCeasar = require('./ceasar.js')
const readline = require("readline");


if (!Object.keys(argv).includes('s') && !Object.keys(argv).includes('shift')) {
    console.log('Shift param is required!')
} else if (!Object.keys(argv).includes('a') && !Object.keys(argv).includes('action')) {
    console.log('Action param is required')
} else  if (!Number.isInteger(argv['s'])) {
    console.log('Shift param should be "Number" ')
} else if (!['encode', 'decode'].includes(argv['a'])) {
    console.log('Action param should be "encode" or "decode" ')
} else {
    if (!Object.keys(argv).includes('i') && !Object.keys(argv).includes('input')) {
        if (Object.keys(argv).includes('o') && Object.keys(argv).includes('output')) {
            const rl = readline.createInterface({
                input: process.stdin
            })
            rl.on('line', (input) => {
                let writeableStream = fs.createWriteStream(argv['o'])
                writeableStream.write(moduleCeasar.ceasar(argv['s'], argv['a'], input) + a)
                writeableStream.end()
                console.log('end')
            })
        } else {
            const rl = readline.createInterface({
                input: process.stdin
            })
            rl.on('line', (input) => {
                console.log(moduleCeasar.ceasar(argv['s'], argv['a'], input))
            })
        }
  
    } else {
        if (!Object.keys(argv).includes('o') && !Object.keys(argv).includes('output')) {
            let readableStreamInput = fs.createReadStream(argv['i'], "utf8")
            readableStreamInput.on("data", function(chunk){     
            console.log(moduleCeasar.ceasar(argv['s'], argv['a'], chunk))
            })
        } else {
            let readableStreamOutput = fs.createReadStream(argv['o'], "utf8")
            let a = ''
            readableStreamOutput.on("data", function(chunk1){ 
                a = chunk1
            })
            let readableStreamInput = fs.createReadStream(argv['i'], "utf8")
            readableStreamInput.on("data", function(chunk){       
                let writeableStream = fs.createWriteStream(argv['o'])
                writeableStream.write(moduleCeasar.ceasar(argv['s'], argv['a'], chunk) + a)
                writeableStream.end()
            })
        }
    
    }

}
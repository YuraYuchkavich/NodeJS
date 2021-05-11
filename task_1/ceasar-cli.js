
const fs = require('fs')
const moduleCeasar = require('./ceasar.js')
const { program } = require('commander')
const readline = require('readline')

program.version('0.0.1')

program
    .option('-s, --shift <type>', 'a shift')
    .option('-a, --action <type>', 'an action encode/decode')
    .option('-i, --input <type>', 'an input file')
    .option('-o, --output <type>', 'an output file')

program.parse(process.argv);
const argv = program.opts();

if (!Object.keys(argv).includes('shift')) {
    process.stdout.write('Shift param is required!')
} else if (!Object.keys(argv).includes('action')) {
    process.stdout.write('Action param is required')
} else  if (isNaN(argv.shift)) {
    process.stdout.write('Shift param should be "Number" ')
} else if (!['encode', 'decode'].includes(argv.action)) {
    process.stdout.write('Action param should be "encode" or "decode" ')
} else {
    if (!Object.keys(argv).includes('input')) {
        if (Object.keys(argv).includes('output')) {
           
            const rl = readline.createInterface({
                input: process.stdin
            })
            rl.on('line', (input) => {
                let writeableStream = fs.createWriteStream(argv.output, {flags: 'a'})
                const action = Number(argv.shift) < 0  ?  argv.action === 'encode'  ? 'decode' : 'encode' :  argv.action
                writeableStream.write(moduleCeasar.ceasar(Math.abs(Number(argv.shift)), action, input))
                writeableStream.end()
            })
        } else {
            const rl = readline.createInterface({
                input: process.stdin
            })
            rl.on('line', (input) => {
                const action = Number(argv.shift) < 0  ?  argv.action === 'encode'  ? 'decode' : 'encode' :  argv.action
                process.stdout.write(moduleCeasar.ceasar(Math.abs(Number(argv.shift)), action, input) + '\n')
            })
        }
  
    } else {
        if (!Object.keys(argv).includes('output')) {
            let readableStreamInput = fs.createReadStream(argv.input, "utf8")
            readableStreamInput.on("data", function(chunk){   
            const action = Number(argv.shift) < 0  ?  argv.action === 'encode'  ? 'decode' : 'encode' :  argv.action
            process.stdout.write(moduleCeasar.ceasar(Math.abs(Number(argv.shift)), action, chunk))
            })
        } else {
            let readableStreamInput = fs.createReadStream(argv.input, "utf8")
            readableStreamInput.on("data", function(chunk){       
                let writeableStream = fs.createWriteStream(argv.output, {flags: 'a'})
                const action = Number(argv.shift) < 0  ?  argv.action === 'encode'  ? 'decode' : 'encode' :  argv.action
                writeableStream.write(moduleCeasar.ceasar(Math.abs(Number(argv.shift)), action, chunk))
                writeableStream.end()
            })
        }
    }
}
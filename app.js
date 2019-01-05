const EventEmitter = require('events');
const readLine = require('readline');

 const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const app = new EventEmitter();
const george = require('./george')(app);

rl.on('line', (input) => {
    app.emit('command', input.toLowerCase());
});

george.on('response', (response) => {
    if(response === "bye"){
        process.stdout.write("NIce talking to you! Bye!")
        process.exit(0)
    }
    console.log(response);
    process.stdout.write('\n\>')
})

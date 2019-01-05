const EventEmitter = require('events');

class George extends EventEmitter{
    constructor(app){
        super();
        process.nextTick(() => {
            this.emit('response', 
            "Hi! I'm George. Type help to see the available commands to communicate with me.");
        })
        app.on('command', (command) => {
            switch(command){
                case 'hi':
                case 'help':
                case 'about':
                case 'contact':
                case 'skills':
                case 'bye':
                    this[command]();
                    break;
                default:
                    this.emit('response', 'Unknown command');
            }
        })
    }

    hi(){
        this.emit('response',
        `Hi! I'm George Benjamin.`)
    }

    help(){
        this.emit('response', 
        "Available commands:" +
    "\nhi - Displays my name" +
    "\nabout - Displays some info about me" +
    "\ncontact - Displays my contact info" +
    "\nskills - Lists my skillset" +
    "\nbye - End the conversation" +
    "\nhelp - Displays this message");
    }

    about(){
        this.emit('response', "I'm a software developer from Nigeria. \nI love to build cool stuff, eat and play games. Thats about it I think...");
    }

    contact(){
        this.emit('response', "Wow! You want to contact me?! (blushing)" +
        "\nSend me a mail @ msdcconnect@gmail.com" +
        "\nTwitter - @BenGtheOnly " +
        "\nGithub - @georgeben" +
        "\nFacebook - Naaah");
    }

    skills(){
        this.emit('response', 'I know a bit of HTML, CSS, Javascript and Java.');
    }

    bye(){
        this.emit('response', 'bye');
    }
}

module.exports = (app) => new George(app);
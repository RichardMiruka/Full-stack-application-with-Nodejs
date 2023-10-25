process.on('exit', function(){                //callback function
    console.log("Process has exited");
})

const { EventEmitter } = require('events');
const { EventEmitter } = require('stream');
const EventEmitter = new EventEmitter();

eventEmitter.on('lunch', () => {
    console.log('Lunch time!')
})

eventEmitter.emit('lunch');

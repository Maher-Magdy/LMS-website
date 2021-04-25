/******************************************************** Creating a module ********************************************/
// const EventEmitter = require('events'); //class
// const emitter = new EventEmitter(); //instance
// var url = 'http://mylogger.io/log'; //imagine we will send an http request to this url

// function log(message) {
//     // send HTTP request
//     console.log(message);
//     //raise an event
//     emitter.emit('messageLogged'/*name of event*/, { id: 1, url: 'http://' });
// }

// // adding methode called log to this exports objects and simply setting it to this log function 
// // to use itin another module
// // module.exports.log = log;
// module.exports = log;


/*************************************************************************************************************/
// const EventEmitter = require('events'); //class

// var url = 'http://mylogger.io/log'; //imagine we will send an http request to this url

// // Logger class will have all the capabilities of EventEmitter class
// class Logger extends EventEmitter{
//     // Method
//     log(message) {
//         // send HTTP request
//         console.log(message);
//         //raise an event
//         this.emit('messageLogged'/*name of event*/, { id: 1, url: 'http://' });
//     }
// }

// module.exports = Logger;
/*
  The UUID module essentially creates a random hash for us. The fmt of which can be changed. As per usual - just read the fu*king manual.
*/


const EventEmitter = require('events')
const uuid = require('uuid') 

class Logger extends EventEmitter {
  log(msg) {
    // call event
    this.emit('message', {id: uuid.v4(), msg})
  } 
}

module.exports = Logger

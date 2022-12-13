/*
  In node/js we have a class called EventEmitter these instances emmit particular 'events' that can then be listened for by other functions ('listeners') that then take a particular action (a function usually) after the event has been emiited and heard by the listener
*/


const EventEmitter = require('events')

// create class

class MyEmitter extends EventEmitter {}

// init object
const myEmitter = new MyEmitter()

// create event listener
myEmitter.on('event', () => {
  console.log('Event Fired')
})

// init event 
myEmitter.emit('event')



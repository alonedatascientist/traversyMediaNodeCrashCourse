/*
  The OS module gives us valuable info about our environment variables and local system
*/

const os = require('os')

// get users platform (windows, mac, linux, etc)
console.log(os.platform()) // linux

// get CPU architecture
console.log(os.arch()) // x64

// get CPU core info 
console.log(os.cpus) // returns an obj that holds info for every core within the local cpu

// available free memory (RAM) 
console.log(os.freemem()) // returns an obj w/ a description of the available free memory 

console.log(os.totalmem()) // total memory available on system (RAM)

// get home dir ..
console.log(os.homedir()) // /Users/s 

// get 'uptime' (time since last system reset / power down)
console.log(os.uptime()) // gives you num of secs
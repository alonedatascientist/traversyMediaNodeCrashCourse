const path = require('path')

// basename (gets base file name)
console.log(path.basename(__filename)) // path_demo.js

// directory name
console.log(path.dirname(__filename)) // reference  (just the directory)

// get file extension
console.log(path.extname(__filename)) // .js 

// create path obj
console.log(path.parse(__filename)) // will return an object with various path attributes (filename, dirname, etc)

// concate paths (join different paths)
console.log(path.join(__dirname, 'test', 'hello.html'))


/*
this may not seem exciting but this is very helpful when we get to more advanced topics, you will absolutely use this a ton
*/
// fs is the local file system module
const fs = require('fs')
const path = require('path')

// create folder folder path on local sys
let createdFolderPath = path.join(__dirname, '/test')

// create folder using the path we created
// NOTE: this is async, so here the call back is handling an error, a synchrnous version of this function also exists: mkdirSync()
// fs.mkdir(createdFolderPath, (err) => {
//   if (err) throw err
//   console.log(`Folder created: ${createdFolderPath}`)
// })

// create and write to file (if the file does not exist it will be created)
// fs.writeFile(path.join(__dirname, '/test', 'hello2.txt'), 'Hello World!', err => {
//   if (err) throw err
//   console.log('file created successfully')
  
//   // to append to a file (rather the overwrite)
//   fs.appendFile(path.join(__dirname, '/test', 'hello2.txt'), 'I love Node JS', err => {
//     if (err) throw err
//     console.log('file created successfully')
//   })
// })

// read from file .. Note: our 2nd arg here ('utf-8') is because readFile() will return a 'buffer', if we don't include 'utf-8' or convert the data toString() before logging will end up with an err
// fs.readFile(path.join(__dirname, '/test', 'hello2.txt'), 'utf-8', (err, data) => {
//   if (err) throw err
//   console.log(data)
// })

// rename file, the first arg is the file you wish to rename, the 2nd arg is the new name you want to give it, the call back in this case handles the error and logs a completion msg
// fs.rename(
//   path.join(__dirname, '/test', 'hello2.txt'),
//   path.join(__dirname, '/test', 'renamedHello.txt'),
//   err => {
//     if (err) throw err
//     console.log('file renamed')
//   })
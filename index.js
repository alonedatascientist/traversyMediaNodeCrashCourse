
const http = require('http')
const path = require('path')
const fs = require('fs')

const server = http.createServer((req, res) => {
  // note: '/' means "root" directory
  if (req.url === '/') {
    fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
      if (err) throw err
      res.writeHead(200, 'Content-Type: text/html')
      res.end(content)
    })
  }

  // API fmt
  if (req.url === '/api/users') {
    const users = [
      {name: 'Joe James', age: 33},
      {name: 'Joe Dave', age: 18},
      {name: 'Joe Jee', age: 25},
    ];
    res.writeHead(200, {'Content-Type': 'application/json'})
    res.end(JSON.stringify(users))
  }
  
})

const PORT = process.env.port || 3000

server.listen(PORT, () => {
  console.log(`server running on: ${PORT}`)
})



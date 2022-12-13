
const http = require('http')
const path = require('path')
const fs = require('fs')

const server = http.createServer((req, res) => {

  // build file path
  let filePath = path.join(
    __dirname,
    'public',
    req.url === '/' ? 'index.html' : req.url // if req url is root dir then serve the homepage else serve whatever the req url is
  )
  
  // get file extension name for file being sent
  let ext = path.extname(filePath)

  // content set to text/html because thats the majority of content type usually recieved 
  let contentType = 'text/html'

  // check file extension type then set content type accordingly 
  switch(ext) {
    case '.js':
      contentType = 'text/javascript';
      break;
    case '.css': 
      contentType = 'text/css';
      break;
    case '.json':
      contentType = 'application/json';
      break;
    case '.png':
      contentType = 'image/png';
      break;
    case '.jpg':
      contentType = 'image/jpg';
      break;
  }

  // read file
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === "ENOENT") {
        // 404 page not found
        fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
          res.writeHead(200, {'Content-Type': contentType})
          res.end(content, 'utf-8')
        })
        
      } else {
        // some other server error
        res.writeHead(500)
        res.end(`Internal Error: ${err.code}`)

      }
    }
    else {
      res.writeHead(200, {'Content-Type': contentType})
      res.end(content, 'utf-8')
    }

  })

});

const PORT = process.env.port || 3000

server.listen(PORT, () => {
  console.log(`server running on: ${PORT}`)
})



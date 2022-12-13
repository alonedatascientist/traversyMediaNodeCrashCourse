/*
  helps access, modify, examine, mainpulate, etc urls
*/

const url = require('url')

// create a new URL obj
const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active')

// get serialized URL
console.log(myUrl.href) // returns entire url

// get host from URL (root domain, will include port if port is present) 
console.log(myUrl.host) // mywebsite.com

// get host name from URL (does not include the port)
console.log(myUrl.hostname) // mywebsite.com

// path name - returns actual filename from url
console.log(myUrl.pathname) // hello.html

// serialized query (everything after the ? in the URL) 
console.log(myUrl.search) // ?id=100&status=active 

// params obj from url 
console.log(myUrl.searchParams) // {'id' => '100', 'status': 'active'}

// add params dynamically
myUrl.searchParams.append('abc', '123')
console.log(myUrl.searchParams) // {'id' => '100', 'status': 'active'}

// loop through params 
myUrl.searchParams.forEach((val, name) => {
  console.log(`${name} : ${val}`)
})

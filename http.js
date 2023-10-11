const http = require('node:http')
const { findAvaliblePort } = require('./free-port.js')

const server = http.createServer((req, res) => {
  console.log('Request receive')
  res.end('hola mundo')
})

findAvaliblePort(3000).then(port => {
  server.listen(port, () => {
    console.log(`server listening on port http://localhost:${port}`)
  })
})

// server.listen(3000, () => {
//     console.log(`server listening on port http://localhost:${server.address().port}`)
// })

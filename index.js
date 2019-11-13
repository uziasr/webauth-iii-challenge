const server = require('./server')

const HOST = 4500

server.listen(HOST, ()=>{
    console.log('live on ',HOST)
})
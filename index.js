const server = require('./server.js');

const PORT = 4000;

server.listen(PORT, ()=> {
    console.log(`server listening on ${PORT}`)
});
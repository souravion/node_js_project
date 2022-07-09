const http = require('http')

const server = http.createServer((req,res)=>{
    // if(req.url == '/'){
    //     res.write('Hello programmer');
    //     res.write('How are you?');
    //     res.end()
    // }else if(req.url =='/about'){
    //     res.write('This about us')
    //     res.end()
    // }else{
    //     res.write('404 Not found')
    //     res.end()
    // }
})
server.listen(3000)
console.log("liening on port 3000")
// server.on('connection',(socket)=>{
//     console.log("new connection established")
// })

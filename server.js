let express = require ("express")

let app = express()
let server = app.listen (5500)

app.use(express.static("public"))

console.log ("Socket server is running")

let socket = require ("socket.io")

let io = socket(server)

io.sockets.on("connection", newConnection)

function newConnection (socket) {
    console.log ('new connection:' + socket.id)
    socket.on ('keyCode')

    function keyMsg (data) {
        socket.broadcast.emit ('keyCode', data)
        console.log (data)
    }
}

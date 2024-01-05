const socketIO = require("socket.io");

const socket = {}

const initSocket = (server) => {
  socket.io = socketIO(server, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"]
    }
  })
  socket.io.on('connection', (socket) => {
    console.log('client connected')
    socket.on('disconnect', () => {
      console.log('client disconnected');
    });
  })
}

module.exports = {
  initSocket,
  socket,
}

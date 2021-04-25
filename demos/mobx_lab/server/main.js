const httpServer = require("http").createServer();
const io = require("socket.io")(httpServer, {
  cors: {
    origin: "*",
  },
});

io.on('connection', (socket) => {
  console.log('New client connected!');

  socket.on('message', (msg) => {
    console.log(`got ${JSON.stringify(msg)}`);
    io.sockets.emit('message', msg);
  });
});

httpServer.listen(5000);


function handleSocket(io) {
  io.on("connection", socket => {
    console.log("New client connected");

    socket.on("locationUpdate", ({ tripId, lat, lng }) => {
      socket.broadcast.emit(`trip-${tripId}-location`, { lat, lng, timestamp: new Date() });
    });

    socket.on("disconnect", () => {
      console.log("Client disconnected");
    });
  });
}

module.exports = handleSocket;

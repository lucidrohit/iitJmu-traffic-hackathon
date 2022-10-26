const { Server } = require("socket.io");
const fs = require("fs");
const regex = /^data:.+\/(.+);base64,(.*)$/;

async function writeImageFile({ imgData, location }) {
  if (imgData === null) return;
  const matches = await imgData.match(regex);
  const ext = await matches[1];
  const data = await matches[2];
  const buffer = Buffer.from(data, "base64");
  fs.writeFileSync("data." + ext, buffer);
}

module.exports = function (httpServer) {
  const io = new Server(httpServer, { cors: { origin: "*" } });
  io.on("connection", (socket) => {
    socket.on("image", writeImageFile);
  });
};

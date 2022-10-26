const app = require("express")();
const { createServer } = require("http");
const httpServer = createServer(app);

require("./startup/routes")(app);
require("./startup/sockets")(httpServer);


const PORT = process.env.PORT || 3000;

httpServer.listen(PORT, () => {
  console.log(`listening: ${PORT}...`);
});

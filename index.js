//index.js will run the server (listen for connections)

const server = require("./api/server.js");

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`API up and running on port ${port}`);
});

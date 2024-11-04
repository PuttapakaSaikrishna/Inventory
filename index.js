const jsonServer = require("json-server"); // Importing json-server library
const cors = require("cors"); // Importing CORS library
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8080; // Choose port here like 8080, 3001

server.use(cors()); // Applying CORS middleware
server.use(middlewares);
server.use(router);

server.listen(port, () => {
    console.log(`JSON Server is running on port ${port}`);
});

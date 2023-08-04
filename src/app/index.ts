import { port, server } from "./server.js";

server.listen(port);
console.log(`The server has started and is listening on port number: ${port}`);

import * as http from "http"
import { runTouch } from "./jobcan-touch.js";

export const port = 3000
export const server = http.createServer(async (request, response) => {
    response.writeHead(200, {
      "Content-Type": "text/json"
    });

    let responseMessage: string

    if (request.url === "/jc") {
      await runTouch()

      responseMessage = "{\"message\": \"success!\"}";
      response.end(responseMessage);
    } else {
      responseMessage = "{\"message\": \"Hello, World!\"}";
      response.end(responseMessage);

    }
    console.log(`Sent a response : ${responseMessage}`);

});


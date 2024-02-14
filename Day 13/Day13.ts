import express, { Request, Response } from "express";
import http from "http";
import { Socket } from "net";
import WebSocket, { Server } from "ws";

function setupWebSocket(server: http.Server) {
  const wss = new Server({ noServer: true });

  wss.on("connection", (ws: WebSocket) => {
    ws.on("message", (message: string) => {
      ws.send(`Server: ${message}`);
    });
  });

  server.on(
    "upgrade",
    (request: http.IncomingMessage, socket: Socket, head: Buffer) => {
      wss.handleUpgrade(request, socket, head, (ws) => {
        wss.emit("connection", ws, request);
      });
    }
  );
}

const app = express();
const server = http.createServer(app);

setupWebSocket(server);

app.get("/websocket", (req: Request, res: Response) => {
  res.sendFile(__dirname + "/websocket.html");
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

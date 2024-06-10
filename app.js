import { config } from "dotenv";
config();

import { Server } from "./models/server.js";

// CREAMOS LA INSTANCIA
const server = new Server();

// INICIAMO EL SERVIDOR CON EL MÉTODO DE LA CLASE
server.serverListen();

import express from "express";
import cors from "cors";

import isRouter from "../routes/user-routes.js";

export class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3000;
    this.usuarioPath = "/api/usuario";

    // Middlewares
    this.middlewares();

    // Rutas de la aplicación
    this.routes();
  }

  middlewares() {
    // Directorio publico
    this.app.use(express.static("public"));

    // CORS
    this.app.use(cors());

    // Configuración de lectura y parseo del body
    this.app.use(express.json());
  }

  routes() {
    this.app.use(this.usuarioPath, isRouter);
  }

  serverListen() {
    this.app.listen(this.port, () => {
      console.log(`Server is running on port: ${this.port}`);
    });
  }
}

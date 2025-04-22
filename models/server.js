import express from "express";
import router from "../routes/usuarios.js";

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT; //usar variable de entorno
    //path de rutas de usuario
    this.userPath = "/api/usuarios";
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.json());
    //carpeta public
    this.app.use(express.static("public"));
    //CORS
  }

  routes() {
    //Middlewares de rutas
    this.app.use(this.userPath, router);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server online en puerto: ${this.port}`);
    });
  }
}

export default Server;

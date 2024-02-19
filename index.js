import express from "express";
import cors from "cors";
import { PORT } from "./config/config.js";
import { citas } from "./router/citasRouter.js";
import { pacientes } from "./router/pacientesRouter.js";
import { tipopersonas } from "./router/tipopersonasRoutes.js";
import { sequelize } from "./db/conexion.js";

const _PORT = PORT || 3001;
const app = express();
app.use(express.json());
app.use(cors());

app.use("/api", citas);
app.use("/api", pacientes);
app.use("/api", tipopersonas);

const main = async () => {
  try {
    await sequelize.authenticate();
    console.log("Base de datos conectada.");
    await sequelize.sync({ alter: false });
    app.listen(_PORT, () => {
      console.log(`Servidor corriendo en el puerto => ${_PORT}`);
    });
  } catch (error) {
    console.log(`Error ${error}`);
  }
};
main();

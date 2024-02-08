import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import cors from "cors";
import {
  recuperarEfectivoCaja,
  capturarPagos,
  eliminarPago,
  pagarPropinas,
} from "./controllers/propinasController.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.static(path.join(__dirname, "frontend")));
app.use(express.json());

app.get("/efectivo-caja", recuperarEfectivoCaja);
app.post("/propinas/pagos", capturarPagos);
app.delete("/propinas/eliminar:id", eliminarPago);
app.post("/propinas/pagar", pagarPropinas);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

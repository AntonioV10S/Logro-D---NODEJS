import Router from "express";
import { agregarPaciente } from "../controller/PersonaController.js";

const router = Router();

router.post("/persona/registrar", agregarPaciente);

export const pacientes = router;

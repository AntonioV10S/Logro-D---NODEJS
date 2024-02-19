import Router from "express";
import { buscarCitasDisponibles, reservarCita } from "../controller/CitaController.js";

const router = Router();

router.get('/cita/disponibles/:especialidad', buscarCitasDisponibles);
router.put('/cita/reservar/:citaId', reservarCita);

export const citas = router;
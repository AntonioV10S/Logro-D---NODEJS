import Router from "express";
import { crearTipoPersona } from "../controller/tipopersonacontroller.js";

const router = Router();

router.post("/tipopersonas/crear", crearTipoPersona);

export const tipopersonas = router;
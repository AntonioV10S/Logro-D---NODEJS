import { TipoPersonaModel } from "../models/TipoPersonaModel.js";

export const crearTipoPersona = async (req, res) => {
    try {
      const nuevoTipoPersona = await TipoPersonaModel.create(req.body);
      return res.status(201).json(nuevoTipoPersona);
    } catch (error) {
      console.error("Error al crear tipo de persona:", error);
      return res.status(500).json({ mensaje: "Hubo un error al crear el tipo de persona." });
    }
  };

import { CitaModel } from "../models/CitaModel.js";


export const buscarCitasDisponibles = async (req, res) => {
  try {
    const citasDisponibles = await CitaModel.findAll({
      where: {
        especialidad: req.params.especialidad,
        estado: "disponible",
      },
    });
    return res.status(200).json(citasDisponibles);
  } catch (error) {
    console.error("Error al buscar citas disponibles:", error);
    return res
      .status(500)
      .json({ mensaje: "Hubo un error al buscar citas disponibles." });
  }
};

export const reservarCita = async (req, res) => {
  try {
    const citaReservada = await CitaModel.update(
      { estado: "reservada", pacienteId: req.body.pacienteId },
      {
        where: { id: req.params.citaId, estado: "disponible" },
      }
    );
    if (citaReservada[0] === 0) {
      return res
        .status(404)
        .json({
          mensaje: "La cita seleccionada no está disponible para reservar.",
        });
    }
    return res.status(200).json({ mensaje: "Cita reservada exitosamente." });
  } catch (error) {
    console.error("Error al reservar cita:", error);
    return res
      .status(500)
      .json({ mensaje: "Hubo un error al reservar la cita." });
  }
};

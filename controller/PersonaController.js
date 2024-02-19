import { PersonaModel } from "../models/PersonaModel.js";

export const agregarPaciente = async (req, res) => {
  try {
    const existePaciente = await PersonaModel.findOne({
      where: {
        correoElectronico: req.body.correoElectronico,
      },
    });

    // Si el paciente ya existe, devuelve un error
    if (existePaciente) {
      return res.status(400).json({
        mensaje: "Ya existe un paciente registrado con este correo electrónico.",
      });
    }

    // Crear un nuevo paciente con los datos proporcionados en el cuerpo de la solicitud
    const nuevoPaciente = await PersonaModel.create(req.body);

    // Devolver una respuesta con el nuevo paciente creado
    return res.status(201).json(nuevoPaciente);
  } catch (error) {
    // Si ocurre algún error durante el proceso, devolver un mensaje de error
    console.error("Error al registrar paciente:", error);
    return res.status(500).json({ mensaje: "Hubo un error al registrar el paciente." });
  }
};


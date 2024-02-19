import { DataTypes } from "sequelize";
import { sequelize } from "../db/conexion.js";

export const TipoPersonaModel = sequelize.define(
  "tipo_persona",
  {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    tipo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

import { DataTypes } from "sequelize";
import { sequelize } from "../db/conexion.js";
import { TipoPersonaModel } from "./TipoPersonaModel.js";

export const PersonaModel = sequelize.define(
  "persona",
  {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    correoElectronico: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    numeroTelefono: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    timestamps: false,
  }
);

TipoPersonaModel.hasMany(PersonaModel, { foreignKey: "id_tipopersona" });
PersonaModel.belongsTo(TipoPersonaModel, { foreignKey: "id_tipopersona" });

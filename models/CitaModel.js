import { DataTypes } from "sequelize";
import { sequelize } from "../db/conexion.js";
import { PersonaModel } from "./PersonaModel.js";

export const CitaModel = sequelize.define("cita", {
    id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    fecha: {
        type: DataTypes.DATE,
        allowNull: false
    },
    state: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, {
    timestamps: false
});


PersonaModel.hasMany(CitaModel, { foreignKey: "id_persona" });
CitaModel.belongsTo(PersonaModel, { foreignKey: "id_persona" });

import Role from "../models/role.js";
import Usuario from "../models/usuarioDb.js";

export const validandoRol = async (rol = "") => {
  // console.log("Rol recibido en validandoRol:", rol); // Debugging para ver qué se está recibiendo
  try {
    const existeRol = await Role.findOne({ rol });
    if (!existeRol) {
      throw new Error(`El rol ${rol} no está registrado en la DB`);
    }
  } catch (error) {
    console.error("Error en validandoRol:", error.message); // Logging del error para depuración
    throw new Error(`El rol ${rol} no está registrado en la DB`); // Para capturar errores de conexión u otros
  }
};

export const emailExiste = async (correo = "") => {
  //VERIFICAR SI EL CORREO EXISTE
  try {
    const existeEmail = await Usuario.findOne({ correo });
    if (existeEmail) {
      throw new Error(`El correo: ${correo} ya está registrado...`);
    }
  } catch (error) {
    console.error("Error en validando Email...", error.message);
    throw new Error(`El correo: ${correo} ya está registrado...`);
  }
};

export const existeUsuarioPorId = async (id) => {
  try {
    const existeUsuario = await Usuario.findById(id);
    if (!existeUsuario) {
      throw new Error(`El id: ${id} no existe en la base de datos`);
    }
  } catch (error) {
    console.error("Error validando Id...", error.message);
    throw new Error(`El id: ${id} no existe en la base de datos`);
  }
};

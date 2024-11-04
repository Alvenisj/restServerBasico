import mongoose from "mongoose";

export async function conectarDB() {
  try {
    await mongoose.connect(process.env.MONGODB_CNN);
    console.log("Base de Datos conectada exitosamente...");
  } catch (error) {
    console.log(error);
    throw new Error("Error al conectar con la Base de Datos");
  }
}

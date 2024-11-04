import { Schema, model } from "mongoose";

const usuarioSchema = Schema(
  {
    nombre: {
      type: String,
      required: [true, "El nombre es obligatorio"],
      trim: true,
    },
    correo: {
      type: String,
      required: [true, "El correo es obligatorio"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/.+\@.+\..+/, "Por favor, ingrese un correo válido"],
    },
    password: {
      type: String,
      required: [true, "El password es obligatorio"],
      minlength: [6, "El password debe tener al menos 6 caracteres"],
    },
    img: {
      type: String,
      trim: true,
    },
    estado: {
      type: Boolean,
      default: true,
    },
    google: {
      type: Boolean,
      default: false,
    },
    rol: {
      type: String,
      required: true,
      enum: ["ADMIN_ROLE", "USER_ROLE"], // Opcional: Define los roles permitidos
    },
  },
  {
    timestamps: true,
  }
);

// Exportamos el modelo
const Usuario = model("Usuario", usuarioSchema);
export default Usuario;

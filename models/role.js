import { Schema, model } from "mongoose";

const roleSchema = Schema(
  {
    rol: {
      type: String,
      required: [true, "El rol es Obligatorio"],
    },
  },
  { timestamps: true }
);

const Role = model("Role", roleSchema);
export default Role;

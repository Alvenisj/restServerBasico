import Usuario from "../models/usuarioDb.js";
import bcryptjs from "bcryptjs";

export const usuarioGet = async (req, res = response) => {
  const { desde = 0, limite = 5 } = req.query;
  const query = { estado: true };
  // console.log(limite);

  const [total, usuario] = await Promise.all([
    Usuario.countDocuments(query),
    Usuario.find(query).skip(Number(desde)).limit(Number(limite)),
  ]);

  // const usuarios = await Usuario.find(query)
  //   .skip(Number(desde))
  //   .limit(Number(limite));
  // const total = await Usuario.countDocuments(query);

  // console.log(resp);

  res.json({ total, usuario });
};

export const usuarioPost = async (req, res) => {
  const { nombre, correo, password, rol } = req.body;
  // console.log(nombre, correo, password, rol)
  try {
    // Crear una nueva instancia de Usuario
    const usuario = new Usuario({ nombre, correo, password, rol });

    // Encriptar la contraseña --> hash
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(password, salt);

    // Guardar en la base de datos
    await usuario.save();

    res.json({
      usuario,
      message: "Usuario registrado correctamente",
    });
  } catch (error) {
    console.error("Error al registrar el usuario:", error.message);
    res.status(500).json({
      msg: "Ocurrió un error al registrar el usuario, por favor intenta nuevamente.",
    });
  }
};

export const usuarioPut = async (req, res) => {
  const userId = req.params.id;
  // DESESTRUCTURAMOS LA INFORMACIÓN QUE NO NECESITAMOS QUE SE GRABE
  const { password, google, correo, ...resto } = req.body;
  // VALIDAMOS CONTRA LA BASE DE DATOS
  if (password) {
    // ENCRIPTAR LA CONTRASEÑA
    const salt = bcryptjs.genSaltSync();
    resto.password = bcryptjs.hashSync(password, salt);
  }

  const usuario = await Usuario.findByIdAndUpdate(userId, resto);

  res.json({
    userId,
    usuario,
    message: "Put Api ----> desde controlador",
  });
};

export const usuarioPatch = (req, res) => {
  res.json({
    message: "Patch Api ----> desde controlador",
  });
};

export const usuarioDelete = async (req, res) => {
  const userId = req.params.id;

  // BORRANDO FÍSICAMENTE EL USUARIO
  // const usuario = await Usuario.findByIdAndDelete(userId);

  // BORRAMOS EL USUARIO ACTUALIZANDO SU ESTADO A FALSE
  const usuario = await Usuario.findByIdAndUpdate(userId, { estado: false });

  res.json({
    usuario,
    message: "Delete Api ----> desde controlador",
  });
};

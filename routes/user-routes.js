import { Router } from "express";
import {
  usuarioDelete,
  usuarioGet,
  usuarioPatch,
  usuarioPost,
  usuarioPut,
} from "../controllers/user-controller.js";
import { check, oneOf } from "express-validator";
import validarCampos from "../middleware/validar-campos.js";
import {
  emailExiste,
  existeUsuarioPorId,
  validandoRol,
} from "../helpers/db-validators.js";

const router = Router();

router.get("/", usuarioGet);

router.post(
  "/",
  [
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("password", "El password debe tener mínimo 6 letras").isLength({
      min: 6,
    }),
    check("correo", "El correo no es válido").isEmail(),
    check("correo").custom(emailExiste),
    check("rol").custom(validandoRol),
    validarCampos,
  ],
  usuarioPost
);

router.put(
  "/:id",
  [
    check("id", "No es un Id válido").isMongoId(),
    check("id").custom(existeUsuarioPorId),
    check("rol").custom(validandoRol),
    validarCampos,
  ],
  usuarioPut
);

router.patch("/", usuarioPatch);

router.delete(
  "/:id",
  [
    check("id", "No es un Id válido").isMongoId(),
    check("id").custom(existeUsuarioPorId),
    validarCampos,
  ],
  usuarioDelete
);

export default router;

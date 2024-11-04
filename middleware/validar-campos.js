import { validationResult } from "express-validator";

const validarCampos = (req, res, next) => {
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(400).json(errores);
  }

  // Si no hay problemas continúa al siguiente middleware
  next();
};

export default validarCampos;

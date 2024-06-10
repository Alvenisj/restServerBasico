import { Router } from "express";
import {
  usuarioDelete,
  usuarioGet,
  usuarioPatch,
  usuarioPost,
  usuarioPut,
} from "../controllers/user-controller.js";

const router = Router();

router.get("/", usuarioGet);
router.post("/", usuarioPost);
router.put("/:id", usuarioPut);
router.patch("/", usuarioPatch);
router.delete("/", usuarioDelete);

export default router;

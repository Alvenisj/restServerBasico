import { response } from "express";

export const usuarioGet = (req, res = response) => {
  const { q, nombre, apiKey } = req.query;
  res.json({
    q,
    nombre,
    apiKey,
    message: "get Api ----> desde controlador",
  });
};

export const usuarioPost = (req, res) => {
  const { nombre, edad } = req.body;
  res.json({
    nombre,
    edad,
    message: "Post Api -----> desde controlador",
  });
};

export const usuarioPut = (req, res) => {
  const userId = req.params.id;
  res.json({
    userId,
    message: "Put Api ----> desde controlador",
  });
};

export const usuarioPatch = (req, res) => {
  res.json({
    message: "Patch Api ----> desde controlador",
  });
};

export const usuarioDelete = (req, res) => {
  res.json({
    message: "Delete Api ----> desde controlador",
  });
};

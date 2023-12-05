import express from "express";
import { create, getAll, getOne } from "./events.controller.js";
import { authVerify } from "../../middlewares/authVerify.js";

export const router = express.Router();
router.get('/', getAll);
router.get('/getAll', getAll);
router.get('/:id', getOne);
router.post('/', create);
router.post('/', authVerify, create)

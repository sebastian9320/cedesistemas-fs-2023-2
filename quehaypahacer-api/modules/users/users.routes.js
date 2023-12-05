import express from "express";
import { login, signup, info } from "./users.controller.js";
import { authVerify } from "../../middlewares/authVerify.js";

export const router = express.Router();
router.post('/login', login);
router.post('/signup', signup);
router.post('/info', authVerify, info);


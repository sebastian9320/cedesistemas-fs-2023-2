import express from "express";
import { create } from "./companies.controller.js";

export const router = express.Router();
router.post('/create', create);


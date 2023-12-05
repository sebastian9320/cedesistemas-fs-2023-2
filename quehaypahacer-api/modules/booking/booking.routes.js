import express from "express";
import { create } from "./booking.controller.js";

export const router = express.Router();
router.post('/', create);

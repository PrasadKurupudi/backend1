import express from "express";
import { sendDetail } from '../controller/detail.js'
const  router = express.Router();

router.post("/send",sendDetail);

export default router;
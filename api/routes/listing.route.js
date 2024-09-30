import express from "express";
const router = express.Router();
import { verifyToken } from "../utils/verifyUser.js";
import createListing from "../controllers/listing.controller.js";
router.post('/create', verifyToken, createListing);
export default router;

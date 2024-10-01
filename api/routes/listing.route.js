import express from "express";
const router = express.Router();
import { verifyToken } from "../utils/verifyUser.js";
import {createListing, deleteListing } from "../controllers/listing.controller.js";
router.post('/create', verifyToken, createListing);
router.delete('/delete/:id', verifyToken,deleteListing );
export default router;

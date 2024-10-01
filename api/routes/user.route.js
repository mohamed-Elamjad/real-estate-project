import express from "express";
const router = express.Router();
import {test, updateUser ,deleteUser, getUserListings, getUser} from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";
router.get("/test", test);
router.post('/update/:id', verifyToken, updateUser);
router.delete('/delete/:id', verifyToken, deleteUser);
router.get('/listings/:id', verifyToken, getUserListings)
router.get('/:id', verifyToken, getUser)

export default router;

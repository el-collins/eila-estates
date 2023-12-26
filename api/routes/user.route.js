import express from "express";
import { test, updateUser } from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

// get is used to get requests
// if you want to send to the db you have to use post request
router.get("/test", test);
router.post("/update/:id", verifyToken, updateUser);

export default router;

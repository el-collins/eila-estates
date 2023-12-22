import express from "express";
import {test} from "../controllers/user.controller.js";

const router = express.Router();

// get is used to get requests 
// if you want to send to the db you have to use post request
router.get('/test', test)

export default router;
import express from "express";
import { create, getAll, getDetail, patch, remove, update } from "../controller/user.js";

const router=express.Router();

router.get("/users",getAll)
router.get("/users/:id",getDetail)
router.post("/user",create)
router.put("/users/:id",update)
router.patch("/users/patch/:id",patch)
router.delete("/users/:id",remove)

export default router;
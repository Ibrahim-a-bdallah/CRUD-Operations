import express from "express";
import { apiController } from "../controllers/userController.js";

const router = express.Router();

// CRUD Endpoints
router.get("/items", apiController.getAllItems);
router.get("/items/:id", apiController.getItem);
router.post("/items", apiController.createItem);
router.put("/items/:id", apiController.updateItem);
router.delete("/items/:id", apiController.deleteItem);

export default router;

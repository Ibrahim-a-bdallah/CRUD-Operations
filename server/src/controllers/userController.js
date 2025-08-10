import { FirebaseService } from "../services/firebase.service.js";
const service = new FirebaseService("items");

export class ApiController {
  async getAllItems(req, res) {
    try {
      const items = await service.getAll();
      res.json(items);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getItem(req, res) {
    try {
      const item = await service.getById(req.params.id);
      if (item) {
        res.json(item);
      } else {
        res.status(404).json({ error: "Item not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createItem(req, res) {
    try {
      const newItem = await service.create(req.body);
      res.status(201).json(newItem);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateItem(req, res) {
    try {
      const updatedItem = await service.update(req.params.id, req.body);
      res.json(updatedItem);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteItem(req, res) {
    try {
      await service.delete(req.params.id);
      res.json({
        success: true,
        message: "Item deleted successfully",
        deletedId: req.params.id,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export const apiController = new ApiController();

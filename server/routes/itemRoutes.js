const express = require("express");
const Item = require("../models/Item");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// GET ALL ITEMS
router.get("/", authMiddleware, async (req, res) => {
  try {
    const items = await Item.find().sort({ createdAt: -1 });

    res.json(items);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch items",
      error: error.message
    });
  }
});

// GET SINGLE ITEM
router.get("/:id", authMiddleware, async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);

    if (!item) {
      return res.status(404).json({
        message: "Item not found"
      });
    }

    res.json(item);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch item",
      error: error.message
    });
  }
});

// CREATE ITEM
router.post("/", authMiddleware, async (req, res) => {
  try {
    const { name, description, price, category } = req.body;

    if (!name || !description || price === undefined || !category) {
      return res.status(400).json({
        message: "All fields are required"
      });
    }

    const item = await Item.create({
      name,
      description,
      price,
      category
    });

    res.status(201).json({
      message: "Item created successfully",
      item
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to create item",
      error: error.message
    });
  }
});

// UPDATE ITEM
router.put("/:id", authMiddleware, async (req, res) => {
  try {
    const { name, description, price, category } = req.body;

    const item = await Item.findByIdAndUpdate(
      req.params.id,
      {
        name,
        description,
        price,
        category
      },
      {
        new: true,
        runValidators: true
      }
    );

    if (!item) {
      return res.status(404).json({
        message: "Item not found"
      });
    }

    res.json({
      message: "Item updated successfully",
      item
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to update item",
      error: error.message
    });
  }
});

// DELETE ITEM
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const item = await Item.findByIdAndDelete(req.params.id);

    if (!item) {
      return res.status(404).json({
        message: "Item not found"
      });
    }

    res.json({
      message: "Item deleted successfully"
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete item",
      error: error.message
    });
  }
});

module.exports = router;
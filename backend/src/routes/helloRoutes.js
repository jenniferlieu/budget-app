import express from "express";

const router = express.Router();

// test route
router.get("/", (req, res) => {
  res.json({ message: "Hello from the backend!" });
});

export default router;

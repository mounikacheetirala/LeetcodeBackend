import express from "express";
import Submission from "../models/Submission.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const submission = new Submission(req.body);
    await submission.save();
    res.status(201).json(submission);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
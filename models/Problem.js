import mongoose from "mongoose";

const problemSchema = new mongoose.Schema({
  title: String,
  description: String,
  difficulty: String,
});

export default mongoose.model("Problem", problemSchema);
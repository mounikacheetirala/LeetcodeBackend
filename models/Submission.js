import mongoose from "mongoose";

const submissionSchema = new mongoose.Schema({
  code: String,
  language: String,
  problemId: String,
  status: String,
  output: String,
});

export default mongoose.model("Submission", submissionSchema);
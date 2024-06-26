const mongoose = require("mongoose");

const QuizzResultsSchema = new mongoose.Schema(
  {
    idUser: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    idQuizz: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Quizz",
      required: true,
    },
    questions: [
      {
        index: { type: Number, required: true },
        point: { type: Number, required: true },
        time: { type: Number, required: true },
        rightAnswer: { type: Boolean, required: true },
      },
    ],
    rightAnswer: {
      type: Number,
      required: true,
    },
    completionTime: {
      type: Number,
      default: 0,
    },
    totalPoints: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("QuizzResults", QuizzResultsSchema);

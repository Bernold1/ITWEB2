const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Exercise = require("./Exercise");
//inspired by https://mongoosejs.com/docs/populate.html

const workoutSchema = Schema({
  name: { type: String, required: true },
  date: { type: Date, default: Date.now },
  exercises: [{ type: Schema.Types.ObjectId, ref: "Exercise" }]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;

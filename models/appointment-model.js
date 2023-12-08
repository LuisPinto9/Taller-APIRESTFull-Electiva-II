const mongoose = require("mongoose");

const { Schema } = mongoose;

const SchemaPatient = new Schema({
  numero: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  fecha: {
    type: Date,
    required: true,
  },
  hora: {
    type: String,
    required: true,
  },
  medic: {
    type: String,
    required: true,
  },
  patients: {
    type: Schema.Types.ObjectId,
    ref: "patient",
  },
});

module.exports = mongoose.model("appointment", SchemaPatient);

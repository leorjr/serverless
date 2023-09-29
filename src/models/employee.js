const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "Please add a name"],
  },
  age: {
    type: String,
    required: [true, "Please add a age"],
  },
  office: {
    type: String,
    required: [true, "Please add a office"],
  },
});

module.exports = mongoose.model("Employee", EmployeeSchema);

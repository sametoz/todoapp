const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var Todo = new Schema({
  todo_description: {
    type: String
  },
  todo_status:{
    type:Boolean
  }
});

module.exports = mongoose.model("Todos", Todo);

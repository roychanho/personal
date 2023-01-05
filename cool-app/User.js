const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  // name: String,
  // email: String,
  // age: Number,
  name: {
    type: String,
    // required: true,
  },
  email: {
    type: String,
    // required: true,
    // minLength: 10,
  },
  age: {
    type: Number,
    min: 1,
    // required: true,
    // validate : {
    //     validator : (value) => value & 2 === 0,
    //     message : (props) => `${props.value} not odd`
    // }
  },
});

// userSchema.methods.sayHello = function () {
//   console.log(
//     `Hello name: ${this.name}, age: ${this.age}, email: ${this.email}`
//   );
// };

//age more than xx
// userSchema.statics.findByAgeGreaterThanEqual = function (age) {
//   return this.find({ age: { $gte: age } });
// };

// userSchema.query.byName = function (name) {
//   return this.where({ name: name }).select(["name", "age"]);
// };

module.exports = mongoose.model("User", userSchema);

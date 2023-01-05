const mongoose = require("mongoose");
const User = require("./User");
mongoose.set("strictQuery", true);

require("dotenv").config();

const uri = process.env.ATLAS_URI;

// local "mongodb://127.0.0.1:27017/demoDB"
mongoose.connect(uri, () => {
  console.log("success");
});

const createNewData = async () => {
  try {

    const user = await User.create({
      name: "royChan",
      email: "roychanho@gmail.com",
      age: 18,
    });
    
    // const user = new User({ name: "roy", email: "test@gmail.com", age: 25 });
    // await user.save();
  
    // const user = await User.insertMany([
    //   {
    //     name: "Alice",
    //     email: "test@gmail.com",
    //   },
    //   {
    //     name: "Bob",
    //     email: "test@gmail.com",
    //   },
    // ]);
    // const user = await User.find({
    //   // name == Alice || Bob
    //   name: { $in: ["Alice", "Bob"] },
    //   // more then 18
    //   age: {$gt : 18}
    // });
    // only show name
    // const user = await User.where("name").equals("Alice").select("name");
    // with out name
    // const user = await User.where("name").equals("Alice").select("-name");
    console.log(user);
  } catch (error) {
    console.log(error.message);
  }
};

createNewData();

const updateData = async () => {
  try {
    // let opts = { runValidators: true };
    // const userUpdate = await User.updateOne(
    //   { name: "Alice" },
    //   { age: -1 },
    //   opts
    // );
    // console.log(userUpdate);
  } catch (error) {
    console.log(error.message);
  }
};

updateData();

const deleteDate = async () => {
  try {
    // const userDelete = await User.deleteOne({ name: "Bob" });
    // console.log(userDelete);
  } catch (error) {
    console.log(error.message);
  }
};

deleteDate();

const SchemaMethods = async () => {
  try {
    // const user = await User.findByAgeGreaterThanEqual(20).byName("roy");
    // console.log(user);
  } catch (error) {
    console.log(error.message);
  }
};

SchemaMethods();

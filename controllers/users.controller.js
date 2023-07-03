const Users = require("../models/users.models");
const validateUser = require("./validation/Users.Validation");

const AddUser = async (req, res) => {
  const { errors, isValid } = validateUser(req.body);
  try {
    if (!isValid) {
      res.status(404).json(errors);
    } else {
      await Users.findOne({ Email: req.body.Email }).then(async (exist) => {
        if (exist) {
          errors.Email = "User Exist";
          res.status(404).json(errors);
        } else {
          await Users.create(req.body);
          res.status(201).json({ message: "User added with success" });
        }
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};
const FindAllUser = async (req, res) => {
  try {
    const data = await Users.find();
    res.status(201).json(data);
  } catch (error) {
    console.log(error.message);
  }
};
const FindSingleUser = async (req, res) => {
  try {
    const data = await Users.findOne({ _id: req.params.id });
    res.status(201).json(data);
  } catch (error) {
    console.log(error.message);
  }
};
const UpdateUser = async (req, res) => {
  const { errors, isValid } = validateUser(req.body);
  try {
    if (!isValid) {
      res.status(404).json(errors);
    } else {
      const data = await Users.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true }
      );
      res.status(201).json(data);
    }
  } catch (error) {
    console.log(error.message);
  }
};
const DeleteUser = async (req, res) => {
  try {
    await Users.findByIdAndRemove({ _id: req.params.id });
    res.status(201).json({ message: "user delete  successfuly" });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  AddUser,
  FindAllUser,
  FindSingleUser,
  UpdateUser,
  DeleteUser,
};

const express = require("express");
const {
  AddUser,
  FindAllUser,
  FindSingleUser,
  UpdateUser,
  DeleteUser,
} = require("../controllers/users.controller");
const router = express.Router();

//add user
router.post("/users", AddUser);
//get all user
router.get("/users", FindAllUser);
//get single user
router.get("/users/:id", FindSingleUser);
//remove user
router.put("/users/:id", UpdateUser);
//add user
router.delete("/users/:id", DeleteUser);

module.exports = router;

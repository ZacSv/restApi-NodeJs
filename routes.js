const UserController = require("./controller/UserController");

module.exports = [
  {
    enpoint: "/",
    method: "GET",
    handler: UserController.pageIni,
  },
  {
    enpoint: "/user",
    method: "GET",
    handler: UserController.listUsers,
  },
  {
    enpoint: "/products",
    method: "GET",
    handler: UserController.listUsers,
  },
  {
    enpoint: "/user/:id",
    method: "GET",
    handler: UserController.getUserById,
  },
  {
    enpoint: "/user",
    method: "POST",
    handler: UserController.createUser,
  },
];

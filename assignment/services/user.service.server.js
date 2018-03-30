module.exports = function (app) {

  var UserModel = require("../models/user/user.model.server");

  //Put calls
  app.put("/api/user/:userId",updateUser);

  //GET calls
  app.get("/api/user/hello", helloUser);
  app.get("/api/user/:userId",findUserById);
  app.get("/api/user", findUserByCredentials);

  //Post calls
  app.post("/api/user", createUsers);

  //delete calls
  app.delete("/api/user/:userId", deleteUser);

  // var users = [
  //   {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder"  },
  //   {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
  //   {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
  //   {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
  // ];

  function helloUser(req, res) {
    res.send("Hello from user service!");
  }

  function createUsers(req, res) {
    var user = req.body;
    UserModel.createUser(user).then((user) => {
      console.log(user);
      res.json(user);
    });
    console.log("Create User")
  }

  function findUserById(req, res){
    var userId = req.params["userId"];
    UserModel.findUserById(userId).then((user) => res.json(user));
  }

  // function findUserByUsername(req, res) {
  //   var username = req.param["username"];
  //   var user = user.find((user) => (user.username === username))
  //   res.json(user);
  // }

  function findUserByCredentials(req, res){
    var username = req.query["username"];
    var password = req.query["password"];

    var user = null;

    if (username && password){
      UserModel.findUserByCredentials(username, password).then( function (user) {
        console.log(user);
        if (user) {
          res.status(200).send(user);
        } else {
          res.status(404).send('Not found');
        }
      }
    )
    }
  }

  function updateUser(req, res){
    var userId = req.params['userId'];
    var user = req.body;

    console.log(req.body);
    console.log("update user: " + userId + " " + user.firstName + " " + user.lastName);

    UserModel.updateUser(userId, user).then(function(user) {
      if (user) {
        res.status(200).send(user);
      } else {
        res.status(404).send("not found!");
      }
    });
  }

  function deleteUser(req, res) {
    var userId = req.params['userId'];
    UserModel.deleteUser(userId).then(() => (
      res.sendStatus(200)
    ));

  }

}

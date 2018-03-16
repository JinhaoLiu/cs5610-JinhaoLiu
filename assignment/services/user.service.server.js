module.exports = function (app) {

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

  var users = [
    {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder"  },
    {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
    {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
    {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
  ];

  function helloUser(req, res) {
    res.send("Hello from user service!");
  }

  function createUsers(req, res) {
    var user = req.body;
    user._id = new Date().getTime().toString();
    users.push(user);
    res.json(user);
  }

  function findUserById(req, res){
    var userId = req.params["userId"];
    var user = users.find(function (user) {
      return user._id === userId;
    });
    res.json(user);
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
      user = users.find(function (user) {
        return user.username === username && user.password === password;
      });
      if (user) {
        res.status(200).send(user);
      } else {
        res.status(404).send('Not found');
      }
    }
    // res.sendStatus(200);
    res.json(user);
  }

  function updateUser(req, res){
    var userId = req.params['userId'];
    var user = req.body;

    console.log(req.body);
    console.log("update user: " + userId + " " + user.firstName + " " + user.lastName);

    for(var i = 0; i < users.length; i++) {
      if (users[i]._id === userId) {
        users[i].firstName = user.firstName;
        users[i].lastName = user.lastName;

        res.status(200).send(user);
        return;
      }
    }
    res.status(404).send("not found!");
  }

  function deleteUser(req, res) {
    var userId = req.params['userId'];
    var user = req.body;

    console.log(req.body);
    console.log("delete user: " + userId + " " + user.firstName + " " + user.lastName);

    for(var i = 0; i < users.length; i++) {
      if (users[i]._id === userId) {
        users[i].firstName = user.firstName;
        users[i].lastName = user.lastName;
        users.splice(i,1);
        res.sendStatus(200);
        return;
      }
    }
    res.status(404).send("not found!");
  }

}

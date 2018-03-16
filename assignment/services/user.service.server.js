module.exports = function (app) {

  app.post("/api/user", createUser);
  app.get("/api/user", findUserByCredentials);
  app.get("/api/user/:userId", findUserById);
  app.put("/api/user/:userId", updateUserById);
  app.delete("/api/user/:userId", deleteUser);


  //app.get("/api/user", findUsers);

  var users = [
    {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonderland", email: 'alice@123.com'  },
    {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley", email: 'bob@123.com'  },
    {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia", email: 'charly@123.com'  },
    {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi", email: 'jannunzi@123.com' }
  ];

  function createUser(req, res){
    var user = req.body;
    user._id = new Date().getTime().toString();
    users.push(user);
    res.json(user);
  }

  // function findUserByUsername(req, res){
  //   var username = req.query.username;
  //   var user = users.find(function (user) {
  //     return user.username === username;
  //   });
  //   res.json(user);
  // }

  function findUserByCredentials(req, res){
    var username = req.query.username;
    var password = req.query.password;
    var user = users.find(function (user) {
      return user.username === username && user.password === password;
    });
    res.json(user);
  }


  function findUserById(req, res){
    var userId = req.params["userId"];
    var user = users.find(function (user) {
      return user._id === userId;
    });
    res.json(user);
  }

  function findAllUsers(req, res){
    res.json(users);
  }

  function findUsers(req, res){
    var username = req.query["username"];
    var password = req.query["password"];

    var user = null;

    if (username && password){
      user = users.find(function (user) {
        return user.username === username && user.password === password;
      });
    }
    res.json(user);
  }

  function updateUserById(req, res){
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

  function deleteUser(req, res){
    var userId = req.params['userId'];

    for(var i = 0; i < users.length; i++) {
      if (users[i]._id === userId) {
        users.slice(i, 1);
        res.status(200).send("user is deleted");
        return;
      }
    }
    res.status(404).send("not found!");
  }
};

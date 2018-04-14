var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
var bcrypt = require("bcrypt-nodejs");

var facebookConfig = {
  clientID     : '1898300067127396',
  clientSecret : '72f06905537ac8553e6138c0923d8f74',
  callbackURL  : 'https://cs5610-webdev-yuxinhan.herokuapp.com/auth/facebook/callback'
};
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

  // auth with Facebook
  app.get ('/facebook/login', passport.authenticate('facebook', { scope : 'email' }));

  //authentication api
  app.post('/api/login', passport.authenticate('local'), login);
  app.post('/api/logout', logout);
  app.post('/api/register', register);
  app.post ('/api/loggedIn', loggedIn);

  app.get('/auth/facebook/callback',
    passport.authenticate('facebook', {
      successRedirect: '/profile',
      failureRedirect: '/register'
    }));


  passport.use(new LocalStrategy(localStrategy));
  passport.serializeUser(serializeUser);
  passport.deserializeUser(deserializeUser);
  passport.use(new FacebookStrategy(facebookConfig, facebookStrategy));

  function serializeUser(user, done) {
    done(null, user);
  }

  function deserializeUser(user, done) {
    UserModel
      .findUserById(user._id)
      .then(
        function(user){
          done(null, user);
        },
        function(err){
          done(err, null);
        }
      );
  }

  function localStrategy(username, password, done) {
    UserModel
      .findUserByCredentials(username, password)
      .then(
        function(user) {
          if(user && bcrypt.compareSync(password, user.password)) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        },
        function(err) {
          if (err) { return done(err); }
        }
      );
  }

  function facebookStrategy(token, refreshToken, profile, done) {
    UserModel.findFacebookUser(profile.id).then(
      function (user) {
        if (user) {
          return done(null, user);
        } else {
          var names = profile.displayName.split(" ");
          var newFacebookUser = {
            username: '123',
            password: '123',
            lastName: names[1],
            firstName: names[0],
            email: profile.emails ? profile.emails[0].value : "",
            facebook: {
              id: profile.id,
              token: token
            }
          };
          return UserModel.createUser(newFacebookUser);
        }
      },
      function (err) {
        if (err) {
          return done(err);
        }
      }
    ).then(
      function (user) {
        return done(null, user);
      },
      function (err) {
        if (err) {
          return done(err);
        }
      }
    );
  }

  function login(req, res) {
    var user = req.user;
    res.json(user);
  }

  function logout(req, res) {
    req.logout();
    res.json(200);
    // res.redirect('/login');
  }

  function loggedIn(req, res) {
    res.send(req.isAuthenticated() ? req.user : '0');
  }

  function register(req, res) {
    var newUser = req.body;
    newUser.password = bcrypt.hashSync(newUser.password);
    UserModel.findUserByUserName(newUser.username).then(
      function (user) {
        if (user) {
          res.sendStatus(400).json("Username is in use!");
          return;
        } else {
          UserModel.createUser(newUser).then(
            function (user) {
              if (user) {
                req.login(user, function (err) {
                  if (err) {
                    res.sendStatus(400).send(err);
                  } else {
                    res.json(user);
                  }
                });
              }
            }
          )
        }
      }
    )
  }

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

  function findUserByUsername(req, res) {
    var username = req.query["username"];
    UserModel.findUserByUserName(username).then(
      function (user) {
        if (user) {
          res.json(user);
        } else {
          res.sendStatus(400).send("Cannot find user with the username");
        }
      },
      function (err) {
        res.sendStatus(400).send(err);
      }
    );
  };

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

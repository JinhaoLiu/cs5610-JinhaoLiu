var mongoose = require("mongoose");
var UserSchema = require("./user.schema.server.js");
var UserModel = mongoose.model("UserModel", UserSchema);
UserModel.findUserById = findUserById;
UserModel.createUser = createUser;
UserModel.findAllUsers = findAllUsers;
UserModel.findUserByCredentials = findUserByCredentials;
UserModel.findUserByUserName = findUserByUserName;
UserModel.updateUser = updateUser;
UserModel.deleteUser = deleteUser;
UserModel.findFacebookUser=findFacebookUser;

module.exports = UserModel;

function updateUser(userId, user){
  return UserModel.update({_id: userId}, user );
}

function findUserByUserName(username){
  return UserModel.findOne({username: username});
}

function findUserByCredentials(username, password){
  return UserModel.findOne({username: username, password: password});
}

function createUser(user){
  return UserModel.create(user);
}

function findAllUsers(){
  UserModel.find(function (err, doc) {
    console.log(docs);
  })
}

function findUserById(userId){
  return UserModel.findById(userId);
}

function deleteUser(userId) {
  return UserModel.remove({_id: userId});
}

function findFacebookUser(id) {
  return UserModel.findOne({"facebook.id": id});
}


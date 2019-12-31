const User = require('../models/user.model');
// const bcrypt = require('bcrypt'); 
const jwt = require('jsonwebtoken');

module.exports.create = async function (request, response) {
   let user = new User({ name: request.body.name, email: request.body.email, password: request.body.password});
   console.log("user by params :", user);
   try {
      console.log("request: ", request);
      console.log("response: ", response);
      let res = await user.save()
      console.log(res);
      response.status(201);
      response.json(res);
  } catch (error) {
      if (error.errors.name.kind == "required") {
         response.status(400);
         response.json({ message: "Bad Request" });
      } else if (error.errors.name.kind == "unique") {
         response.status(409);
         response.json({ message: "Conflict" });
      } else {
          response.status(500);
          response.json({ message: "Internal Error" });
      }
  }
}

module.exports.authenticate = async function (request, response) {
   try {
      let user = await User.findOne({ email: request.body.email });
      if (user) {
      // if (user && bcrypt.compareSync(request.body.password, user.password)) {
         const token = jwt.sign({ id: user._id }, request.app.get('secretKey'), { expiresIn: '1h' });
         response.json({ status: "success", message: "user found!!!", data: { user: user, token: token } });
      } else {
         response.json({ status: "error", message: "Invalid email/password!!!", data: null });
      }
   } catch (error) {
      response.status(500);
      response.json({ message: "Internal Error" });
   }
}



// module.exports = {
//  create: async function(req, res, next) {
  
//       await userModel.create({ name: req.body.name, email: req.body.email, password: req.body.password }, function (err, result) {
//          console.log('create method!');
//          if (err) {
//             console.log('ERROR CREATE:'+ error);
//             next(err);
//          }
//          else {
//             res.json({ status: "success", message: "User added successfully!!!", data: null });
//          }
//       });
//  },
// authenticate: async function(req, res, next) {
//    await userModel.findOne({email:req.body.email}, function(err, userInfo){
//      if (err) {
//       next(err);
//      } else {
// if(bcrypt.compareSync(req.body.password, userInfo.password)) {
// const token = jwt.sign({id: userInfo._id}, req.app.get('secretKey'), { expiresIn: '1h' });
// res.json({status:"success", message: "user found!!!", data:{user: userInfo, token:token}});
// }else{
// res.json({status:"error", message: "Invalid email/password!!!", data:null});
// }
//      }
//     });
//  },
// }

const usersService = require("../services/users.service");

exports.register = (req, res, next) => {
  //Validation area
  const data = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    emailId: req.body.emailId,
    password: req.body.password,
  };
  //Pass the data to service and wait for a res from the service
  usersService.register(data, (error, results) => {
    if (error) {
      console.log(error);
      return res.status(400).send({ succes: 0, data: "Bad Request" });
    }
    return res.status(200).send({ succes: 1, data: results });
  });
};

exports.login = (req, res, next) => {
  //Validation area
  const data = {
    emailId: req.body.emailId,
    password: req.body.password,
  };
  //Pass the data to service and wait for a res from the service
  usersService.login(data, (error, results) => {
    if (error) {
      console.log(error);
      return res.status(400).send({ succes: 0, data: "Bad Request" });
    }
    return res.status(200).send({ succes: 1, data: results });
  });
};

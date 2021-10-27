module.exports = app => {
  const pets = require("../controllers/pet.controller.js");

  var router = require("express").Router();

  // Create a new demand
  router.post("/", pets.create);

  // Retrieve all pets
  router.get("/", pets.findAll);

  router.post("/hbj",pets.findOne);



  app.use('/api/pets', router);
};

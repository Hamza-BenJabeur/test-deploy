const db = require("../models");
const Pet = db.pets;


// Create and Save a new Pet
exports.create = async(req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Pet
  const pet = {
    name: req.body.name,
    favorite_color: req.body.favorite_color,
    pet_type: req.body.pet_type,

    published: req.body.published ? req.body.published : false
  };

  // Save Pet in the 
  const p = await Pet.findOne({ where: { name: pet.name } });
  if(p === null){
    Pet.create(pet)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
  }else{res.send("duplicated")}
};
  
 

// Retrieve all Pets from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;

  Pet.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};


// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const name = req.params.name;

  Pet.findByPk(name)
    .then(data => {
      console.log("hbj")
      res.send(data);
    })
    
};

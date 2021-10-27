module.exports = (sequelize, Sequelize) => {
  const Pet = sequelize.define("pet", {
    name: {
      type: Sequelize.STRING
    },
    favorite_color: {
      type: Sequelize.STRING
    },
    pet_type: {
      type: Sequelize.STRING
    }
  });

  return Pet;
};

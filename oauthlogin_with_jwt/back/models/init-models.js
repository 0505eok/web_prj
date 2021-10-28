var DataTypes = require("sequelize").DataTypes;
var _USER = require("./USER");

function initModels(sequelize) {
  var USER = _USER(sequelize, DataTypes);


  return {
    USER,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;

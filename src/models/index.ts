

import fs from 'fs';
import path from 'path';
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.ENVIROMENT || 'development';
var config : any = require(__dirname + '/../config/config.json')[env];
const db : any = {};
config.dialectOptions = {
  dateStrings: true,
  typeCast: function (field : any, next : any) { 
    if (field.type === 'DATETIME') {
      return field.string()
    }
      return next()
    }
  }

let sequelize : any;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.ts');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name]  = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;

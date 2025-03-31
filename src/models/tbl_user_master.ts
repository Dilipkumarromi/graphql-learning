'use strict';
import { Model, DataTypes, Sequelize } from 'sequelize';
module.exports = (sequelize:any, DataTypes:any) => {
  class tbl_user_master extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models:any) {
      // define association here
    }
  }
  tbl_user_master.init({
    first_name: DataTypes.INTEGER,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    mobile: DataTypes.STRING,
    dob: DataTypes.STRING,
    education: DataTypes.STRING,
    is_active: DataTypes.BOOLEAN,
    created_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'tbl_user_master',
  });
  return tbl_user_master;
};
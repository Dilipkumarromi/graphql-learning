'use strict';
import { Model, DataTypes, Sequelize } from 'sequelize';
module.exports = (sequelize:any, DataTypes:any) => {
  class tbl_state_master extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models:any) {
      // define association here
    }
  }
  tbl_state_master.init({
    state_name: DataTypes.STRING,
    is_active: DataTypes.BOOLEAN,
    created_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'tbl_state_master',
  });
  return tbl_state_master;
};
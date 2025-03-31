'use strict';
import { Model, DataTypes, Sequelize } from 'sequelize';
module.exports = (sequelize:any, DataTypes:any) => {
  class tbl_users_mapping extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models:any) {
      // define association here
    }
  }
  tbl_users_mapping.init({
    user_id: DataTypes.INTEGER,
    state_id: DataTypes.INTEGER,
    district_id: DataTypes.INTEGER,
    is_active: DataTypes.BOOLEAN,
    created_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'tbl_users_mapping',
  });
  return tbl_users_mapping;
};
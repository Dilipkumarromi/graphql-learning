'use strict';
import { Model, DataTypes, Sequelize } from 'sequelize';
module.exports = (sequelize:any, DataTypes:any) => {
  class tbl_address_master extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models:any) {
      // define association here
      this.belongsTo(models.tbl_user_master,{
        foreignKey:'user_id',
        as:'addresses'
      })
      this.hasOne(models.tbl_district_master,{
        foreignKey:'id',
        as:'district'
      })
    }
  }
  tbl_address_master.init({
    address: DataTypes.STRING,
    address_1: DataTypes.STRING,
    pincode: DataTypes.STRING,
    district_id: DataTypes.INTEGER,
    state_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'tbl_address_master',
  });
  return tbl_address_master;
};
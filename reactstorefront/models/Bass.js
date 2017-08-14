module.exports = function(sequelize, DataTypes) {
  var Bass = sequelize.define("Bass", {
    product_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    department_name: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    },
    price: {
      type: DataTypes.DECIMAL
    },
    stock_quantity: {
      type: DataTypes.DECIMAL
    }

  })
  
  return Bass;
};
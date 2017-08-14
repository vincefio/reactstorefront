module.exports = function(sequelize, DataTypes) {
  var Store = sequelize.define("Store", {
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
  
  return Store;
};
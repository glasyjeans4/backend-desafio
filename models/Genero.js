const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Genero = sequelize.define('Genero', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    tableName: 'generos',
    timestamps: false  
  });

  return Genero;
};

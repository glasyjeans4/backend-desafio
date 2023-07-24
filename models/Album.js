const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Album = sequelize.define('Album', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    duracion: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'albumes',
    timestamps: false  
  });

  return Album;
};

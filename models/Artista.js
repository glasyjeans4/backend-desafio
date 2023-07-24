const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Artista = sequelize.define('Artista', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    apellido: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    tableName: 'artistas',
    timestamps: false  
  });

  return Artista;
};

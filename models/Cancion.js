const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Cancion = sequelize.define('Cancion', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    titulo: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    duracion: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    genero_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    album_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    artista_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'canciones',
    timestamps: false  
  });

  return Cancion;
};

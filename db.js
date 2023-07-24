const Sequelize = require('sequelize');
const CancionModel = require('./models/Cancion');
const ArtistaModel = require('./models/Artista');
const AlbumModel = require('./models/Album');
const GeneroModel = require('./models/Genero');


const sequelize = new Sequelize('musicando', 'root', 'Pep!to11', {
  host: 'localhost',
  dialect: 'mysql'
});

const Cancion = CancionModel(sequelize, Sequelize.DataTypes);
const Artista = ArtistaModel(sequelize, Sequelize.DataTypes);
const Album = AlbumModel(sequelize, Sequelize.DataTypes);
const Genero = GeneroModel(sequelize, Sequelize.DataTypes);


Cancion.belongsTo(Artista, { as: 'artista', foreignKey: 'artista_id' });
Artista.hasMany(Cancion, { as: 'canciones', foreignKey: 'artista_id' });

Cancion.belongsTo(Album, { as: 'album', foreignKey: 'album_id' });
Album.hasMany(Cancion, { as: 'canciones', foreignKey: 'album_id' });

Cancion.belongsTo(Genero, { as: 'genero', foreignKey: 'genero_id' });
Genero.hasMany(Cancion, { as: 'canciones', foreignKey: 'genero_id' });


sequelize.sync()
  .then(() => console.log('Conexión exitosa a la base de datos'))
  .catch(error => console.error('No se pudo conectar a la base de datos:', error));

module.exports = {
  Cancion,
  Artista,
  Album,
  Genero
};

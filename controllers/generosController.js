const { Genero, Cancion } = require('../db');

exports.listarGenerosConCanciones = async (req, res) => {
  try {
    const generos = await Genero.findAll({
      include: [
        {
          model: Cancion, 
          as: 'canciones',
          required: false,
          attributes: ['id', 'titulo', 'duracion'], 
        }
      ]
    });
    res.json(generos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

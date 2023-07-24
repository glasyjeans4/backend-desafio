const { Cancion, Artista, Album, Genero } = require('../db');  

exports.listarCanciones = async (req, res) => {
  try {
    const canciones = await Cancion.findAll({
      include: [
        {
          model: Artista,
          as: 'artista'
        },
        {
          model: Album,
          as: 'album'
        },
        {
          model: Genero,
          as: 'genero'
        }
      ]
    });
    res.json(canciones);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.crearCancion = async (req, res) => {
  try {
    const cancion = await Cancion.create(req.body);
    res.status(201).json(cancion);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.obtenerCancion = async (req, res) => {
  try {
    const cancion = await Cancion.findByPk(req.params.id, {
        include: ['artista', 'album'] 
    });
    if (cancion) {
      res.json(cancion);
    } else {
      res.status(404).json({ error: "Canción no encontrada" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.actualizarCancion = async (req, res) => {
  await Cancion.update(req.body, { where: { id: req.params.id }});
  const cancion = await Cancion.findByPk(req.params.id);
  res.json(cancion);
};

exports.eliminarCancion = async (req, res) => {
  await Cancion.destroy({ where: { id: req.params.id }});
  res.json({ message: `Cancion con ID: ${req.params.id} fue eliminada.` });
};

exports.ultimaCancion = async (req, res) => {
  const cancion = await Cancion.findOne({ order: [['id', 'DESC']]});
  res.json(cancion);
};


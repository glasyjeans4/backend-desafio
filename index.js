const express = require('express');
const app = express();
const cors = require('cors'); 
const { sequelize } = require('./db'); 

app.use(cors()); 
app.use(express.json()); 


app.use('/canciones', require('./routes/cancionesRoutes'));
app.use('/generos', require('./routes/generosRoutes'));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Ha ocurrido un error en el servidor.');
});


app.listen(3000, () => {
  console.log('Aplicación escuchando en el puerto 3000!');
});

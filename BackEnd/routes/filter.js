const conn = require("../private/database");
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});


router.get('/list/movies', function ( req,res, next) {

  const query = "select * from category"
    conn.query(query, (err, rows, fileds) => {
      if(err){
        res.status(500).json({ message: "Hubo un error que no pudo controlarse"});
      }
      res.status(200).json({data: rows})
    })
});


router.get('/list/file_season', function ( req,res, next) {

  const query = "select * from file_season"
    conn.query(query, (err, rows, fileds) => {
      if(err){
        res.status(500).json({ message: "Hubo un error que no pudo controlarse"});
      }
      res.status(200).json({data: rows})
    })
});


router.get('/list/season', function ( req,res, next) {

  const query = "select * from season"
    conn.query(query, (err, rows, fileds) => {
      if(err){
        res.status(500).json({ message: "Hubo un error que no pudo controlarse"});
      }
      res.status(200).json({data: rows})
    })
});


router.get('/get-movie/:id_movie', function (req, res, next) {
  var {
    id_movie,
  } = req.params;
  const query = `Select * from file_season,season where file_id_file = ${id_movie} and
  id_season=season_id_season `
    conn.query(query, (err, rows, fileds) => {
      
      if(err){
        res.status(500).json({ message: "Hubo un error que no pudo controlarse"});
      }

      if(rows.length==0){
        res.status(404).json({ message: "Producto no encontrado"});
      }


      res.status(200).json({data: rows[0]})
    })
});



module.exports = router;

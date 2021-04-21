const conn = require("../private/database");
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});


router.get('/list/category', function ( req,res, next) {

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


module.exports = router;

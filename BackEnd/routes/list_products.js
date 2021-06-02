const conn = require("../private/database");
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});


router.get('/list/category', function ( req,res, next) {

  const query = `select c.name_category from category c, category_file cf
                 where c.id_category = cf.category_id_category
                 group by c.name_category;`
    conn.query(query, (err, rows, fileds) => {
      if(err){
        res.status(500).json({ message: "Hubo un error que no pudo controlarse"});
      }
      res.status(200).json({data: rows})
    })
});


router.get('/list/file_season', function ( req,res, next) {

  const query = "select file_id_file,name,cover_page from file_season ORDER BY file_id_file DESC limit 16;"
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


router.get('/list/year', function ( req,res, next) {

  const query = `select YEAR(release_date) as r_year from file_season
                 group by r_year
                 order by r_year asc;`
    conn.query(query, (err, rows, fileds) => {
      if(err){
        res.status(500).json({ message: "Hubo un error que no pudo controlarse"});
      }
      res.status(200).json({data: rows})
    })
});




module.exports = router;

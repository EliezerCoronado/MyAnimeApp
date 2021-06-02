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

router.get('/movie/:id_movie', function (req, res, next) {
  let aux;
  var {
    id_movie,
  } = req.params;
  const queryC = `Select * from file_season,season where file_id_file = ${id_movie} and
  id_season=season_id_season`
 
  conn.query(queryC, async (err, rowsC, fileds) => {
    if (err) {
      res.status(500).json({ message: "Hubo un error que no pudo controlarse" });
    }
    /*res.status(200).json({ data: rowsC })*/
    for (var i = 0; i < rowsC.length; i++) {

      var r = await get_languages(rowsC[i].file_id_file)
      rowsC[i]['languages'] = r.languages;
      
    }

    for (var i = 0; i < rowsC.length; i++) {

      var r = await get_subtitle(rowsC[i].file_id_file)
      rowsC[i]['subtitles'] = r.subtitle;
    }

    for (var i = 0; i < rowsC.length; i++) {

      var r = await get_category(rowsC[i].file_id_file)
      rowsC[i]['category'] = r.category;
    }


    for (var i = 0; i < rowsC.length; i++) {

      var r = await get_fisical_file(rowsC[i].file_id_file)
      rowsC[i]['inf'] = r.fisical_file;
    }

    for (var i = 0; i < rowsC.length; i++) {

      var r = await get_second_name(rowsC[i].file_id_file)
      rowsC[i]['second_names'] = r.second_name;
    
    }

    for (var i = 0; i < rowsC.length; i++) {

      var r = await get_pictures(rowsC[i].file_id_file)
      rowsC[i]['pictures'] = r.picture;
    
    }

    res.status(200).json({ data: rowsC })

  });


  
});


router.get('/get-lists/:type', function (req, res, next) {
  var {
    type,
  } = req.params;
  const query = `Select file_id_file,name,cover_page from file_season, file, type 
                 where file_id_file=id_file
                 and type_id_type=id_type
                 and name_type ='${type}'
                 ORDER BY file_id_file DESC;`
    conn.query(query, (err, rows, fileds) => {
      
      if(err){
        res.status(500).json({ message: "Hubo un error que no pudo controlarse"});
      }

      if(rows.length==0){
        res.status(404).json({ message: "Producto no encontrado"});
      }


      res.status(200).json({data: rows})
    })
});



router.get('/search-menu/:nombre', function (req, res, next) {
  var {
    nombre,
  } = req.params;
  const query = `select fs.file_id_file,fs.cover_page,fs.name from 
                file_season fs inner join second_name sn on fs.file_id_file = sn.file_season_file_id_file
                where sn.second_names like '%${nombre}%'
                and sn.description !='Titulo España';
                `
  conn.query(query, (err, rows, fileds) => {
    if (err) {
      console.log(err)
      res.status(500).json({ message: "Hubo un error que no pudo controlarse" });
    }
    res.status(200).json({ data: rows })
  })
});


router.get('/searchbygenre/:nombre', function (req, res, next) {
  var {
    nombre,
  } = req.params;
  const query = `select fs.file_id_file, fs.name, fs.cover_page from file_season fs, category c,category_file cf
                 where fs.file_id_file = cf.file_id_serie
                 and cf.category_id_category = c.id_category
                 and c.name_category = '${nombre}'`

  conn.query(query, (err, rows, fileds) => {
    if (err) {
      res.status(500).json({ message: "Hubo un error que no pudo controlarse" });
    }
    res.status(200).json({ data: rows })
  })
});

router.get('/searchbygenre/:nombre', function (req, res, next) {
  var {
    nombre,
  } = req.params;
  const query = `select fs.file_id_file, fs.name, fs.cover_page from file_season fs, category c,category_file cf
                 where fs.file_id_file = cf.file_id_serie
                 and cf.category_id_category = c.id_category
                 and c.name_category = '${nombre}'`

  conn.query(query, (err, rows, fileds) => {
    if (err) {
      res.status(500).json({ message: "Hubo un error que no pudo controlarse" });
    }
    res.status(200).json({ data: rows })
  })
});




router.get('/searchbygenrebytype/:nombre/:id', function (req, res, next) {
  var {
    nombre,
    id
  } = req.params;
  const query = `select fs.file_id_file, fs.name, fs.cover_page from file_season fs, category c,category_file cf, file f
                 where fs.file_id_file = cf.file_id_serie
                 and f.id_file = fs.file_id_file
                 and cf.category_id_category = c.id_category
                 and c.name_category = '${nombre}'
                 and f.type_id_type = ${id}; `

  conn.query(query, (err, rows, fileds) => {
    if (err) {
      res.status(500).json({ message: "Hubo un error que no pudo controlarse" });
    }
    res.status(200).json({ data: rows })
  })
});




router.get('/searchbyyear/:year', function (req, res, next) {
  var {
    year,
  } = req.params;
  const query = `select fs.file_id_file,fs.cover_page,fs.name from file_season fs, category c,category_file cf
                 where fs.file_id_file = cf.file_id_serie
                 and cf.category_id_category = c.id_category
                 and Year(fs.release_date) =  ${year}`
  conn.query(query, (err, rows, fileds) => {
    if (err) {
      console.log(err)
      res.status(500).json({ message: "Hubo un error que no pudo controlarse" });
    }
    res.status(200).json({ data: rows })
  })
});

router.get('/searchbyyearbytype/:year/:id', function (req, res, next) {
  var {
    year,
    id
  } = req.params;
  const query = `select fs.file_id_file, fs.name, fs.cover_page from file_season fs, category c,category_file cf, file f
                 where fs.file_id_file = cf.file_id_serie
                 and f.id_file = fs.file_id_file
                 and cf.category_id_category = c.id_category
                 and Year(fs.release_date) =${year}
                 and f.type_id_type = ${id} ;
                              `
  conn.query(query, (err, rows, fileds) => {
    if (err) {
      console.log(err)
      res.status(500).json({ message: "Hubo un error que no pudo controlarse" });
    }
    res.status(200).json({ data: rows })
  })
});

router.get('/searchboth/:nombre/:year', function (req, res, next) {
  var {
    nombre,
    year
  } = req.params;
  const query = `select fs.file_id_file, fs.name, fs.cover_page from file_season fs, category c,category_file cf
                 where fs.file_id_file = cf.file_id_serie
                 and cf.category_id_category = c.id_category
                 and c.name_category = '${nombre}'
                 and Year(fs.release_date) =  ${year}`
  conn.query(query, (err, rows, fileds) => {
    if (err) {
      console.log(err)
      res.status(500).json({ message: "Hubo un error que no pudo controlarse" });
    }
    res.status(200).json({ data: rows })
  })
});


router.get('/searchbothbytype/:nombre/:year/:id', function (req, res, next) {
  var {
    nombre,
    year,
    id
  } = req.params;
  const query = `
                 select fs.file_id_file, fs.name, fs.cover_page from file_season fs, category c,category_file cf, file f
                 where fs.file_id_file = cf.file_id_serie
                 and f.id_file = fs.file_id_file
                 and cf.category_id_category = c.id_category
                 and Year(fs.release_date) =  ${year}
                 and c.name_category = '${nombre}'
                 and f.type_id_type = ${id} ;`
  conn.query(query, (err, rows, fileds) => {
    if (err) {
      console.log(err)
      res.status(500).json({ message: "Hubo un error que no pudo controlarse" });
    }
    res.status(200).json({ data: rows })
  })
});


router.get('/categorybytype/:id', function (req, res, next) {
  var {
    id,
  } = req.params;
  const query = `select c.name_category from category c, category_file cf, file f
                 where c.id_category = cf.category_id_category
                 and f.id_file = cf.file_id_serie
                 and f.type_id_type = ${id}
                 group by c.name_category;`

  conn.query(query, (err, rows, fileds) => {
    if (err) {
      res.status(500).json({ message: "Hubo un error que no pudo controlarse" });
    }
    res.status(200).json({ data: rows })
  })
});




router.get('/categorybyyear/:id', function (req, res, next) {
  var {
    id,
  } = req.params;
  const query = `select YEAR(fs.release_date) as r_year from file_season fs, file f
                 where fs.file_id_file = f.id_file
                 and f.type_id_type = ${id}
                 group by r_year
                 order by r_year asc ;`

  conn.query(query, (err, rows, fileds) => {
    if (err) {
      res.status(500).json({ message: "Hubo un error que no pudo controlarse" });
    }
    res.status(200).json({ data: rows })
  })
});




let get_languages = function (id_file) {
  return new Promise((resolve, reject) => {
    const query = `select l.language from file_season_language  fsl, language l
                   where l.id_language = fsl.language_id_language
                   and fsl.file_season_file_id_file = ${id_file};`
    conn.query(query, (err, rows, fileds) => {
      if (err) {
        //res.status(500).json({ message: "Hubo un error que no pudo controlarse" });
        resolve({ languages: [] })
      }
      //res.status(200).json({ data: rows })
      resolve({ languages: rows })
      //rowsC[i]['menus'] = rows
    })
  })
}



let get_subtitle = function (id_file) {
  return new Promise((resolve, reject) => {
    const query = `select l.subtitle from file_season_subtitle  fsl, subtitle l
                   where l.id_subtitle = fsl.subtitle_id_subtitle
                   and fsl.file_season_file_id_file = ${id_file};`
    conn.query(query, (err, rows, fileds) => {
      if (err) {
        //res.status(500).json({ message: "Hubo un error que no pudo controlarse" });
        resolve({ subtitle: [] })
      }
      //res.status(200).json({ data: rows })
      resolve({ subtitle: rows })
      //rowsC[i]['menus'] = rows
    })
  })
}


let get_category = function (id_file) {
  return new Promise((resolve, reject) => {
    const query = `select c.name_category from category_file r, category c, file f 
                   where category_id_category=id_category
                   and f.id_file=r.file_id_serie
                   and f.id_file=${id_file};`


    conn.query(query, (err, rows, fileds) => {
      if (err) {
        //res.status(500).json({ message: "Hubo un error que no pudo controlarse" });
        resolve({ category: [] })
      }
      //res.status(200).json({ data: rows })
      resolve({ category: rows })
      //rowsC[i]['menus'] = rows
    })
  })
}

let get_fisical_file = function (id_file) {
  return new Promise((resolve, reject) => {
    const query = `select Round( avg(size_fisical_file),0) as size,
                          Round(avg(duration),0) as duration,
                          count(size_fisical_file) as chapters,
                          sum(size_fisical_file) as total_size 
                          from fisical_file where file_season_file_id_file = ${id_file};`
    conn.query(query, (err, rows, fileds) => {
      if (err) {
        //res.status(500).json({ message: "Hubo un error que no pudo controlarse" });
        resolve({ fisical_file: [] })
      }
      //res.status(200).json({ data: rows })
      resolve({ fisical_file: rows })
      //rowsC[i]['menus'] = rows
    })
  })
}

let get_second_name = function (id_file) {
  return new Promise((resolve, reject) => {
    const query = `select description,second_names from second_name 
                   where file_season_file_id_file =${id_file};`

    
    conn.query(query, (err, rows, fileds) => {
      if (err) {
        //res.status(500).json({ message: "Hubo un error que no pudo controlarse" });
        resolve({ second_name: [] })
      }
      //res.status(200).json({ data: rows })
      resolve({ second_name: rows })
      //rowsC[i]['menus'] = rows

    })
  })
}



let get_pictures = function (id_file) {
  return new Promise((resolve, reject) => {
    const query = `select path_picture from picture 
                   where file_season_file_id_file = ${id_file};`

    
    conn.query(query, (err, rows, fileds) => {
      if (err) {
        //res.status(500).json({ message: "Hubo un error que no pudo controlarse" });
        resolve({ picture: [] })
      }
      //res.status(200).json({ data: rows })
      resolve({ picture: rows })
      //rowsC[i]['menus'] = rows

    })
  })
}




module.exports = router;

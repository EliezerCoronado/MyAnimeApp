select * from category;




Insert into category (name_category) values ('Accion');
Insert into category (name_category) values ('Aventura');
Insert into category (name_category) values ('Biografia');
Insert into category (name_category) values ('Comedia');
Insert into category (name_category) values ('Documental');
Insert into category (name_category) values ('Familiar');
Insert into category (name_category) values ('Misterio');
Insert into category (name_category) values ('Ciencia Ficcion');
Insert into category (name_category) values ('Terror');
Insert into category (name_category) values ('Suspenso');
Insert into category (name_category) values ('Drama');
Insert into category (name_category) values ('Animacion');
Insert into category (name_category) values ('Romance');
Insert into category (name_category) values ('Thriller');
Insert into category (name_category) values ('Guerra');
Insert into category (name_category) values ('Musical');
Insert into category (name_category) values ('Fantasia');

Insert into category (name_category) values ('Deportes');
Insert into category (name_category) values ('Espacial');
Insert into category (name_category) values ('Infantil');
Insert into category (name_category) values ('Mecha');
Insert into category (name_category) values ('Parodia');
Insert into category (name_category) values ('Shounen');
Insert into category (name_category) values ('Artes Marciales');
Insert into category (name_category) values ('Josei');
Insert into category (name_category) values ('Militar');
Insert into category (name_category) values ('Policia');
Insert into category (name_category) values ('Samurai');
Insert into category (name_category) values ('Sobrenatural');
Insert into category (name_category) values ('Vampiros');
Insert into category (name_category) values ('Demencia');
Insert into category (name_category) values ('Ecchi');
Insert into category (name_category) values ('Harem');
Insert into category (name_category) values ('Juegos');
Insert into category (name_category) values ('Psicologico');
Insert into category (name_category) values ('Seinen');
Insert into category (name_category) values ('Superpoderes');
Insert into category (name_category) values ('Yaoi');
Insert into category (name_category) values ('Carreras');
Insert into category (name_category) values ('Demonios');
Insert into category (name_category) values ('Escolares');
Insert into category (name_category) values ('Historico');
Insert into category (name_category) values ('Magia');
Insert into category (name_category) values ('Recuerdos de la Infancia');
Insert into category (name_category) values ('Shoujo');
Insert into category (name_category) values ('Yuri');

Insert into type (name_type) values ('Pelicula');
Insert into type (name_type) values ('Serie');
Insert into type (name_type) values ('Dorama');
Insert into type (name_type) values ('Anime');
Insert into type (name_type) values ('Musica');
Insert into type (name_type) values ('Video Musical');

Insert into season (name_season) values ('Pelicula');
Insert into season (name_season) values ('OVA');
Insert into season (name_season) values ('Temporada 1');
Insert into season (name_season) values ('Temporada 2');
Insert into season (name_season) values ('Temporada 3');
Insert into season (name_season) values ('Temporada 4');
Insert into season (name_season) values ('Temporada 5');
Insert into season (name_season) values ('Temporada 6');
Insert into season (name_season) values ('Temporada 7');
Insert into season (name_season) values ('Temporada 8');
Insert into season (name_season) values ('Temporada 9');
Insert into season (name_season) values ('Temporada 10');


select * from file;
select * from type;

Insert into file(name_file, type_id_type) value ("Iron man 1", 1);
Insert into file(name_file, type_id_type) value ("Iron man 2", 1);
Insert into file(name_file, type_id_type) value ("Iron man 3", 1);

Insert into file(name_file, type_id_type) value ("Capitan America 1", 1);
Insert into file(name_file, type_id_type) value ("Capitan America 2", 1);
Insert into file(name_file, type_id_type) value ("Capitan America 3", 1);

Insert into file(name_file, type_id_type) value ("Thor 1", 1);
Insert into file(name_file, type_id_type) value ("Thor 2", 1);
Insert into file(name_file, type_id_type) value ("Thor 3", 1);

Insert into file(name_file, type_id_type) value ("Black Panther", 1);

Insert into file(name_file, type_id_type) value ("Ant Man", 1);
Insert into file(name_file, type_id_type) value ("Ant Man and The Wasp", 1);

Insert into file(name_file, type_id_type) value ("Dr. Strange: Hechicero supremo", 1);

Insert into file(name_file, type_id_type) value ("The Avengers", 1);
Insert into file(name_file, type_id_type) value ("Avengers: Age of Ultron", 1);
Insert into file(name_file, type_id_type) value ("Avengers: Infinity War", 1);
Insert into file(name_file, type_id_type) value ("Avengers: Endgame", 1);

Insert into file(name_file, type_id_type) value ("Captain Marvel", 1);

Insert into file(name_file, type_id_type) value ("Spiderman HomeComing", 1);
Insert into file(name_file, type_id_type) value ("Spiderman Far From Home", 1);


select * from file;

use MyAnime;

select * from file_season;

update file_season 
set cover_page ='../../../assets/img/Pelicula/AntMan/AntMan1/AntMan1_Portada.png'
where file_id_file = 11;

update file_season 
set release_date ="2015-06-29"
where file_id_file = 11;



select * from file_season;
insert into file_season(file_id_file, season_id_season,name,description,release_date,path,cover_page,price,format,quality,trailer)
values(1,1,"Iron Man","El millonario creador de armas Tony Stark debe luchar a su oscuro pasado después de padecer un terrible accidente con una de sus propias armas. Provisto con una armadura de última generación tecnológica, se convierte en «El hombre de hierro», un héroe que se dedica a combatir el mal en todo el mundo.",
"2008-04-14","Peliculas/Marvel/Iron Man/Iron Man 1",
"../../../assets/img/Pelicula/IronMan/IronMan1/Iron_Man_1_Portada.png",2,"mkv","1080p",
"https://www.youtube.com/embed/8ugaeA-nMTc");


insert into file_season(file_id_file, season_id_season,name,description,release_date,path,cover_page,price,format,quality,trailer)
values(2,1,"Iron Man 2",
"El mundo ya sabe que el multimillonario Tony Stark es Iron Man, el superhéroe enmascarado. A pesar de las presiones del gobierno, la prensa y la opinión pública para que comparta su tecnología con el ejército, Tony es reacio a desvelar los secretos de la armadura de Iron Man, porque teme que esa información caiga en en manos de irresponsables. Con Pepper Potts y James Rhodey Rhodes a su lado, Tony forja alianzas nuevas y se enfrenta a nuevas y poderosas fuerzas.",
"2010-04-26","Peliculas/Marvel/Iron Man/Iron Man 2",
"../../../assets/img/Pelicula/IronMan/IronMan2/Iron_Man_2_Portada.jpg",2,"mkv","1080p",
"https://www.youtube.com/embed/wKtcmiifycU");


select * from fisical_file;

select * from language;

select * from subtitle;


Insert into language(language)  value("Español");

Insert into language(language)  value("Ingles");

Insert into language(language)  value("Japones");

Insert into language(language)  value("Tailandes");


Insert into subtitle(subtitle)  value("Español");

Insert into subtitle(subtitle)  value("Ingles");

Insert into file_season_language(file_season_file_id_file,file_season_season_id_season,language_id_language)
value (1,1,1);

Insert into file_season_language(file_season_file_id_file,file_season_season_id_season,language_id_language)
value (1,1,2);


Insert into file_season_language(file_season_file_id_file,file_season_season_id_season,language_id_language)
value (2,1,1);

Insert into file_season_language(file_season_file_id_file,file_season_season_id_season,language_id_language)
value (2,1,2);

Insert into file_season_language(file_season_file_id_file,file_season_season_id_season,language_id_language)
value (2,1,3);

select * from file_season;



Insert into file_season_subtitle(file_season_file_id_file,file_season_season_id_season,subtitle_id_subtitle)
value (1,1,1);

Insert into file_season_subtitle(file_season_file_id_file,file_season_season_id_season,subtitle_id_subtitle)
value (1,1,2);

select * from category;



select c.name_category from category_file r, category c, file f 
where category_id_category=id_category
and f.id_file=2;



insert into category_file(category_id_category,file_id_serie)
Value(2,1);

insert into category_file(category_id_category,file_id_serie)
Value(8,1);

select * from file_season_language  fsl, language l
where l.id_language = fsl.language_id_language
and fsl.file_season_file_id_file = 2;




select * from file_season_subtitle  fsl, subtitle l
where l.id_subtitle = fsl.subtitle_id_subtitle
and fsl.file_season_file_id_file = 1;

select l.subtitle from file_season_subtitle  fsl, subtitle l
                   where l.id_subtitle = fsl.subtitle_id_subtitle
                   and fsl.file_season_file_id_file = 1;



select size_fisical_file,duration from fisical_file where file_season_file_id_file = 1;


select Round( avg(size_fisical_file),0) as size,Round(avg(duration),0) as duration from fisical_file where file_season_file_id_file = 1;



select Round(avg(duration),0) from fisical_file where file_season_file_id_file = 1;




insert into fisical_file(name_fisical_file,size_fisical_file,duration,file_season_file_id_file,file_season_season_id_season)
value("Iron Man.mkv",900, 126,1,1);

select * from second_name;


select description,second_names from second_name 
where file_season_file_id_file = 1;

select description,second_names from second_name 
                   where file_season_file_id_file =1;


insert into second_name(description, second_names, file_season_file_id_file, file_season_season_id_season)
value("Titulo Original","Iron Man",1,1);

insert into second_name(description, second_names, file_season_file_id_file, file_season_season_id_season)
value("Titulo Latino","El hombre de hierro",1,1);


insert into fisical_file(name_fisical_file,size_fisical_file,duration,file_season_file_id_file,file_season_season_id_season)
value("Iron Man cap 2.mkv",1253, 48,1,1);

insert into file_season(file_id_file, season_id_season,name,description,release_date,path,cover_page)
values(3,1,"Iron Man 3",
"El descarado y brillante empresario Tony Stark/Iron Man se enfrentará a un enemigo cuyo poder no conoce límites. Cuando Stark comprende que su enemigo ha destruido su universo personal, se embarca en una angustiosa búsqueda para encontrar a los responsables. Este viaje pondrá a prueba su entereza una y otra vez. Acorralado, Stark tendrá que sobrevivir por sus propios medios, confiando en su ingenio y su instinto para proteger a las personas que quiere.",
"2013-04-14","Peliculas/Marvel/Iron Man/Iron Man 3",
"../../../assets/img/Pelicula/IronMan/IronMan3/Iron_Man_3_Portada.png");

insert into file_season(file_id_file, season_id_season,name,description,release_date,path,cover_page)
values(4,1,"Capitan America El Primer Vengador",
"Nacido durante la Gran Depresión, Steve Rogers creció como un chico enclenque en una familia pobre. Horrorizado por las noticias que llegaban de Europa sobre los nazis, decidió enrolarse en el ejército; sin embargo, debido a su precaria salud, fue rechazado una y otra vez.
 Enternecido por sus súplicas, el General Chester  le ofrece la oportunidad de tomar parte en un experimento especial. Después de administrarle el Suero Super-Soldado, el cuerpo de Steve se hace perfecto.",
"2011-07-19","Peliculas/Marvel/Capitan America/Capitan America 1",
"../../../assets/img/Pelicula/CapitanAmerica/CapitanAmerica1/CapitanAmerica1_Portada.jpg");


insert into file_season(file_id_file, season_id_season,name,description,release_date,path,cover_page)
values(5,1,"Capitan America 2 y El Soldado del Invierno",
"Steve Rogers el flacuchento que vimos en la Primer Partes y que fue transformado en un fuerte y hábil soldado, trata de adaptarse al mundo moderno. Sus días de descanso finalizan cuando un compañero de S.H.I.E.L.D. se encuentra al borde del peligro. Por tanto Steve nuevamente debe encarar a poderosos villanos para salvar al mundo pero esta vez no lo hará solo, estará acompañado de una mujer sumamente atractiva y sexy llamada Black Widow",
"2014-03-13","Peliculas/Marvel/Capitan America/Capitan America 2",
"../../../assets/img/Pelicula/CapitanAmerica/CapitanAmerica2/CapitanAmerica2_Portada.jpg");

insert into file_season(file_id_file, season_id_season,name,description,release_date,path,cover_page)
values(6,1,"Capitan America Civil War",
"Un nuevo ‘statu quo’ provoca la ruptura de los Vengadores. Debido a los daños colaterales del trabajo de este grupo de superhéroes en anteriores misiones, la presión política busca depurar responsabilidades, y se instauran los Acuerdos de Sokovia. Es entonces cuando el gobierno de los Estados Unidos decide que los héroes necesitan ser supervisados y controlados. A partir de ahora, se exige a los Vengadores que respondan ante las Naciones Unidas.",
"2016-04-12","Peliculas/Marvel/Capitan America/Capitan America 3",
"../../../assets/img/Pelicula/CapitanAmerica/CapitanAmerica3/CapitanAmerica3_Portada.jpg");


insert into file_season(file_id_file, season_id_season,name,description,release_date,path,cover_page)
values(7,1,"Thor",
"Thor es un arrogante y codicioso guerrero cuyos actos imprudentes reavivan una antigua guerra. Por ese motivo, su padre Odín lo castiga desterrándolo a la Tierra para que viva entre los hombres y descubra así el verdadero sentido de la humildad. Cuando el villano más peligroso de su mundo envía a la Tierra a las fuerzas más oscuras de Asgard, Thor se dará cuenta de lo que realmente hace falta para ser un verdadero héroe.",
"2011-04-17","Peliculas/Marvel/Thor/Thor 1",
"../../../assets/img/Pelicula/Thor/Thor1/Thor1_Portada.png");

insert into file_season(file_id_file, season_id_season,name,description,release_date,path,cover_page)
values(8,1,"Thor 2 El Mundo Oscuro",
"Thor se ve obligado a entrar en la aventura más peligroso, para enfrentarse a un enemigo que ni poderosos Guerreros como Odin y Asgard han podido vencer. La amenaza es ni mas ni menos que una antigua raza guiada por el malvado Malekith, que quiere hundir al universo entero en su oscuridad. En su aventura, Thor se volverá a encontrar con Jane Foster, quien se verá obligado a sacrificar todo lo que el mas ama por el bienestar de la humanidad.",
"2013-10-22","Peliculas/Marvel/Thor/Thor 2",
"../../../assets/img/Pelicula/Thor/Thor2/Thor2_Portada.jpg");

insert into file_season(file_id_file, season_id_season,name,description,release_date,path,cover_page)
values(9,1,"Thor: Ragnarok",
"Thor está preso al otro lado del universo sin su poderoso martillo y se enfrenta a una carrera contra el tiempo. Su objetivo es volver a Asgard y parar el Ragnarok porque significaría la destrucción de su planeta natal y el fin de la civilización Asgardiana a manos de una todopoderosa y nueva amenaza, la implacable Hela. Pero, primero deberá sobrevivir a una competición letal de gladiadores que lo enfrentará a su aliado y compañero en los Vengadores, ¡el Increíble Hulk!.",
"2017-10-10","Peliculas/Marvel/Thor/Thor 3",
"../../../assets/img/Pelicula/Thor/Thor3/Thor3_Portada.png");


insert into file_season(file_id_file, season_id_season,name,description,release_date,path,cover_page)
values(10,1,"Black Panther",
"Continuando los hechos sucedidos en Capitán América: Civil War, ante la muerte del rey T’Chaka, su hijo T’Challa deberá asumir el trono de Wakanda, una nación en el corazón africano, aislada y con una tecnología muy avanzada

Pero un viejo enemigo, Ulysses Klaue ha reaparecido pues busca apoderarse del vibranium y con ello regresa la amenaza de desestabilizar a su país, por lo que T’Challa deberá ir en su búsqueda, sin saber que errores del pasado engendraron odio en otro enemigo",
"2018-01-29","Peliculas/Marvel/Thor/Thor 3",
"../../../assets/img/Pelicula/BlackPanther/BlackPanther_Portada.jpeg");


insert into file_season(file_id_file, season_id_season,name,description,release_date,path,cover_page)
values(11,1,"Ant Man",
"Ant-Man: Es una historia que narra la historia de un hombre quien tiene una característica muy diferencial al resto de las personas, tiene el poder de convertirse en un diminuto insecto. El estafador Scott Lang debe sacar a relucir al héroe que lleva dentro y ayudar a su mentor, el doctor Hank Pym a proteger una nueva de amenazas y el famoso secreto que se esconde en el traje de Ant-Man,con un casco que le permite comunicarse con las hormigas.",
"2015-06-29","Peliculas/Marvel/AntMan/AntMan 1",
"../../../assets/img/Pelicula/AntMan/AntMan1/AntMan1_Portada.png");

insert into file_season(file_id_file, season_id_season,name,description,release_date,path,cover_page)
values(12,1,"Ant Man and The Wasp",
"Después de «Capitán América: Guerra Civil», Scott Lang lidia con las consecuencias de sus elecciones como superhéroe y padre. Mientras lucha por mantener un equilibrio entre su vida hogareña y sus responsabilidades como Ant-Man, se enfrenta a Hope van Dyne y al Dr. Hank Pym con una nueva misión urgente. Scott debe volver a ponerse el traje y aprender a luchar junto con La Avispa mientras el equipo trabaja en conjunto para descubrir secretos del pasado.",
"2018-06-25","Peliculas/Marvel/AntMan/AntMan 2",
"../../../assets/img/Pelicula/AntMan/AntMan2/AntMan2_Portada.jpg");

insert into file_season(file_id_file, season_id_season,name,description,release_date,path,cover_page)
values(13,1,"Dr. Strange: El Hechicero Supremo",
"Para el Dr. Stephen Strange su vida estará por cambiar tras un accidente automovilístico luego de dejar malheridas sus manos. Tras intentos fallidos por recuperarlas usando medicina tradicional, se ve forzado a buscar solución ante su problema en un lugar inhóspito. Un grupo aislado en Nepal llamado Kamar-Taj quienes rápidamente descubren la forma de reconstruirlas, vinculándose asimismo en una batalla contra fuerzas oscuras y ocultas empeñadas en destruir nuestra realidad. ",
"2016-10-13","Peliculas/Marvel/DrStrange/Dr Strange 2",
"../../../assets/img/Pelicula/DrStrange/DrStrange1/Dr_Strange_1_Portada.png");

insert into file_season(file_id_file, season_id_season,name,description,release_date,path,cover_page)
values(14,1,"The Avengers",
"Los vengadores (Avengers) nos muestra como un enemigo inesperado surge como una gran amenaza para la seguridad mundial, Nick Fury, director de la Agencia SHIELD, decide reclutar a un equipo para salvar al mundo de un desastre casi seguro.",
"2012-04-27","Peliculas/Marvel/Avengers/Avengers 1",
"../../../assets/img/Pelicula/Avengers/Avengers1/Avengers_1_Portada.jpeg");

insert into file_season(file_id_file, season_id_season,name,description,release_date,path,cover_page)
values(15,1,"The Avengers: Age or Ultron",
"Vengadores Era de Ultrón esta ves cuando Tony Stark decide una ves mas reactivar un programa caído donde su objetivo era mantener la paz, todo empieza a cambiar de destino y los héroes mas poderosos de la tierra, tendrán que afrontar la prueba definitiva cuando el destino del planeta se ponga en juego. Cuando el famoso villano Ultron emerge, le corresponde a los Vengadores y todos sus Super heroes con el fin de detener sus terribles planes.",
"2015-04-13","Peliculas/Marvel/Avengers/Avengers 2",
"../../../assets/img/Pelicula/Avengers/Avengers2/Avengers_2_Portada.png");


insert into file_season(file_id_file, season_id_season,name,description,release_date,path,cover_page)
values(16,1,"Avengers: Infinity War",
"El todopoderoso Thanos ha despertado con la promesa de arrasar con todo a su paso, portando el Guantelete del Infinito, que le confiere un poder incalculable. Los únicos capaces de pararle los pies son los Vengadores y el resto de superhéroes de la galaxia, que deberán estar dispuestos a sacrificarlo todo por un bien mayor. Capitán América e Ironman deberán limar sus diferencias, Black Panther apoyará con sus tropas desde Wakanda, Thor y los Guardianes de la Galaxia e incluso Spider-Man se unirán antes de que los planes de devastación y ruina pongan fin al universo. ¿Serán capaces de frenar el avance del titán del caos?",
"2018-04-23","Peliculas/Marvel/Avengers/Avengers 3",
"../../../assets/img/Pelicula/Avengers/Avengers3/Avengers_3_Portada.png");

insert into file_season(file_id_file, season_id_season,name,description,release_date,path,cover_page)
values(17,1,"Avengers: EndGame",
"Después de los devastadores eventos ocurridos en Vengadores: Infinity War, el universo está en ruinas debido a las acciones de Thanos, el Titán Loco. Tras la derrota, las cosas no pintan bien para los Vengadores. Mientras Iron Man vaga en soledad junto a Nebula en una nave lejos de la Tierra, el grupo encabezado por Capitán América, Viuda Negra, Hulk y Thor deberá tratar de revertir los efectos de la catástrofe provocada por Thanos. Los Vengadores deberán reunirse una vez más para deshacer sus acciones y restaurar el orden en el universo de una vez por todas. Esta vez, contarán también con aliados como Ojo de Halcón y Capitana Marvel, además de Ant-Man, que presumiblemente podría haber estado atrapado en el Reino Cuántico. Juntos, se prepararán para la batalla final, sin importar cuáles sean las consecuencias.",
"2019-04-22","Peliculas/Marvel/Avengers/Avengers 4",
"../../../assets/img/Pelicula/Avengers/Avengers4/Avengers_4_Portada.jpeg");

insert into file_season(file_id_file, season_id_season,name,description,release_date,path,cover_page)
values(18,1,"Captain Marvel",
"La historia sigue a Carol Danvers (Interpretada por Brie Larson) mientras se convierte en uno de los héroes más poderosos del universo, cuando la Tierra se encuentra atrapada en medio de una guerra galáctica entre dos razas alienígenas. Situada en los años 90, ‘Capitana Marvel‘ es una historia nueva de un período de tiempo nunca antes visto en la historia del Universo Cinematográfico de Marvel.",
"2019-02-27","Peliculas/Marvel/Capitana Marvel/Capitana Maverl 1",
"../../../assets/img/Pelicula/CapitanaMarvel/CapitanaMarvel1/CapitanaMarvel1_Portada.jpg");




select * FROM file_season ORDER BY file_id_file DESC LIMIT 16;




SELECT * FROM file_season where release_date BETWEEN '2011-01-01' AND '2011-12-31';

Select * from file_season, file, type 
where file_id_file=id_file
and type_id_type=id_type
and name_type ='Pelicula';



use MyAnime;

select * from season
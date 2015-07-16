
$(document).ready(function(){/* google maps -----------------------------------------------------*/
// google.maps.event.addDomListener(window, 'load', initialize);

// function initialize() {

//   /* position Amsterdam */
//   var latlng = new google.maps.LatLng(0.35,-78.11667);

//   var config = {
//     center: latlng,
//     scrollWheel: false,
//     zoom: 14,
//     // permite ver los diferentes formas de presentación del mapa
//     // mapTypeId:google.maps.MapTypeId.HYBRID
//     // mapTypeId:google.maps.MapTypeId.ROADMAP
//     // mapTypeId:google.maps.MapTypeId.TERRAIN
//     // mapTypeId:google.maps.MapTypeId.SATELLITE
//   };
  
//   var marker = new google.maps.Marker({
//     position: latlng,
//     url: '/',
//     animation: google.maps.Animation.DROP
//   });
  
//   var map = new google.maps.Map(document.getElementById("map-canvas"), config);
//   marker.setMap(map);
// };
/* end google maps -----------------------------------------------------*/


// This example creates circles on the map, representing
// populations in North America.

// First, create an object containing LatLng and population for each city.
// function initialize() {
//   var myLatlng = new google.maps.LatLng(0.35,-78.11667);
//   var mapOptions = {
//     zoom: 14,
//     center: myLatlng,
//     scrollWheel: false,
//   };

//   var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

//   var contentString = '<div id="content">'+
//       '<div id="siteNotice">'+
//       '</div>'+
//       '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
//       '<div id="bodyContent">'+
//       '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
//       'sandstone rock formation in the southern part of the '+
//       'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
//       'south west of the nearest large town, Alice Springs; 450&#160;km '+
//       '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
//       'features of the Uluru - Kata Tjuta National Park. Uluru is '+
//       'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
//       'Aboriginal people of the area. It has many springs, waterholes, '+
//       'rock caves and ancient paintings. Uluru is listed as a World '+
//       'Heritage Site.</p>'+
//       '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
//       'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
//       '(last visited June 22, 2009).</p>'+
//       '</div>'+
//       '</div>';

//   var infowindow = new google.maps.InfoWindow({
//       content: contentString
//   });

//   var marker = new google.maps.Marker({
//       position: myLatlng,
//       map: map,
//       title: 'Uluru (Ayers Rock)'
//   });
//   google.maps.event.addListener(marker, 'click', function() {
//     infowindow.open(map,marker);
//   });
// }
// google.maps.event.addDomListener(window, 'load', initialize);




// procesando nuevo mapa
// If you're adding a number of markers, you may want to drop them on the map
// consecutively rather than all at once. This example shows how to use
// window.setTimeout() to space your markers' animation.

var ibarramap = new google.maps.LatLng( 0.35,-78.11667);

var locations = [
  ['Balneario CHACHIMBIRO', 0.4601709, -78.23738159999999 , 'Chachimbiro está ubicado al noroeste de la ciudad de Ibarra, en el cantón Urcuquí, y es muy conocido por sus aguas termales de origen volcánico con temperaturas que llegan hasta 45 y 55 grados centígrados con poderes medicinales. Está rodeado por el volcán Cotacachi y el cerro Yanahurco, en medio de una abundante y variada vegetación que le permitirá descubrir flora y fauna exótica','https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Imbabura_des_del_sud.JPG/300px-Imbabura_des_del_sud.JPG','https://www.youtube.com/embed/yskiGTYaVNc'],
  ['Balneario NANGULVI', 0.327936, -78.54720399999997 , 'Llegar a las termas comunitarias de Nangulví, en el Valle de Intag y relajarse en alguna de sus 6 piscinas de aguas termales es un placer al alcance de cualquier Quiteño/a e Imbabureño/a que pretenda aliviar el estrés de la gran ciudad. El agua de las termas es de origen volcánico con propiedades medicinales. La infraestructura es de gestión comunitaria a cargo de la Junta Parroquial de García Moreno y forma parte de un complejo turístico que fue construido hace unos años con el auspicio de la Cooperación Internacional Española y que representa hoy en día la piedra angular sobre la que bascula el turismo comunitario en todo el Valle de Intag. ','http://www.reciprocco.org/wp-content/uploads/2013/10/Portada-980x600.jpg','https://www.youtube.com/embed/37-L_NQBlBA'],
  ['Ovelisco Ibarra', 0.3483124, -78.1214316 , 'El Obelisco es un monolito levantado en el centro de la plaza "Alejandro Pasquel Monge" de Ibarra, junto a la estación renovada del ferrocarril Ibarra-Salinas. Su construcción data del año 1949, fecha en la cual el Dr. Luis Cabezas Borja  regía el Gobierno Municipal de Ibarra y gestionó la construcción del mismo.','http://imagenes.viajeros.com/fotos/g/gi/gikycnkz-1267820667-bg.jpg','https://www.youtube.com/embed/o7_Q7lsehnE'],
  ['LAGUNA YAHUARCOCHA', 0.3690867, -78.1022729 , 'Es uno de los principales atractivos turísticos del Ecuador, ubicada a 3 Kms de la ciudad de Ibarra, a una altura de 2190 metros sobre el nivel del mar. Yahuarcocha tiene una importancia histórica debido a los estudios realizados por algunos investigadores, quienes manifiestan que existe una amplia y aún no explorada evidencia arqueológica, por lo que el  Instituto Nacional de Patrimonio Cultural  declaró a Yahuarcocha como la tercera laguna sagrada del país.','http://www.surtrek.org/blog/wp-content/uploads/2014/11/IBARRA-FOTO-2.jpg','https://www.youtube.com/embed/QXrl-v4qOXA'],
  ['Cascada de Peguche', 0.2383333, -78.23861111111111 , 'Ubicada en la comunidad de Peguche, a tan sólo 5 minutos al noroeste de la ciudad de Otavalo. La Cascada de  Peguche  es un hermoso salto de agua de 18 m de altura, formada por las aguas del río del mismo nombre, que nace en el lago San Pablo.  La cascada es uno de los atractivos turísticos más importantes de Otavalo. Debido a su cercanía y fácil acceso, varios turistas y visitantes acuden al sector para conocerla y disfrutar de un paisaje único.','http://commondatastorage.googleapis.com/static.panoramio.com/photos/original/67829732.jpg','https://www.youtube.com/embed/BFDq9JiBG6A'],
  ['Lago San Pablo', 0.2091667, -78.22416670000001 , 'Es un hermoso ojo de agua custodiado por el volcán Imbabura y se encuentra a tan solo 5 minutos de Otavalo. Es el lago más grande de la provincia. Los indígenas salen a pescar temprano por la mañana en sus canoas de totora y también toman un baño y lavan su ropa a orillas del Lago durante el día.','http://blog.espol.edu.ec/mfjimene/files/2009/01/lago-san-pablo-de-imbabura.jpg','https://www.youtube.com/embed/rufYskN0ydY'],
  ['Ciudad Yachay', 0.409222, -78.17574400000001 , 'La Ciudad del conocimiento Yachay, será la primera ciudad planificada del Ecuador; constituyéndose principalmente en una urbe de carácter universitario, investigativo e industrial en la provincia de Imbabura, perteneciente a la Región 1 del Ecuador. Yachay se encuentra ubicada en el cantón San Miguel de Urcuquí, en la cordillera de los Andes del norte del Ecuador.','https://upload.wikimedia.org/wikipedia/commons/d/d6/8_A%C3%91OS_DE_LA_REVOLUCION_CIUDADANA_%2815670406653%29.jpg','https://www.youtube.com/embed/NrJ7jxCrOGM'],
  ['San Antonio de Ibarra', 0.3346355, -78.1735438 , 'San Antonio de Ibarra está ubicado 6 km de la capital provincial es reconocida por sus artesanías y esculturas.  Rodeado por todo el esplendor de la naturaleza, donde sus campos cubren como una alfombra de colores vivos al majestuoso Imbabura, que con sus 4630 metros sobre el nivel del mar se impone ante el firmamento y acoge en sus faldas a este pueblo lleno de espacios y lugares que provocan recorrerlos y contemplarlos por siempre.','http://www.elnorte.ec/imagenes/2012/ibarra/09/27/san_antonio.jpg','https://www.youtube.com/embed/6ipH8zECPjE'],
  ['Reserva Ecologica Cotacachi-Cayapas', 0.552513, -78.61149999999998 , 'La Reserva Ecológica Cotacachi-Cayapas se localiza al este de la provincia de Esmeraldas (entre los cantones San Lorenzo, Eloy Alfaro y Río Verde) y al oeste de Imbabura (entre los cantones Cotacachi, Urcuquí e Ibarra). La Reserva abarca 243.638 ha y a sus alrededores hay bosques protectores menores y reservas privadas, como el Bosque Protector Pajas de Oro de 281 ha. Sin duda, es el área protegida y la zona de conservación más importante en los Andes occidentales del Ecuador, no solamente por su tamaño, sino también por el amplio rango altitudinal que cubre. Además incluye a varios grupos étnicos afroesmeraldeños y Chachis dentro de sus límites.','http://1.bp.blogspot.com/_7_IqjEn9AJI/TP_rqo63pNI/AAAAAAAAC-8/a1rTCFXqWFA/s640/Reserva+Ecol%25C3%25B3gica+Cotacachi-Cayapas.gif','https://www.youtube.com/embed/Mi-TnVdcqR0'],
  ['Casa Hacienda Zuleta', 0.205855, -78.070898 , 'Construida a fines del siglo XVI, la Hacienda Zuleta se ubica en plena cordillera de los Andes Ecuatorianos, a 9600 pies (2800 metros) sobre el nivel del mar, únicamente a dos horas de Quito, capital del país. Es una hacienda de 4000 acres (2000 hectáreas), que pertenece a la familia del ex presidente Galo Plaza Lasso desde hace más de cien años. Fue nombrada uno de los “diez mejores hallazgos” por la revista Outside.','http://www.ecuadorboutiquehotels.com/uploads/3a/73/3a730ec9bc199e54b95ceefca708670e/hacienda-zuleta-11.jpg','https://www.youtube.com/embed/jjbo4kZyIIk'],
  ['Loma de Guayabillas', 0.3399734, -78.1075358 , 'La Loma de Guayabillas es un bosque protector de 54, 1 hectáreas, que forma parte de la identidad natural y cultural de la ciudad de Ibarra. Es considerado como uno de los más grandes parques naturales del Ecuador. Ubicado en la cuenca la cuenca del Río Tahuando y el Valle de la Campiña, ofreciendo a sus visitantes la posibilidad de disfrutar de una vista panorámica de la ciudad hacia los cuatro puntos cardinales y conocer el Centro de Manejo de Vida Silvestre y los arbustos de Guayabillas que son plantas de frutos exquisitos únicos en la zona.','http://www.elnorte.ec/imagenes/2012/sucesos/03/11/p38f1.jpg','https://www.youtube.com/embed/wThfHY2qAs8'],
  ['', ,  , '','http://blog.espol.edu.ec/mfjimene/files/2009/01/lago-san-pablo-de-imbabura.jpg','https://www.youtube.com/embed/rufYskN0ydY'],
  ['', ,  , '','http://blog.espol.edu.ec/mfjimene/files/2009/01/lago-san-pablo-de-imbabura.jpg','https://www.youtube.com/embed/rufYskN0ydY'],
  ['', ,  , '','http://blog.espol.edu.ec/mfjimene/files/2009/01/lago-san-pablo-de-imbabura.jpg','https://www.youtube.com/embed/rufYskN0ydY'],
  ['', ,  , '','http://blog.espol.edu.ec/mfjimene/files/2009/01/lago-san-pablo-de-imbabura.jpg','https://www.youtube.com/embed/rufYskN0ydY'],
  ['Laguna de Cuicocha', 0.3003265, -78.36431189999996 , 'Está dentro de la Reserva Ecológica Cotacachi-Cayapas y es el sitio más visitado de la misma por la buena accesibilidad que tiene. Esta laguna es conocida como laguna de los Dioses o Tsui - Cocha y es de origen cratérico. La particularidad de esta laguna es que en su centro están ubicados dos islotes que llevan los nombres de Teodoro Wolf y José Maria Yerovi, separados por el "Canal del ensueño". Estas islas son producto de pequeñas erupciones que siguieron a la erupción principal.','http://www.fiestasdecotacachi.com/images/jora2012/cuicocha_1.jpg','https://www.youtube.com/embed/tWAu87q4Hdg']
  
  ];

  function initialize() {

    var myOptions = {
      zoom: 12,
      center:ibarramap
     

    };
    var map = new google.maps.Map(document.getElementById('map-canvas'),
        myOptions);

    setMarkers(map,locations)

  }

var image = {
    url: 'images/icono.fw.png',
    // This marker is 20 pixels wide by 32 pixels tall.
    size: new google.maps.Size(20, 32),
    // The origin for this image is 0,0.
    origin: new google.maps.Point(0,0),
    // The anchor for this image is the base of the flagpole at 0,32.
    anchor: new google.maps.Point(0, 32)
  };

  function setMarkers(map,locations){

      var marker, i

for (i = 0; i < locations.length; i++)
 {  

 var loan = locations[i][0]
 var lat = locations[i][1]
 var long = locations[i][2]
 var add =  locations[i][3]
 var imgurl =  locations[i][4]
 var videourl =  locations[i][5]


 latlngset = new google.maps.LatLng(lat, long);

  var marker = new google.maps.Marker({  
          map: map, title: loan , icon: image, position: latlngset  
        });
        map.setCenter(marker.getPosition())

        var content = ''+
                        '<div class="container dc_contenedor">'+
                          '<div  class = "row" >'+
                            '<div class="col-xs-12 col-sm-6 col-md-8">'+
                              '<h3>'+loan+'</h3>'+
                              '<p>'+add+'</p>'+
                            '</div>'+
                            '<div class="col-xs-6 col-md-4">'+
                              '<h3>Fotos</h3>'+
                              '<img src="'+imgurl+'" width="100%">'+
                            '</div>'+
                          '</div>'+
                          '<div  class = "row" >'+
                            '<div class="col-xs-12 col-sm-6 col-md-8">'+
                              '<h3>Videos</h3>'+
                              '<iframe width="100%" height="100%" src="'+videourl+'" frameborder="0" allowfullscreen></iframe>'+

                            '</div>'+
                            '<div class="col-xs-6 col-md-4">'+
                              '<address>'+
                                '<img src="images/gpi.jpg" width="100%" height="100%"/><br>'+
                              '</address>'+
                              ''+
                              '<address>'+
                                '<strong>Comentarios</strong><br>'+
                                '<textarea id="message" name="message" placeholder="Escriba sus Comentarios. Aqui" required="required"></textarea> '+
                                '<input type="submit" value="Enviar!" id="submit" />'+
                              '</address>'+
                            '</div>'+
                          '</div>'+
                        '</div>'+
                      '';

        var contents = ""+
                        "Info: " + loan +  '</h3>' + "Dir.: " + add     

  var infowindow = new google.maps.InfoWindow()

google.maps.event.addListener(marker,'click', (function(marker,content,infowindow){ 
        return function() {
           infowindow.setContent(content);
           infowindow.open(map,marker);
        };
    })(marker,content,infowindow)); 

  }
  }
  google.maps.event.addDomListener(window, 'load', initialize);
});




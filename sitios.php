<!DOCTYPE html>
<html lang="es">
	<head>
		<meta http-equiv="content-type" content="text/html; charset=UTF-8">
		<meta charset="utf-8">
		<title>Proyecto Turistico</title>
		<meta name="generator" content="Bootply" />
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
		<link href="css/bootstrap.min.css" rel="stylesheet">
		<!--[if lt IE 9]>
			<script src="//html5shim.googlecode.com/svn/trunk/html5.js"></script>
		<![endif]-->
		<link href="css/styles.css" rel="stylesheet">
	</head>
	<body class="center">

        <nav class="navbar navbar-inverse no-padding" role="navigation">
          <!-- Brand and toggle get grouped for better mobile display -->
          <div class="navbar-header">
             <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
             <span class="sr-only">navegación</span>
             <span class="icon-bar"></span>
             <span class="icon-bar"></span>
             <span class="icon-bar"></span>
             </button>
             <a class="navbar-brand" href="index.hhtml">Proyecto Turistico</a>
          </div>
          <!-- Collect the nav links, forms, and other content for toggling -->
          <div class="collapse navbar-collapse">
             <ul class="nav navbar-nav">
                <li class="active"><a href="index.html">Home</a></li>
                <li><a href="desarrollador">Desarrollado por.</a></li>
                <li class="dropdown">
                   <a href="" class="dropdown-toggle" data-toggle="dropdown">Plus <b class="caret"></b></a>
                   <ul class="dropdown-menu">
                      <li><a href="register.php">Registro</a></li>
                      <li><a href="">Usuario</a></li>
                      <li><a href="">Procesos</a></li>
                      <li class="divider"></li>
                      <li><a href="">Cordenadas</a></li>
                      <li class="divider"></li>
                      <li><a href="">Otras Ciudades</a></li>
                   </ul>
                </li>
             </ul>
             <form class="navbar-form navbar-left" role="search">
                <div class="form-group">
                   <input type="text" class="form-control" placeholder="Search">
                </div>
                <button type="submit" class="btn btn-default">Submit</button>
             </form>
             <ul class="nav navbar-nav navbar-right">
                <li><a href="sitios.php">Registrar Sitios</a></li>
                <li class="dropdown">
                   <a href="" class="dropdown-toggle" data-toggle="dropdown">Acceder <b class="caret"></b></a>
                   <ul class="dropdown-menu" style="padding: 15px;min-width: 250px;">
                      <li>
                         <div class="row">
                            <div class="col-md-12">
                               <form class="form" role="form" method="post" action="login" accept-charset="UTF-8" id="login-nav">
                                  <div class="form-group">
                                     <label class="sr-only" for="exampleInputEmail2">Dirección Email</label>
                                     <input type="email" class="form-control" id="exampleInputEmail2" placeholder="Usuario" required>
                                  </div>
                                  <div class="form-group">
                                     <label class="sr-only" for="exampleInputPassword2">Password</label>
                                     <input type="password" class="form-control" id="exampleInputPassword2" placeholder="Password" required>
                                  </div>
                                  <div class="checkbox">
                                     <label>
                                     <input type="checkbox"> hacer acuerdo.
                                     </label>
                                  </div>
                                  <div class="form-group">
                                     <button type="submit" class="btn btn-success btn-block">Acceder</button>
                                  </div>
                               </form>
                            </div>
                         </div>
                      </li>
                      <li class="divider"></li>
                      <li>
                         <input class="btn btn-primary btn-block" type="button" id="sign-in-google" value="Acceder con Google">
                         <input class="btn btn-primary btn-block" type="button" id="sign-in-twitter" value="Acceder con Twitter">
                      </li>
                   </ul>
                </li>
             </ul>
          </div>
          <!-- /.navbar-collapse -->
        </nav>
      <h1 class="page-header center">Información lugares turisticos Mapa</h1>
      <div id="container">
        <div class="row">
          <div class="col-xs-6 col-md-4">
            <form class="form-horizontal">
              <div class="form-group">
                <label for="inputEmail3" class="col-sm-2 control-label">Email</label>
                <div class="col-sm-10">
                  <input type="email" class="form-control" id="inputEmail3" placeholder="Email">
                </div>
              </div>
              <div class="form-group">
                <label for="inputPassword3" class="col-sm-2 control-label">Password</label>
                <div class="col-sm-10">
                  <input type="password" class="form-control" id="inputPassword3" placeholder="Password">
                </div>
              </div>
              <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10">
                  <div class="checkbox">
                    <label>
                      <input type="checkbox"> Remember me
                    </label>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10">
                  <button type="submit" class="btn btn-default">Sign in</button>
                </div>
              </div>
            </form>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-8">.col-xs-12 .col-sm-6 .col-md-8</div>
          
        </div>
      </div>
  <!-- begin template -->

  <!-- end template -->

	<!-- script references -->
		<script src="//ajax.googleapis.com/ajax/libs/jquery/2.0.2/jquery.min.js"></script>
		<script src="js/bootstrap.min.js"></script>
		<script src="https://maps.googleapis.com/maps/api/js?v=3.exp&signed_in=true"></script>
		<script src="js/scripts.js"></script>
	</body>

</html>
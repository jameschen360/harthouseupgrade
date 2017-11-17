<? include('connect.php');?>

<?
//PRARMETERS/////////////////////
$default = "/";
$index = "/";
$about = "/aboutus";
$news = "/news";
$events = "/calendar";
$menu = "/menu";
$gallery = "/gallery";
$bookings = "/reservation";
$contact = "/contactus";
$site = "/sitemap";
$gift = "/giftvoucher";
$p404 = "/pagenotfound";
$p403 = "/accessdenied";
$payment = "/payment-status";
$guest = "/bnbguest";
$cwevents = "/cwevents";


/////////////////////////////////
$url = $_SERVER['REQUEST_URI']; //request url variable
//echo $url; //testing purposes
if (strpos($url,'payment-status') !== false) {
    $case_payment = "true";
} else {
	$case_payment = "false";
}
$sql = mysql_query("SELECT * FROM home");
	   $value = mysql_fetch_array($sql);
			$logo = $value['logo'];
			$logosmall = $value['logosmall'];

?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Our goal and passion is to provide a wine bar similar to one that we ourselves would like to patronize in the heart of Camrose's Sparling District. The Hart House experience will allow you to enjoy the warmth and intimacy in sharing food and our love of wine, craft beers and premium liquors, perhaps even a cocktail or two. This is a neighborhood retreat where people can gather for a drink and something small yet delicious to eat. Our service is real, engaged and unscripted and prepared for you to step into our turn-of-the-century home. ">
	<meta name="robots" content="index,follow"> 
    <meta name="keywords" content="hart,house,wine,and,tapa,harthousewineandtapa,harhouse,beef,wine,steak,restaurant,camrose,camrosewine,camrosebeef,camrosefood,selection,charcuterie,preserves,desserts,entree,best restaurant,camrose restaurant,reservation,overall,best overall,gift voucher,hart house wine and tapa,camrose wine,camrose beef,camrose food">
	<meta name="author" content="Hart House Wine and Tapa">
	<link rel="icon" href="admin/images/favicon.ico">
    <title>
	<? 
		if ($url==$default || $url == $index) {
			echo "HHWT | Home";
		}elseif ($url==$about) {
			echo "HHWT | About Us";
		}elseif ($url==$news) {
			echo "HHWT | News";	
		}elseif ($url==$events) {
			echo "HHWT | Calendar";	
		}elseif ($url==$menu) {
			echo "HHWT | Our Menu";	
		}elseif ($url==$gallery) {
			echo "HHWT | Gallery";
		}elseif ($url==$bookings) {
			echo "HHWT | Group Reservation";
		}elseif ($url==$contact) {
			echo "HHWT | Contact Us";
		}elseif ($url==$site)  {
			echo "HHWT | Site Map";
		}elseif ($url==$gift)  {
			echo "HHWT | Gift Vouchers";
		}elseif ($url==$p403)  {
			echo "HHWT | 403";
		}elseif ($case_payment == "true") {
			echo "HHWT | Gift Voucher Payment";
		}elseif ($url == $guest) {
			echo "HHWT | Bnb Guest Accomodations";
		}elseif ($url == $cwevents) {
			echo "HHWT | C/W Events";
		}else {
			echo "HHWT | 404";
		}
	?>
	</title>
	<link rel="stylesheet" href="uikit/css/datepicker.css">
	
    <!-- Bootstrap core CSS
    ================================================== -->
    <link href="uikit/bootstrap/css/bootstrap.min.css" rel="stylesheet">
	<!-- Bootstrap Form Helpers -->
    <link href="uikit/css/bootstrap-form-helpers.css" rel="stylesheet" media="screen">
	<link rel="stylesheet" href="//blueimp.github.io/Gallery/css/blueimp-gallery.min.css">
	<link href="uikit/css/bootstrap-timepicker.css" rel="stylesheet">
	<link rel="stylesheet" href="css/bootstrap-image-gallery.min.css">
    <!-- Custom styles for this template
    ================================================== -->
    <link href="uikit/css/uikit.css" rel="stylesheet">

    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
    <script src="uikit/js/html5shiv.js"></script>
    <script src="uikit/js/respond.min.js"></script>
    <![endif]-->
  </head>

  <body class="preload tile-1-bg">
    <!-- Preloader 
    ============================================ -->
    <div class="page-preloader">
      <div class="vcenter"> <div class="vcenter-this"><img class="anim" src="images/loader.gif" alt="loading..." /></div></div>
    </div>
    <!-- /Preloader 
    ============================================ --> 
    
    <!-- Page Wrapper
    ++++++++++++++++++++++++++++++++++++++++++++ -->
    <div class="page-wrapper boxed-wrapper shadow">
	<div class="sticky-container">
		<ul class="sticky">
			<li>
				<a href="bnbguest" style="text-decoration:none; color:white;"><img width="32" height="32" title="" alt="" src="images/side.png" />
				<p style="font-size:16px">Guest Bnb</p></a>
			</li>
			<li>
				<a href="cwevents" style="text-decoration:none; color:white;"><img width="32" height="32" title="" alt="" src="images/side2.png" />
				<p style="font-size:16px">C/W Events</p></a>
			</li>

		</ul>
	</div>

      <!-- Header Block
      ============================================== -->
      <header class="header-block line-top">
      
        <!-- Main Header
        ............................................ -->
        <div class="main-header container">
        
          <!-- Header Cols -->
          <div class="header-cols"> 
          
            <!-- Brand Col -->
            <div class="brand-col hidden-xs">
            
              <!-- vcenter -->
              <div class="vcenter">
                <!-- v-centered -->               
                <div class="vcenter-this">
                  <a href="/">
                    <img alt="HHWT" src="<?echo "../admin/$logo";?>">
                  </a>
                </div>
                <!-- v-centered -->
              </div>
              <!-- vcenter -->

            </div>
            <!-- /Brand Col -->
            
            <!-- Right Col -->
            <div class="right-col">
            
              <!-- vcenter -->
              <div class="vcenter">
                
                <!-- v-centered -->               
                <div class="vcenter-this">
					
                </div>
                <!-- v-centered -->
                
              </div>
              <!-- vcenter -->
            
            </div>
            <!-- /Right Col -->
            
            <!-- Left Col -->
            <div class="left-col">
            
              <!-- vcenter -->
              <div class="vcenter">
              
                
              </div>
              <!-- /vcenter -->
              
            </div>
            <!-- /Left Col -->
            

          </div>
          <!-- Header Cols -->
        
        </div>
        <!-- /Main Header
        .............................................. -->
        
        <!-- Nav Bottom
        .............................................. -->
        <nav class="nav-bottom hnav hnav-ruled white-bg boxed-section custom_round_nav">
          <!-- Container -->
          <div class="container">
          
            <!-- Header-->
            <div class="navbar-header">
              <button class="navbar-toggle no-border" type="button" data-toggle="collapse" data-target="#nav-collapse2">
                <span class="sr-only">Toggle navigation</span>
                <i class="fa fa-navicon"></i>
              </button>
              <a class="navbar-brand visible-xs" href="index.php"><img alt="HHWT" src="admin/<?echo $logosmall;?>"></a>
            </div>
            <!-- /Header-->
          
            <!-- Collapse -->
            <div class="collapse navbar-collapse navbar-absolute" id="nav-collapse2">
              <!-- Navbar Center -->
              <ul class="nav navbar-nav navbar-center line-top">
			  
			  <? if($url == $index || $url == $default){
					echo '<li class="active"><a href="/"><font class="italiancustom" size="5">Home</font></a></li>';
				} else {
					echo '<li><a href="/"><font class="italiancustom" size="5">Home</font></a></li>';
				}
			  ?>

			  <? if($url == $about){
					echo '<li class="active"><a href="aboutus"><font class="italiancustom" size="5">About Us</font></a></li>';
				} else {
					echo '<li><a href="aboutus"><font class="italiancustom" size="5">About Us</font></a></li>';
				}
			  ?>
				
			  <? if($url == $menu){
					echo '<li class="active"><a href="menu"><font class="italiancustom" size="5">Menu</font></a></li>';
				} else {
					echo '<li><a href="menu"><font class="italiancustom" size="5">Menu</font></a></li>';
				}
			  ?>
			  
			  <? if($url == $gallery){
					echo '<li class="active"><a href="gallery"><font class="italiancustom" size="5">Gallery</font></a></li>';
				} else {
					echo '<li><a href="gallery"><font class="italiancustom" size="5">Gallery</font></a></li>';
				}
			  ?>
			  <li class="dropdown">
                  <a href="#" class="dropdown-toggle " data-toggle="dropdown"><font class="italiancustom" size="5">Events/News</font><i class="fa fa-angle-down toggler"></i></a>
                  <ul class="dropdown-menu">
                     <? if($url == $news){
							echo '<li><a href="news"><font class="italiancustom" size="5">News</font></a></li>';
						} else {
							echo '<li><a href="news"><font class="italiancustom" size="5">News</font></a></li>';
						}
					 ?>
					 
					  <? if($url == $events){
							echo '<li><a href="calendar"><font class="italiancustom" size="5">Calendar</font></a></li>';
						} else {
							echo '<li><a href="calendar"><font class="italiancustom" size="5">Calendar</font></a></li>';
						}
					  ?>
					  
					  <? if($url == $cwevents){
							echo '<li><a href="cwevents"><font class="italiancustom" size="5">Corporate and Weddings</font></a></li>';
						} else {
							echo '<li><a href="cwevents"><font class="italiancustom" size="5">Corporate and Weddings</font></a></li>';
						}
					  ?>					 
                  </ul>
               </li>
			 
			  
			 
				
			  <? if($url == $bookings){
					echo '<li class="active"><a href="reservation"><font class="italiancustom" size="5">Group Reservation</font></a></li>';
				} else {
					echo '<li><a href="reservation"><font class="italiancustom" size="5">Group Reservation</font></a></li>';
				}
			  ?>
			  
			  <? if($url == $gift){
					echo '<li class="active"><a href="giftvoucher"><font class="italiancustom" size="5">Gift Voucher</font></a></li>';
				} else {
					echo '<li><a href="giftvoucher"><font class="italiancustom" size="5">Gift Voucher</font></a></li>';
				}
			  ?>			  

			  <? if($url == $contact){
					echo '<li class="active"><a href="contactus"><font class="italiancustom" size="5">Contact Us</font></a></li>';
				} else {
					echo '<li><a href="contactus"><font class="italiancustom" size="5">Contact Us</font></a></li>';
				}
			  ?>
				
              </ul>
              <!-- /Navbar Center -->
              
            </div>
            <!-- /Collapse -->
            
            <!-- Dont Collapse -->
            <div class="navbar-dont-collapse">

              <!-- Navbar btn-group -->
              <div class="navbar-btn-group btn-group navbar-right no-margin-r-xs">
              
               

              </div>
              <!-- /Navbar btn-group -->
              
              
            </div>
            <!-- /Dont Collapse -->

          </div>
          <!-- /Container -->
          
        </nav>
        <!-- /Nav Bottom
        .............................................. -->
        
      </header>
      <!-- /Header Block
      ============================================== -->



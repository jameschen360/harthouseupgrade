				<?
					   $sql = mysql_query("SELECT * FROM home");
					   $value = mysql_fetch_array($sql);
					   $hours = $value['hours'];
					   $facebook = $value['facebook'];
					   $instagram = $value['insta'];
					   $twitter = $value['twitter'];
					   $logobottom = $value['logobottom'];
				?>
<script src="uikit/js/jquery-latest.min.js"></script>
<style>
iframe.twitter-timeline {
    height: 50px !important;
}
</style>
      <!-- Footer
      =================================================== -->
      <footer class="footer-block">
      
        <!-- Container -->
        <div class="container cont-top clearfix">
        
          <!-- Row -->
          <div class="row">
          
            <!-- Brand -->
            <div class="col-md-3 brand-col brand-center">
              <div class="vcenter">
                <a class="vcenter-this" href="#">
                  <img src="admin/<?echo $logobottom;?>" alt="">
                </a>
              </div>
            </div>
            <!-- /Brand -->
            
            <!-- Links -->
            <div class="col-md-9 links-col" style="text-align:center;">
            
              <!-- Row -->
              <div class="row-fluid" >
              

                <center>
<!-- DATABASE CONNECT --><!-- DATABASE CONNECT --><!-- DATABASE CONNECT --><!-- DATABASE CONNECT --><!-- DATABASE CONNECT --><!-- DATABASE CONNECT --><!-- DATABASE CONNECT --><!-- DATABASE CONNECT -->
<!-- DATABASE CONNECT --><!-- DATABASE CONNECT --><!-- DATABASE CONNECT --><!-- DATABASE CONNECT --><!-- DATABASE CONNECT --><!-- DATABASE CONNECT --><!-- DATABASE CONNECT --><!-- DATABASE CONNECT --><!-- DATABASE CONNECT -->
<!-- DATABASE CONNECT --><!-- DATABASE CONNECT --><!-- DATABASE CONNECT --><!-- DATABASE CONNECT --><!-- DATABASE CONNECT --><!-- DATABASE CONNECT -->
                <!-- Col -->

                <div class="col-lg-6" style="padding-bottom:20px;">
				<h5><b><font class="flam-font">We are Social!</font></b></h5>

				<a class="twitter-timeline"  data-dnt="true" href="https://twitter.com/HartHouseAB" data-widget-id="650404791487623168" data-chrome="nofooter noborders" height="150px">Tweets by @HartHouseAB</a>

				<ul class="hlinks">
					  <li><a href="<?echo $facebook;?>"><i class="icon fa fa-facebook fa-2x" style="padding:5px;"></i></a></li>
					  <li><a href="<?echo $instagram;?>"><i class="icon fa fa-instagram fa-2x" style="padding:5px;"></i></a></li>
					  <li><a href="<?echo $twitter;?>"><i class="icon fa fa-twitter fa-2x" style="padding:5px;"></i></a></li>  
				</ul>
				</div>
                <!-- /Col -->
				
                <!-- Col -->
                <div class="col-lg-6 newsletter">
                <h5><b><font class="flam-font">Hours of Operation</font></b></h5>
				<?echo $hours;?>
                </div>
                <!-- /Col -->
                </center>
				
				<!-- DATABASE CONNECT --><!-- DATABASE CONNECT --><!-- DATABASE CONNECT --><!-- DATABASE CONNECT --><!-- DATABASE CONNECT --><!-- DATABASE CONNECT --><!-- DATABASE CONNECT --><!-- DATABASE CONNECT -->
				<!-- DATABASE CONNECT --><!-- DATABASE CONNECT --><!-- DATABASE CONNECT --><!-- DATABASE CONNECT --><!-- DATABASE CONNECT --><!-- DATABASE CONNECT --><!-- DATABASE CONNECT --><!-- DATABASE CONNECT --><!-- DATABASE CONNECT --><!-- DATABASE CONNECT --><!-- DATABASE CONNECT --><!-- DATABASE CONNECT --><!-- DATABASE CONNECT --><!-- DATABASE CONNECT --><!-- DATABASE CONNECT --><!-- DATABASE CONNECT --><!-- DATABASE CONNECT --><!-- DATABASE CONNECT --><!-- DATABASE CONNECT -->
             </div>
             <!-- /Row -->
             
            </div>
            <!-- /Links -->
            
          </div>
          <!-- /Row -->
          
        </div>
        <!-- /Container -->
        
        <!-- Bottom -->
        <div class="footer-bottom bcolor-bg invert-colors">
        
          <!-- Container -->
          <div class="container">
          
            <span class="copy-text pull-left">© 2015 hhwt.</span>
			
            <!-- hlinks -->
            <ul class="hlinks pull-right">
                      <li><a href="sitemap">Site Map</a></li>
            </ul>
            <!-- /hlinks -->
            
          </div>
          <!-- /Container -->
          
        </div>
        <!-- /Bottom -->
        
      </footer>
      <!-- /Footer
      =================================================== -->
	
		<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>

<!-- MODALS :D -->	
		
	   
	   <!-- Twitter Modal -->
			<div class="modal fade" id="twitter" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
			  <div class="modal-dialog" role="document">
				<div class="modal-content">
				  
				  <div class="modal-body">
				  <center>
					
					
				  </center>
				  </div>
				  <div class="modal-footer">
					<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
				  </div>
							  
				</div>
			  </div>
			</div>

	   <!-- /Twitter Modal -->
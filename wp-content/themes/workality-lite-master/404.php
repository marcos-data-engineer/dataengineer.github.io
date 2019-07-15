<?php get_header(); ?>
	<br class="clear" />
    <div class="sixteen columns">
        <div class="noresults p404">
        
            <h1><?php _e( 'OOPS...', 'dronetv' ); ?></h1>
        
                <p><?php _e( 'Sorry... but the page you requested could not be found. <br />Perhaps searching will help.', 'dronetv' ); ?></p>
                
                <div id="not-found-form">
                    <?php get_search_form(); ?>
                </div>
        </div>
     
     <br class="clear" />
     
                <div class="row searchpage p404" style="display:none"> 
                		<h1 class="border-color">
							<?php _e( 'Recent blog posts', 'dronetv' ); ?>
                        </h1>
                          
					<?php  	
                         
                    $args = array(
                        'post_type' => 'post',
                        'cat'=>$cat,
                        'post_status' => array('publish',
                        'posts_per_page'=>1
                        )
                    );
						query_posts( $args );
						
						// GET ITEMS
						get_template_part( 'loop', 'item' ); 
                   ?>
               </div>
    </div>

<?php get_footer(); ?>
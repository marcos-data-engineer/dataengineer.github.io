<?php
/*
Template Name: Archive
*/
?>
<?php get_header(); ?>
	
	<?php get_page_headers(); ?>
 	
    <br class="clear" />
        <div class="defaultpage">
            <div class="sixteen columns margintoheader">
                <?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>
                        <?php 
							$maincontent = apply_filters('the_content', get_the_content());
							if($maincontent) {
								echo $maincontent;
								echo '<hr class="border-color">';
							}
						?>
                <?php endwhile; ?>
            </div>
            
            <div class="one-third column">
                <h4><?php _e('Recent Posts','dronetv')?></h4>
                <?php
                $args = array(
                    'post_type' => 'post',
                    'cat'=>$cat,
                    'post_status' => array('publish'),
                    'posts_per_page'=>25
                );
                query_posts( $args );
                ?>
                    <ul class="widget_kpg_cpl archivetemp">
                    <?php  while ( have_posts() ) : the_post(); ?>
                    <li class="border-color">
                    <a href="<?php echo the_permalink();?>">
                    <?php echo the_title();?>
                    </a>
                    </li>
                    <?php endwhile; ?>
                    </ul>
           
            </div>
            
            <div class="one-third column">
                <h4><?php _e('Archive by Month','dronetv')?></h4>
                <ul class="widget_archive archivetemp">
                    <?php wp_get_archives('type=monthly'); ?>
                </ul>
            </div>
            
            <div class="one-third column">
                <h4><?php _e('Archive by Category','dronetv')?></h4>
                <ul class="widget_categories archivetemp">
                    <?php 
                        // GET CATEGORIES
                        $cats = get_categories(); 
                        $count_cats = count( $cats ); 
                        if ( $count_cats > 0 ) {
                            
                       foreach ($cats as $catd) { 
                    ?>	
                    <li class="border-color">
                        <a href="<?php echo get_category_link( $catd->cat_ID ); ?>" title="<?php echo $term->name; ?>"><?php echo $catd->name; ?></a>
                    </li>
                    <?php } ?>
                    <?php	} ?>
                </ul>
            </div>
		</div>
<?php get_footer(); ?>

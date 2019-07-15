<?php
/*
Template Name: Full Width
*/
?>
<?php get_header(); ?>
    
    	<?php get_page_headers(); ?>
    	<br class="clear" />
		<div class="defaultpage">
            <div class="row fitvids">
                <div class="sixteen columns">
                <?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>
                        <?php the_content(); ?>
                <?php endwhile; ?>
                </div>
            </div>
        </div>
<?php get_footer(); ?>
	
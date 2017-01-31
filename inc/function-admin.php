<?php
/*
ADMIN PAGE
*/

function army_add_admin_page() {
	add_menu_page('Army page options','Army','manage_options','army-page', 'army_theme_create_page', get_template_directory_uri().'/img/sunset-icon.png',110);
}

add_action('admin_menu','army_add_admin_page');

function army_theme_create_page() {
	echo '<h1>Army Theme options</h1>';
}
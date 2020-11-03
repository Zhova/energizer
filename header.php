<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package energizer
 */
?>
<!DOCTYPE html >
<html>
  <head>
    <title>Energizer</title>

    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css"/>
    <link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&amp;display=swap" rel="stylesheet"/>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
    
		<?php wp_head(); ?>
  </head>
  <body>
  <div id="preloader">
    <img src="<?php echo get_template_directory_uri(); ?>/img/preloader2.svg" alt="">
  </div>
  <header class="header wrap-block animate__fadeInDown animate__animated">
    <div class="header-inner container">
      <div class="logo-burger">
        <div class="logo-block"><a class="logo" href="/"><img class="logo__img" src="<?php echo get_template_directory_uri(); ?>/img/logo1.svg" alt=""
              role="presentation" /></a>
        </div>
        <div class="burger-wrap">
          <div class="burger">
            <div class="burger__line">
            </div>
            <div class="burger__line">
            </div>
            <div class="burger__line">
            </div>
          </div>
        </div>
      </div>
      <nav class="nav-menu">
        <ul class="nav-list">
          <li class="nav-list__item"> <a href="#presentation-screen">How it Works</a>
          </li>
          <li class="nav-list__item"> <a href="#capacity">Capacity</a>
          </li>
          <li class="nav-list__item"> <a href="#specifications">Specifications</a>
          </li>
          <li class="nav-list__item"> <a href="#footer">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>

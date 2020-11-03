<?php
/*
    Template Name: Home page
*/
?>

<?php get_header(); ?>


    <div class="main section wrap-block">
    <div class="bg-vid">
        <video id="main-bg-vid" width='100%' height="auto" preload="auto" muted="muted" >
          <source src="
          <?php if(wp_is_mobile() == false)
          {?>
          <?php echo get_template_directory_uri(); ?>/img/first-bg-vid.mp4
          <?php }?>
          " type="video/mp4"/>
        </video>
      </div>
      <div class="main-content container">
      <!-- <div class="main-block-bg">
      </div> -->
        <p class="main-content__text title title_big animate__fadeInUp animate__animated"><?php echo get_post_meta( get_the_ID() , 'energizer_main_slide_title', true ); ?></p>
      </div>
    </div>

    <div class="second-screen section wrap-block">
      <div class="second-content container">
        <div class="second-content-wrap">
          <div class="second-slider animate__fadeIn animate__animated wow">
            <?php
            function cmb2_output_file_list( $file_list_meta_key) {
            $files = get_post_meta( get_the_ID(), $file_list_meta_key, 1 );
                foreach ( (array) $files as $attachment_id => $attachment_url ) {?>
                  <div class="second-slider__item">
                    <img src="<?php echo wp_get_attachment_image_url( $attachment_id, 'resorts_tumb_sm' ); ?>"/>
                  </div>
              <?php }
              }  ?>
            <?php  if (get_post_meta( get_the_ID(), 'home_page_second_gallery', true)) { ?>
                  <?php cmb2_output_file_list( 'home_page_second_gallery', 1 ); ?>
            <?php }?>
          </div>
          <div class="second-info">
            <div class="second-text">
              <?php echo wpautop(get_post_meta( get_the_ID(), 'home_page_second_section_text', true ));?>
            </div>
          </div>
        </div>
      </div>
    </div>

  
    <div class="full-page" id="full-page">

      <div class="presentation-screen section wrap-block" id="presentation-screen">
      <div class="presentation-content container">
        <div class="presentation-slider" id="presentation">
          <div class="presentation-slider__item" id="sun-anim" >

            <div class="presentation-info">
              <div class="presentation-info-inner">
                <p class="presentation-info-inner__mini-title text text_small"><?php echo get_post_meta( get_the_ID() , 'home_page_third_section_before_title', true ); ?></p>
                <p class="presentation-info-inner__title"><?php echo get_post_meta( get_the_ID() , 'home_page_second_third_title', true ); ?></p>
                <p class="presentation-info-inner__descript text text_regular"><?php echo get_post_meta( get_the_ID() , 'home_page_third_section_after_title', true ); ?> </p>
              </div>
            </div>

            <div class="presentation-animation">
              <div class="presentation-animation-inner">
              </div>
            </div>
          </div>
          <div class="presentation-slider__item"  id="moon-anim">


            <div class="presentation-info">
              <div class="presentation-info-inner">
                <p class="presentation-info-inner__mini-title text text_small"><?php echo get_post_meta( get_the_ID() , 'home_page_third_section_before_title_2', true ); ?></p>
                <p class="presentation-info-inner__title"><?php echo get_post_meta( get_the_ID() , 'home_page_second_third_title_2', true ); ?></p>
                <p class="presentation-info-inner__descript text text_regular"><?php echo get_post_meta( get_the_ID() , 'home_page_third_section_after_title_2', true ); ?> </p>
              </div>
            </div>

            <div class="presentation-animation">
              <div class="presentation-animation-inner">
              </div>
            </div>
          </div>
          <div class="presentation-slider__item" id="tower-anim">


            <div class="presentation-info">
              <div class="presentation-info-inner">
                <p class="presentation-info-inner__mini-title text text_small"><?php echo get_post_meta( get_the_ID() , 'home_page_third_section_before_title_3', true ); ?></p>
                <p class="presentation-info-inner__title"><?php echo get_post_meta( get_the_ID() , 'home_page_second_third_title_3', true ); ?></p>
                <p class="presentation-info-inner__descript text text_regular"><?php echo get_post_meta( get_the_ID() , 'home_page_third_section_after_title_3', true ); ?> </p>
              </div>
            </div>




            <div class="presentation-animation">
              <div class="presentation-animation-inner">
              </div>
            </div>
          </div>
        </div>
        <div class="controls">
          <div class="controls-numbers">
            <div class="controls__item controls-one">
              <p>1</p>
            </div>
            <div class="controls__item controls-two">
              <p>2</p>
            </div>
            <div class="controls__item controls-third">
              <p>3</p>
            </div>
          </div>
        </div>
      </div>
    </div>

      <div class="discreet-screen wrap-block" id="discreet">
        <div class="discreet-content container">
          <div class="discreet-info">
            <div class="discreet-text">
              <p class="discreet-text__title title title_regular"><?php echo get_post_meta( get_the_ID() , 'home_page_fourth_section_title', true ); ?></p>
              <p class="discreet-text__descript text text_regular"><?php echo get_post_meta( get_the_ID() , 'home_page_fourth_section_text', true ); ?></p>
            </div>
          </div>
        </div>
        <div class="vid-discreet">
      <video id="v0" width='100%' height="auto" tabindex="0" autobuffer="autobuffer">
        <source src="
        <?php if(wp_is_mobile())
        {?>
        <?php echo get_template_directory_uri(); ?>/img/video-discreet-mob.mp4
        <?php } ?>
        <?php if(wp_is_mobile() == false)
        {?>
        <?php echo get_template_directory_uri(); ?>/img/video-discreet.mp4
        <?php } ?>
        " type="video/mp4"/>
      </video>
    </div>
      </div>

      <div class="expandable section wrap-block">
      <div class="expandable-content container" id="capacity">
        <div class="expandable-info">
          <div class="text-info">
            <h1><?php echo get_post_meta( get_the_ID() , 'home_page_fifth_section_title', true ); ?></h1>
            <p><?php echo get_post_meta( get_the_ID() , 'home_page_fifth_section_text', true ); ?></p>
          </div>
          <div class="block-list">
            <div class="block block-active block-one">
              <p>
                <?php echo get_post_meta( get_the_ID() , 'home_page_fifth_section_1_value', true ); ?>
                <span><?php echo get_post_meta( get_the_ID() , 'home_page_fifth_section_1_unit', true ); ?></span></p>
              <span><?php echo get_post_meta( get_the_ID() , 'home_page_fifth_section_1_text', true ); ?></span>
            </div>
            <div class="block block-two">
              <p>
                <?php echo get_post_meta( get_the_ID() , 'home_page_fifth_section_2_value', true ); ?>
                <span><?php echo get_post_meta( get_the_ID() , 'home_page_fifth_section_2_unit', true ); ?></span></p>
              <span><?php echo get_post_meta( get_the_ID() , 'home_page_fifth_section_2_text', true ); ?></span>
            </div>
            <div class="block block-three">
              <p>
                <?php echo get_post_meta( get_the_ID() , 'home_page_fifth_section_3_value', true ); ?>
                <span><?php echo get_post_meta( get_the_ID() , 'home_page_fifth_section_3_unit', true ); ?></span></p>
              <span><?php echo get_post_meta( get_the_ID() , 'home_page_fifth_section_3_text', true ); ?></span>
            </div>
            <div class="block block-four">
              <p>
                <?php echo get_post_meta( get_the_ID() , 'home_page_fifth_section_4_value', true ); ?>
                <span><?php echo get_post_meta( get_the_ID() , 'home_page_fifth_section_4_unit', true ); ?></span></p>
              <span><?php echo get_post_meta( get_the_ID() , 'home_page_fifth_section_4_text', true ); ?></span>
            </div>
          </div>
        </div>
        <div class="expandable-animation" >
          <div class="images-animation" id="black-boxes">
            <img src="<?php echo get_template_directory_uri(); ?>/img/img_main.png" class="main-img" alt="">
            <img src="<?php echo get_template_directory_uri(); ?>/img/img_block1.png" class="img-block1" alt="">
            <img src="<?php echo get_template_directory_uri(); ?>/img/img_block1.png" class="img-block2" alt="">
            <img src="<?php echo get_template_directory_uri(); ?>/img/img_block1.png" class="img-block3" alt="">
          </div>
          <div class="images-animation" id="white-boxes">
            <img src="<?php echo get_template_directory_uri(); ?>/img/img_main-white.png" class="main-img" alt="">
            <img src="<?php echo get_template_directory_uri(); ?>/img/img_block-white.png" class="img-block1" alt="">
            <img src="<?php echo get_template_directory_uri(); ?>/img/img_block-white.png" class="img-block2" alt="">
            <img src="<?php echo get_template_directory_uri(); ?>/img/img_block-white.png" class="img-block3" alt="">
          </div>
        </div>
        <div class="change-color">
          <p class="active-color black-img">Black</p>
          <p class="white-img">White</p>
        </div>
      </div>
    </div>


  </div>



  <div class="insides-screen section wrap-block">
    <div class="insides-content container">
      <div class="insides-bg">
        <img class="insides-bg__ellipse-back" src="<?php echo get_template_directory_uri(); ?>/img/elipse_1.png" alt="" role="presentation" />
        <img class="insides-bg__ellipse" src="<?php echo get_template_directory_uri(); ?>/img/elipse_2.png" alt="" role="presentation" />
        <!-- <img class="insides-bg__ellipse_two" src="<?php echo get_template_directory_uri(); ?>/img/elipse_2.png" alt="" role="presentation" /> -->
        <!-- <img class="insides-bg__block" src="<?php echo get_post_meta( get_the_ID(), 'energizer_sixth_section_bg', true ); ?>" alt="" role="presentation" /> -->
        <img class="insides-bg__block" src="<?php echo get_template_directory_uri(); ?>/img/insides_block.png" alt="" role="presentation" />
      </div>
      <div class="insides-info">
        <div class="insides-info-inner">
          <p class="insides-info-inner__title title title_regular"><?php echo get_post_meta( get_the_ID() , 'home_page_sixth_section_title', true ); ?></p>
          <p class="insides-info-inner__descript text text_regular"><?php echo get_post_meta( get_the_ID() , 'home_page_sixth_section_text', true ); ?></p>
        </div>
      </div>
    </div>
  </div>




  <div class="intelligence-screen section wrap-block">
    <div class="intelligence-content container">
      <div class="intelligence-text">
           <?php echo wpautop(get_post_meta( get_the_ID(), 'home_page_seventh_section_text', true ));?>
      </div>
      <div class="intelligence-animation" id="hand">
        <!-- <div class="hand">
          <div class="hand__inner">
            <div class="hand__screen">
            </div>
          </div>
        </div> -->
        <!-- <div class="hand-vid">
          <video id="main-hand-vid" width='100%' height="auto" preload="auto" muted autoplay loop >
            <source src="
              <?php echo get_template_directory_uri(); ?>/img/hand_vid.mp4
            " type="video/mp4"/>
          </video>
        </div> -->
        <div class="hand-gif">
          <div class="hand__inner-gif">
            <div class="hand__screen-gif">
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>



    <div class="specifications-screen section wrap-block" >
      <div class="specifications-content container" id="specifications">

        <div class="specifications-sizes">
          <div class="specifications-sub sizes-common">
            <p class="specifications-sub__title">Sub Unit
            </p><img class="specifications-sub__main" src="<?php echo get_template_directory_uri(); ?>/img/sub-on.svg" alt="" role="presentation"/>
          </div>
          <div class="specifications-main sizes-common active-size">
            <p class="specifications-main__title">Main Unit
            </p><img class="specifications-main__main" src="<?php echo get_template_directory_uri(); ?>/img/main-on.svg" alt="" role="presentation"/>
          </div>
        </div>


        <div class="specifications-info">

        <div class="specifications-head">
          <p class="specifications-head__title">Technical specifications
          </p>
          <div class="specifications-nav">
            <p class="specifications-nav__main main-toggle common-toggle">Main Unit
            </p>
            <p class="specifications-nav__sub sub-toggle common-toggle">Sub Unit
            </p>
          </div>
        </div>



        <div class="main-info info-common info-open">
         <?php  $entries = get_post_meta( get_the_ID() , 'eighth_section_main', true );
             if (!empty($entries)) {
                foreach ( (array) $entries as $key => $entry ) {
                $eighth_section_main_title =  '';
                $eighth_section_main_content =  ''; ?>
                <div class="info-item">
                  <div class="item-head">
                  <?php if ( isset( $entry['eighth_section_title_main'] ) ) {
                     $eighth_section_main_title = ( $entry['eighth_section_title_main'] ); ?>
                     <p class="item-head__title text text_small"><?php echo $eighth_section_main_title ?> </p>
                   <?php } ?>
                   <div class="item-head__del">
                   </div>
                   <div class="item-head__btn">
                   </div>
                  </div>
                <div class="item-text">
                  <?php if ( isset( $entry['eighth_section_text_main'] ) ) {
                     $eighth_section_main_content = ( $entry['eighth_section_text_main'] );
                     ?>
                     <?php echo $eighth_section_main_content ?>
                   <?php } ?>
                  </div>
               </div>
              <?php }
               }?>
        </div>




        <div class="sub-info info-common">

          <?php  $entries2 = get_post_meta( get_the_ID() , 'eighth_section_sub', true );
              if (!empty($entries2)) {
                 foreach ( (array) $entries2 as $key => $entry2 ) {
                 $eighth_section_main_title2 =  '';
                 $eighth_section_main_content2 =  ''; ?>
                 <div class="info-item">
                   <div class="item-head">
                   <?php if ( isset( $entry2['eighth_section_title_sub'] ) ) {
                      $eighth_section_main_title2 = ( $entry2['eighth_section_title_sub'] ); ?>
                      <p class="item-head__title text text_small"><?php echo $eighth_section_main_title2 ?> </p>
                    <?php } ?>
                    <div class="item-head__del">
                    </div>
                    <div class="item-head__btn">
                    </div>
                   </div>
                 <div class="item-text">
                  <?php if ( isset( $entry2['eighth_section_text_sub'] ) ) {
                      $eighth_section_main_content2 = ( $entry2['eighth_section_text_sub'] );
                      ?>
                      <?php echo $eighth_section_main_content2 ?>
                    <?php } ?>
                  </div>
                </div>
               <?php }
                }?>


        </div><a class="download-btn text text_small" href="<?php echo get_template_directory_uri(); ?>/files/ProductSpec.pdf" download>DOWNLOAD SPECIFICATIONS (PDF)</a>
      </div>
      </div>
    </div>

<?php get_footer(); ?>

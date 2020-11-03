<?php


add_action( 'cmb2_admin_init', 'main_metaboxes' );
/**
 * Define the metabox and field configurations.
 */
function main_metaboxes() {

	/**
	 * Initiate the metabox
	 */
	$cmb = new_cmb2_box( array(
		'id'            => 'homepage_metabox',
		'title'         => __( 'ДОПОЛНИТЕЛЬНЫЕ ПОЛЯ ДЛЯ ГЛАВНОЙ СТРАНИЦЫ', 'cmb2' ),
    'object_types'  => array( 'page', ), // Post type
    'show_on'       => array( 'key' => 'page-template', 'value' => "page-templates/page_home.php" ),
    'show_in_rest' => WP_REST_Server::READABLE,
		'context'       => 'normal',
		'priority'      => 'high',
		'show_names'    => true, // Show field names on the left
	) );
  // $cmb->add_field( array(
	// 	'name'    => 'Рисунок для слайда шапки',
	// 	'id'      => 'energizer_main_slide_img',
	// 	'type'    => 'file',
	// 	'preview_size' => array( 800, 400 ), // Image size to use when previewing in the admin.
	// ) );
	$cmb->add_field( array(
		'name'    => 'Заголовок слайда',
		'id'      => 'energizer_main_slide_title',
		'type'    => 'textarea_small',
	) );
  $cmb->add_field( array(
    'name' => '==================== ВТОРАЯ СЕКЦИЯ ====================',
    'type' => 'title',
    'id'   => 'sovinyon_second_section'
  ) );
  $cmb->add_field( array(
   'name'    => 'Вторая секция текст',
   'id'      => 'home_page_second_section_text',
   'type'    => 'wysiwyg',
   'options' => array(
     'tinymce' => array(
         'menubar' => true,
       ),
   ),
 ) );
 /**
  *  НАЧАЛО Галерея
  */
 $cmb->add_field( array(
   'name' => 'Рисунки для галереи ',
   'id'   => 'home_page_second_gallery',
   'type' => 'file_list',
   'show_in_rest' => WP_REST_Server::ALLMETHODS,
   'preview_size' => array( 100, 100 ), // Default: array( 50, 50 )
   'text' => array(
     'add_upload_files_text' => 'Replacement', // default: "Add or Upload Files"
     'remove_image_text' => 'Replacement', // default: "Remove Image"
     'file_text' => 'Replacement', // default: "File:"
     'file_download_text' => 'Replacement', // default: "Download"
     'remove_text' => 'Replacement', // default: "Remove"
   ),
 ) );
 /**
  *  КОНЕЦ Галерея
  */
	$cmb->add_field( array(
    'name' => '==================== ТРЕТЬЯ СЕКЦИЯ ====================',
    'type' => 'title',
    'id'   => 'sovinyon_third_section'
  ) );
  $cmb->add_field( array(
   'name'    => 'Третья секция заголовок',
   'id'      => 'home_page_second_third_title',
   'type'    => 'text',
 ));
 $cmb->add_field( array(
	'name'    => 'Третья секция текст перед заголовком',
	'id'      => 'home_page_third_section_before_title',
	'type'    => 'textarea_small',
));
$cmb->add_field( array(
 'name'    => 'Третья секция текст после заголовка',
 'id'      => 'home_page_third_section_after_title',
 'type'    => 'textarea_small',
));






	$cmb->add_field( array(
    'name' => '==================== ЧЕТВЕРТАЯ СЕКЦИЯ ====================',
    'type' => 'title',
    'id'   => 'sovinyon_fourth_section'
  ) );


	// $cmb->add_field( array(
	// 	'name'    => 'Рисунок четвертой секции',
	// 	'id'      => 'energizer_fourth_section_bg',
	// 	'type'    => 'file',
	// 	'preview_size' => array( 800, 400 ), // Image size to use when previewing in the admin.
	// ) );

  $cmb->add_field( array(
   'name'    => 'Четвертая секция  заголовок',
   'id'      => 'home_page_fourth_section_title',
   'type'    => 'text',
 ));

 $cmb->add_field( array(
	'name'    => 'Четвертая секция текст',
	'id'      => 'home_page_fourth_section_text',
	'type'    => 'textarea_small',
));






$cmb->add_field( array(
	'name' => '==================== ПЯТАЯ СЕКЦИЯ ====================',
	'type' => 'title',
	'id'   => 'sovinyon_fifth_section'
) );

$cmb->add_field( array(
 'name'    => 'Пятая  секция  заголовок',
 'id'      => 'home_page_fifth_section_title',
 'type'    => 'text',
));

$cmb->add_field( array(
'name'    => 'Пятая секция текст',
'id'      => 'home_page_fifth_section_text',
'type'    => 'textarea_small',
));



$cmb->add_field( array(
 'name'    => 'Пункт первый значение',
 'id'      => 'home_page_fifth_section_1_value',
 'type'    => 'text',
));
$cmb->add_field( array(
 'name'    => 'Пункт первый единица измерения',
 'id'      => 'home_page_fifth_section_1_unit',
 'type'    => 'text',
));
$cmb->add_field( array(
 'name'    => 'Пункт первый текст',
 'id'      => 'home_page_fifth_section_1_text',
 'type'    => 'text',
));


$cmb->add_field( array(
 'name'    => 'Пункт второй значение',
 'id'      => 'home_page_fifth_section_2_value',
 'type'    => 'text',
));
$cmb->add_field( array(
 'name'    => 'Пункт второй единица измерения',
 'id'      => 'home_page_fifth_section_2_unit',
 'type'    => 'text',
));
$cmb->add_field( array(
 'name'    => 'Пункт второй текст',
 'id'      => 'home_page_fifth_section_2_text',
 'type'    => 'text',
));


$cmb->add_field( array(
 'name'    => 'Пункт третий значение',
 'id'      => 'home_page_fifth_section_3_value',
 'type'    => 'text',
));
$cmb->add_field( array(
 'name'    => 'Пункт третий единица измерения',
 'id'      => 'home_page_fifth_section_3_unit',
 'type'    => 'text',
));
$cmb->add_field( array(
 'name'    => 'Пункт третий текст',
 'id'      => 'home_page_fifth_section_3_text',
 'type'    => 'text',
));

$cmb->add_field( array(
 'name'    => 'Пункт четвертый значение',
 'id'      => 'home_page_fifth_section_4_value',
 'type'    => 'text',
));
$cmb->add_field( array(
 'name'    => 'Пункт четвертый единица измерения',
 'id'      => 'home_page_fifth_section_4_unit',
 'type'    => 'text',
));
$cmb->add_field( array(
 'name'    => 'Пункт четвертый текст',
 'id'      => 'home_page_fifth_section_4_text',
 'type'    => 'text',
));





$cmb->add_field( array(
	'name' => '==================== ШЕСТАЯ СЕКЦИЯ ====================',
	'type' => 'title',
	'id'   => 'sovinyon_sixth_section'
) );


$cmb->add_field( array(
	'name'    => 'Рисунок шестой секции',
	'id'      => 'energizer_sixth_section_bg',
	'type'    => 'file',
	'preview_size' => array( 800, 400 ), // Image size to use when previewing in the admin.
) );

$cmb->add_field( array(
 'name'    => 'Шестая секция заголовок',
 'id'      => 'home_page_sixth_section_title',
 'type'    => 'text',
));

$cmb->add_field( array(
'name'    => 'Шестая секция текст',
'id'      => 'home_page_sixth_section_text',
'type'    => 'textarea_small',
));




$cmb->add_field( array(
	'name' => '==================== СЕДЬМАЯ СЕКЦИЯ ====================',
	'type' => 'title',
	'id'   => 'sovinyon_seventh_section'
) );

$cmb->add_field( array(
 'name'    => 'Седьмая секция текст',
 'id'      => 'home_page_seventh_section_text',
 'type'    => 'wysiwyg',
 'options' => array(
	 'tinymce' => array(
			 'menubar' => true,
		 ),
 ),
) );




$cmb->add_field( array(
	'name' => '==================== ВОСЬМАЯ СЕКЦИЯ ====================',
	'type' => 'title',
	'id'   => 'sovinyon_eighth_section'
) );

	$group_field_id = $cmb->add_field( array(
		'id'          => 'eighth_section_main',
		'type'        => 'group',
		'object_types'     => array( 'myxi' ), // Tells CMB2 to use term_meta vs post_meta
		'description' => __( 'ПЕРЕЧЕНЬ ОСНОВНЫХ БЛОКОВ', 'cmb2' ),
			'options'     => array(
			'group_title'   => __( 'Перечень основных блоков {#}', 'cmb2' ), // since version 1.1.4, {#} gets replaced by row number
			'add_button'    => __( 'Add Another Entry', 'cmb2' ),
			'remove_button' => __( 'Remove Entry', 'cmb2' ),
			'sortable'      => true, // beta
		),
	) );

	$cmb->add_group_field( $group_field_id, array(
		'name'       => __( 'Заголовок секции основных блоков', 'cmb2' ),
		'id'         => 'eighth_section_title_main',
		'type'       => 'text',
		'show_on_cb' => 'cmb2_hide_if_no_cats', // function should return a bool value
	) );

$cmb->add_group_field( $group_field_id, array(
	 'name'    => 'Текст секции основных блоков',
	 'id'      => 'eighth_section_text_main',
	 'type'    => 'wysiwyg',
	 'options' => array(
		 'tinymce' => array(
				 'menubar' => true,
			 ),
	 ),
	) );




	$group_field_id = $cmb->add_field( array(
		'id'          => 'eighth_section_sub',
		'type'        => 'group',
		'object_types'     => array( 'myxi' ), // Tells CMB2 to use term_meta vs post_meta
		'description' => __( 'ПЕРЕЧЕНЬ ДОПОЛНИТЕЛЬНЫХ БЛОКОВ', 'cmb2' ),
			'options'     => array(
			'group_title'   => __( 'Перечень дополнительных блоков {#}', 'cmb2' ), // since version 1.1.4, {#} gets replaced by row number
			'add_button'    => __( 'Add Another Entry', 'cmb2' ),
			'remove_button' => __( 'Remove Entry', 'cmb2' ),
			'sortable'      => true, // beta
		),
	) );

	$cmb->add_group_field( $group_field_id, array(
		'name'       => __( 'Заголовок секции дополнительных блоков', 'cmb2' ),
		'id'         => 'eighth_section_title_sub',
		'type'       => 'text',
		'show_on_cb' => 'cmb2_hide_if_no_cats', // function should return a bool value
	) );

$cmb->add_group_field( $group_field_id, array(
	 'name'    => 'Текст секции дополнительных блоков',
	 'id'      => 'eighth_section_text_sub',
	 'type'    => 'wysiwyg',
	 'options' => array(
		 'tinymce' => array(
				 'menubar' => true,
			 ),
	 ),
	) );
























}

<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package energizer
 */
?>


<footer class="footer" id="footer">


	<div class="footer_contact_us_wrapper section">
		<div class="footer_contact_us_container">

			<h2 class="footer_contact_us_title title_font">Contact us</h2>
			<p class="footer_contact_us_sub_title"><span>Select the reason for your enquiry and one of our specialists will get in touch.</span></p>

			<div class="footer_contact_us_container_button_container">
				<div class="footer_contact_us_customer title_font btn-footer" data-toid="#customer-form">Customer enquiries</div>
				<div class="footer_contact_us_reseller title_font btn-footer" data-toid="#reseller-form">Become a reseller</div>
				<div class="footer_contact_us_installer title_font btn-footer" data-toid="#installer-form">Become an installer</div>
			</div>

			<div class="footer_contact_us_customer_wrapper">
				<div class="footer_contact_us_customer_container">
		<?php echo do_shortcode('[contact-form-7 id="14" title="Customer"]'); ?>
		
				</div>
			</div>
			<div class="footer_contact_us_reseller_wrapper">
				<div class="footer_contact_us_reseller_container">
					<?php echo do_shortcode('[contact-form-7 id="15" title="Reseller"]'); ?>
				</div>
			</div>
			<div class="footer_contact_us_installer_wrapper">
				<div class="footer_contact_us_installer_container">
           <?php echo do_shortcode('[contact-form-7 id="16" title="Installer"]'); ?>
				</div>
			</div>

			<?php
/*КЛЮЧИ*/
define('SITE_KEY', '6LeFRgEVAAAAADvhPaZAci3TEacIijy0AFk-_YyW');
define('SECRET_KEY', '6LeFRgEVAAAAAJF75O4WYFxbVk2R1ivMK8AoyRfD');

/*ОБРАБОТКА ЗАПРОСА*/
if($_POST){
    /*СОЗДАЕМ ФУНКЦИЮ КОТОРАЯ ДЕЛАЕТ ЗАПРОС НА GOOGLE СЕРВИС*/
    function getCaptcha($SecretKey) {
        $Response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=".SECRET_KEY."&response={$SecretKey}");
        $Return = json_decode($Response);
        return $Return;
    }
    
    /*ПРОИЗВОДИМ ЗАПРОС НА GOOGLE СЕРВИС И ЗАПИСЫВАЕМ ОТВЕТ*/
    $Return = getCaptcha($_POST['g-recaptcha-response']);
    /*ВЫВОДИМ НА ЭКРАН ПОЛУЧЕННЫЙ ОТВЕТ*/
    var_dump($Return);
    
    /*ЕСЛИ ЗАПРОС УДАЧНО ОТПРАВЛЕН И ЗНАЧЕНИЕ score БОЛЬШЕ 0,5 ВЫПОЛНЯЕМ КОД*/
    if($Return->success == true && $Return->score > 0.5){
        echo "Succes!";
    }
    else {
        echo "You are Robot";
    }
}
?>


		<div class="support">
			<p>If you require technical help, contact the <a href="/policy/">Energizer HomePower Support</a> team.</p>
		</div>



		</div>
	</div>

	<div class="copyright-black section wrap-block">
		<div class="copyright-black-inner container">
			<!-- <a href="https://aussiedev.com.au/en/">View Privacy Policy</a> -->
			<p class="date">© 2020 Energizer. </p>
			<a href="/policy">Privacy Policy</a>
			<p class="copyright-info">Energizer and certain graphic designs are trademarks of Energizer Brands,
				 LLC and related subsidiaries and are used under license by 8 Star Energy Pty Ltd. All other
				 brand names are trademarks of their respective owners. Neither 8 Star Energy Pty Ltd nor
				 Energizer Brands, LLC is affiliated with the respective owners of their trademarks.</p>
		</div>
	</div>

	<!-- <div class="copyright">
		<div class="copyright-inner">
			<p>Energizer Homepower 2020</p>
		</div>
	</div> -->
	

	  <a id="to-top"></a>
</footer>

<!-- 
	<script src="https://www.google.com/recaptcha/api.js?render=6LeFRgEVAAAAADvhPaZAci3TEacIijy0AFk-_YyW">
		console.log(<?php echo SITE_KEY?>)
	</script>
	<script>
        grecaptcha.ready(function() {
            grecaptcha.execute('<?php echo SITE_KEY;?>', {action: 'homepage'}).then(function(token) {
                //console.log(token);
                document.getElementById('g-recaptcha-response').value=token;
            });
        });
    </script> -->
	<?php wp_footer(); ?>
	
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js"></script>
</body>

</html>

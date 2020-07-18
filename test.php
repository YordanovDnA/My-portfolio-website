<html>
  <head>
    <title>reCAPTCHA demo: Explicit render after an onload callback</title>
    <script type="text/javascript">
      var onloadCallback = function() {
        grecaptcha.render('html_element', {
          'sitekey' : '6LdD3LIZAAAAAG2Fj5wsKenE2sQhAJzVP51ckmw0'
        });
      };
    </script>
  </head>
  <body>
  <form action="?" method="post" enctype="multipart/form-data">
	<input name="sender_name" placeholder="Your Name..."/>
	<input name="sender_email" placeholder="Your email..."/>
	<textarea placeholder="Your Message..." name="sender_message">
        <div class="captcha_wrapper">
		<div class="g-recaptcha" data-sitekey="6LdD3LIZAAAAAG2Fj5wsKenE2sQhAJzVP51ckmw0"></div>
	</div>
	<button type="submit" id="send_message">Send Message!</button>
</form>
    <script src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit"
        async defer>
    </script>
    <?php 
      include "reCaptcha.php";
    ?>
  </body>
</html>

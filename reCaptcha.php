<?php
	$response = $_POST["g-recaptcha-response"];

	$url = 'https://www.google.com/recaptcha/api/siteverify';
	$data = array(
		'secret' => '6LdD3LIZAAAAAMFgTNfmy0aAwnEyenuAvPGYXTsM',
		'response' => $_POST["g-recaptcha-response"]
	);
	$options = array(
		'http' => array (
			'method' => 'POST',
            'content' => http_build_query($data)
            
		)
	);
	$context  = stream_context_create($options);
	$verify = file_get_contents($url, false, $context);
	$captcha_success=json_decode($verify);

	if ($captcha_success->success==false)  {
        echo('<script>
            alert("Please prove you are not a robot.");
        </script>');
	} else if ($captcha_success->success==true) {
		include "reCaptcha.php";
        $to = "iliyanyyordanov@gmail.com";
        $subject = "Test";
        $txt = "From: ". $_POST["name"] . "\n\n" . $_POST["text"] ;
        $headers = "From: ".$_POST["email"] . "\r\n" .
        "CC: iliyanyyordanov@gmail.com";
        mail($to,$subject,$txt,$headers);
        header("location: http://iliyanyordanov.com");
    }
?>
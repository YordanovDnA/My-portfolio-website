<?php
$to = "iliyanyyordanov@gmail.com";
$subject = "Test";
$txt = "From: ". $_POST["name"] . "\n\n" . $_POST["text"] ;
$headers = "From: ".$_POST["email"] . "\r\n" .
"CC: iliyanyyordanov@gmail.com";
mail($to,$subject,$txt,$headers);
header("location: http://iliyanyordanov.com");
?>
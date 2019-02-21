<?php

    $to = "hhandhh@yahoo.com";
    $from = "info@royaltex.com.au";
    $name = $_REQUEST['Fname'];
    $headers = "From: $from";
    $subject = "RoyalTex: You have a message from Contact Form on Homepage";

    $fields = array();
    $fields{"Fname"}    = "First Name";
    $fields{"Lname"}    = "Last Name";
    $fields{"email"}    = "Email";
    $fields{"sub"}    = "Subject";
    $fields{"message"}   = "Message";
    

    $body = "Here is the message you got:\n\n"; foreach($fields as $a => $b){   $body .= sprintf("%20s: %s\n",$b,$_REQUEST[$a]); }

    $send = mail($to, $subject, $body, $headers);

?>
<?php

    $to = "fareez1234@gmail.com";
    $from = "sales@royaltex.com.au";
    $name = $_REQUEST['Fname'];
    $headers = "From: $from";
    $subject = "RoyalTex: You have a message received an enquiry request";

    $fields = array();
    $fields{"Fname"}    = "Full Name";
    $fields{"email"}    = "Email";
    $fields{"product"}    = "Product";
    $fields{"enquiry"}   = "Enquiry";
    

    $body = "Here is the Enquiry message you got:\n\n"; foreach($fields as $a => $b){   $body .= sprintf("%20s: %s\n",$b,$_REQUEST[$a]); }

    $send = mail($to, $subject, $body, $headers);

?>
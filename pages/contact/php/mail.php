<?php

$name = $_POST["name"]; 
$name2 = $_POST["name2"]; 
$email = $_POST["email"];
$phonNumber = $_POST["phonNumber"]; 
$subject = "Wiadomość z formularza na stronie zlwop.pl";
$to = "naukaplywania@serwer111557.lh.pl"; 
$message = $_POST["msg"]; 

$txt = "Imię i Nazwisko Rodzica: " . $name . "\r\n" . "Imię i Nazwisko Dziecka: " . $name2 . "\r\n".
 "Email: " . $email . "\r\n" . "\r\n" . "Telefon kontaktowy: " . $phonNumber;

$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8" . "\r\n";
$headers .= "From: " . $email . "\r\n";
$headers .= "Reply-To: " . $email . "\r\n";

$mail_status = mail($to, $subject, $txt, $headers);

if ($mail_status) {
    header("Location: /contact/index.html?mail_status=sent"); 
} else {
    header("Location: /contact/index.html?mail_status=error"); 
}
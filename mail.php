<?php

class mymail {
    
    private $pochta;
    private $subject;
    private $message;
    private $headers = "From: yontvid@mail.ru";
    
    public function __construct($pochta, $subject, $message) {
        $this->pochta = $pochta;
        $this->subject = $subject;
        $this->message = $message;
    }
    
    public function send() {
        if(mail($this->pochta, $this->subject, $this->message, $this->headers)) {
            return true;
        } else {
            return false;
        }
    }
}

$pochta = trim(htmlspecialchars($_POST['Email']));
$subject = trim(htmlspecialchars($_POST['Subject']));
$message = trim(htmlspecialchars($_POST['Message']));

$mail = new mymail($pochta, $subject, $message);

exit($mail->send());

?>
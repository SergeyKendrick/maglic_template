<?php

class mymail {
    
    private $pochta = "yontvid@mail.ru";
    private $subject;
    private $message;
    
    public function __construct($pochta, $name, $subject, $message) {
        $this->subject = $subject;
        $this->message = "Имя: ".$name."\n\r"."E-mail: ".$pochta."\n\r"."Тема: ".$subject."\n\r"."Сообщение: \n\r".$message;
    }
    
    public function send() {
        if(mail($this->pochta, $this->subject, $this->message)) {
            return true;
        } else {
            return false;
        }
    }
}

$pochta = trim(htmlspecialchars($_POST['Name']));
$pochta = trim(htmlspecialchars($_POST['Email']));
$subject = trim(htmlspecialchars($_POST['Subject']));
$message = trim(htmlspecialchars($_POST['Message']));

$mail = new mymail($pochta, $name, $subject, $message);

exit($mail->send());

?>

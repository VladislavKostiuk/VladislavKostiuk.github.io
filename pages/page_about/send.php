<?php

    $data = [
        "name"=> $_POST['name'],
        "e_mail"=> $_POST['e_mail'],
        "message1"=> $_POST['message1'],
        "message2"=> $_POST['message2']
    ];

    $name = $_POST['name'];
    $email = $_POST['e_mail'];
    $message1 = $_POST['message1'];
    $message2 = $_POST['message2'];

    $msg="
    Ім'я: $name
    Пошта: $email
    Повідомлення: $message1
    $message2 "; 	

    mail("projectweb2022@gmail.com", "Дані з сайту", $msg ,"From: projectweb2022@gmail.com \r\n");

?>

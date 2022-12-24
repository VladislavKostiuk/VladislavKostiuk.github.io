<?php

    $data = [
        "name"=> $_POST['name'],
        "number"=> $_POST['number'],
        "message1"=> $_POST['message1'],
    ];

    $name = $_POST['name'];
    $number = $_POST['number'];
    $message1 = $_POST['message1'];

    $msg="
        Ім'я: $name
    Телефон: $number
    Повідомлення: $message1
    "; 	

    mail("projectweb2022@gmail.com", "Дані з сайту", $msg ,"From: projectweb2022@gmail.com \r\n");

?>

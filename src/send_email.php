<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "alina.hovakimyan.98@gmail.com";
    $subject = "New Reservation Request";
    $message = "Name: " . $_POST["name"] . "\nPhone: " . $_POST["phone"] .
               "\nDate: " . $_POST["date"] . "\nTime: " . $_POST["time"] .
               "\nPeople: " . $_POST["people"];

    mail($to, $subject, $message);
    echo "Reservation request sent!";
}
?>

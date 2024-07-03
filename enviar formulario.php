<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $services = htmlspecialchars($_POST['services']);
    $message = htmlspecialchars($_POST['message']);

    $to = 'zpidgameplay@gmail.com';  // Reemplaza con tu correo
    $subject = 'Nuevo Mensaje del Formulario de Contacto';
    $body = "Nombre: $name\nCorreo: $email\nServicio: $services\nMensaje:\n$message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo 'Mensaje enviado con éxito';
    } else {
        echo 'Error al enviar el mensaje';
    }
}
?>

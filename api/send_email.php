<?php
header('Content-Type: application/json');

// Permitir solicitudes desde el origen de tu aplicación React
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Si es una solicitud OPTIONS (preflight), terminar aquí
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

// Obtener los datos JSON enviados
$data = json_decode(file_get_contents('php://input'), true);

// Validar los datos recibidos
if (!isset($data['name']) || !isset($data['email']) || !isset($data['phone']) || !isset($data['category']) || !isset($data['to_email'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Faltan datos requeridos']);
    exit;
}

$name = $data['name'];
$email = $data['email'];
$phone = $data['phone'];
$category = $data['category'];
$to_email = $data['to_email'];

// Configurar el correo
$subject = 'Nuevo mensaje del formulario de contacto';
$message = "Nombre: $name\n";
$message .= "Correo electrónico: $email\n";
$message .= "Teléfono: $phone\n";
$message .= "Tipo de servicio: $category\n";

$headers = "From: siragon222@gmail.com\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Intentar enviar el correo
if (mail($to_email, $subject, $message, $headers)) {
    echo json_encode(['success' => true, 'message' => 'Correo enviado con éxito']);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Error al enviar el correo']);
}
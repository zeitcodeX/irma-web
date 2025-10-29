<?php
// --- CONFIGURACIÓN OBLIGATORIA ---

// 1. CAMBIÁ ESTO: Poné el email donde querés RECIBIR los leads.
$destinatario = "contacto@holairma.com";

// 2. CAMBIÁ ESTO: El asunto del email que vas a recibir.
$asunto = "¡Nuevo Lead Landing Meta!";

// 3. CAMBIÁ ESTO: El email que figura como "remitente" (idealmente uno de tu dominio).
$remitente = "no-responder@holairma.com";

// ---------------------------------

// Verificamos que los datos vengan por POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // 1. CAPTURA Y LIMPIEZA DE DATOS
    
    // Usamos 'strip_tags' para limpiar cualquier código HTML
    // Usamos 'trim' para quitar espacios en blanco al inicio o final
    
    $nombre = isset($_POST['nombre']) ? strip_tags(trim($_POST['nombre'])) : 'No especificado';
    $email = isset($_POST['email']) ? trim($_POST['email']) : 'No especificado';
    $whatsapp = isset($_POST['whatsapp']) ? strip_tags(trim($_POST['whatsapp'])) : 'No especificado';

    // 2. ARMADO DEL CORREO PARA VOS (EL DUEÑO)
    
    $cuerpo_mensaje = "Tenés un nuevo lead desde la Landing de Meta:\n";
    $cuerpo_mensaje .= "--------------------------------------------------\n";
    $cuerpo_mensaje .= "Nombre:    " . $nombre . "\n";
    $cuerpo_mensaje .= "Email:     " . $email . "\n";
    $cuerpo_mensaje .= "WhatsApp:  " . $whatsapp . "\n";
    $cuerpo_mensaje .= "--------------------------------------------------\n";
    $cuerpo_mensaje .= "Contactar a la brevedad para activar la prueba.\n";

    // 3. ARMADO DE CABECERAS DEL EMAIL
    
    // Es importante sanitizar el email del 'Reply-To' para evitar inyección de cabeceras
    $email_sanitizado = filter_var($email, FILTER_SANITIZE_EMAIL);
    
    $headers = "From: IRMA Landing <" . $remitente . ">\r\n";
    
    // Si el email es válido, lo ponemos en "Reply-To" para que puedas "Responder"
    // directamente al lead desde tu cliente de correo.
    if (filter_var($email_sanitizado, FILTER_VALIDATE_EMAIL)) {
        $headers .= "Reply-To: " . $email_sanitizado . "\r\n";
    }
    
    $headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // 4. ENVÍO DEL CORREO
    // Esta función 'mail()' depende de la configuración de tu servidor.
    mail($destinatario, $asunto, $cuerpo_mensaje, $headers);

    // 5. REDIRECCIÓN A LA PÁGINA DE GRACIAS
    
    // Preparamos el nombre para pasarlo por la URL (ej: "Juan Pérez" -> "Juan%20P%C3%A9rez")
    $nombre_url = urlencode($nombre);
    
    // Redirigimos al usuario a la página de gracias, 
    // pasando el nombre como un parámetro GET.
    header("Location: gracias.html?nombre=" . $nombre_url);
    exit; // Importante: 'exit' detiene la ejecución del script después de redirigir.

} else {
    // Si alguien intenta acceder a 'enviar-formulario.php' directamente 
    // desde el navegador, lo mandamos de vuelta a la landing.
    header("Location: landing-meta.html");
    exit;
}
?>
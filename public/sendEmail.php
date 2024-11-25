<?php
// Autoload Composer dependencies
require 'vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Allow cross-origin requests for local testing
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Get query parameters from the URL
    $name = htmlspecialchars($_GET['name']);
    $email = htmlspecialchars($_GET['email']);
    $phone = htmlspecialchars($_GET['phone']);
    $message = htmlspecialchars($_GET['message']);
   

    // Create a new PHPMailer instance
    $mail = new PHPMailer(true);

    try {
        //Server settings
        $mail->isSMTP();                                            // Send using SMTP
        $mail->Host       = 'smtp.gmail.com';                        // Set the SMTP server to send through
        $mail->SMTPAuth   = true;                                    // Enable SMTP authentication
        $mail->Username   = 'ndangahertier@gmail.com';                   // SMTP username (Your Gmail address)
        $mail->Password   = 'gxqw qnyl mhui yecy';                     // SMTP password (Your App Password)
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;          // Enable TLS encryption
        $mail->Port       = 587;                                     // TCP port to connect to

        // Sender and recipient
        $mail->setFrom($email, $name);  // Sender's email and name
        $mail->addAddress('ndangahertier@gmail.com', 'Recipient Name');  // Replace with your recipient email address

        // Email content
        $mail->isHTML(true);
        $mail->Subject = "New Appointment Request from $name";
        $mail->Body    = "
            <h3>You have a new appointment request:</h3>
            <p><strong>Name:</strong> $name</p>
            <p><strong>Email:</strong> $email</p>
            <p><strong>Phone Number:</strong> $phone</p>
            <p><strong>Message:</strong><br>$message</p>
        ";
        
        $mail->SMTPOptions = array(
            'ssl' => array(
                'verify_peer' => false,
                'verify_peer_name' => false,
                'allow_self_signed' => true
            )
        );

        // Send email
        $mail->send();
        http_response_code(200);
        echo json_encode(['message' => 'Appointment request sent successfully!']);
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode(['error' => 'Failed to send email. Mailer Error: ' . $mail->ErrorInfo]);
    }
} else {
    http_response_code(405);
    echo json_encode(['error' => 'Invalid request method']);
}
?>


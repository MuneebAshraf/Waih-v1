<?php

    // Get the form fields, removes html tags and whitespace.
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);

    // Check the data.
    if ($email, FILTER_VALIDATE_EMAIL)) {
        header("Location: http://www.waih.dk/index.php?success=-1#form");
        exit;
    }

    // Set the recipient email address. Update this to YOUR desired email address.
    $recipient = "radio@waih.dk";

    // Set the email subject.
    $subject = "Ny subscribe $email";

    // Build the email content.
    $email_content .= "Email: $email\n\n";

    // Build the email headers.
    $email_headers = "From:<$email>";

    // Send the email.
    mail($recipient, $subject, $email_content, $email_headers);
    
    // Redirect to the index.html page with success code
    header("Location: http://www.waih.dk/index.php?success=1#form");

?>
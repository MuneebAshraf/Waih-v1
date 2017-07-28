<?php
// Check if a file has been uploaded

if(isset($_FILES['uploaded_file'])) {
    // Make sure the file was sent without errors
    if($_FILES['uploaded_file']['error'] == 0) {
        // Connect to the database
        $dbLink = new mysqli('mysql21.unoeuro.com', 'waih_dk', 'W0rkhardforjannah', 'waih_dk_db');
        if(mysqli_connect_errno()) {
            die("MySQL connection failed: ". mysqli_connect_error());
        }
 
        // Gather all required data
        $name = $dbLink->real_escape_string($_FILES['uploaded_file']['name']);
        $mime = $dbLink->real_escape_string($_FILES['uploaded_file']['type']);
        $data = base64_encode($dbLink->real_escape_string(file_get_contents($_FILES  ['uploaded_file']['tmp_name'])));
        $description = $_POST['description'];
        $show_name = $_POST['show_name'];
        $show_host = $_POST['show_host'];
        $show_guest = $_POST['show_guest'];

        // Create the SQL query
        $query = "
            INSERT INTO `Podcasts` (
                `name`, `mime`, `data`, `description`, `show_name`, `show_host`, `show_guest`
            )
            VALUES (
                '{$name}', '{$mime}', '{$data}', '{$description}','{$show_name}','{$show_host}', '{$show_guest}'
            )";
 
        // Execute the query
        $result = $dbLink->query($query);
 
        // Check if it was successfull
        if($result) {
            echo 'Success! Your file was successfully added!';
        }
        else {
            echo 'Error! Failed to insert the file'
               . "<pre>{$dbLink->error}</pre>";
        }
    }
    else {
        echo 'An error accured while the file was being uploaded. '
           . 'Error code: '. intval($_FILES['uploaded_file']['error']);
    }
 
    // Close the mysql connection
    $dbLink->close();
}
else {
    echo 'Error! A file was not sent!';
}
 
// Echo a link back to the main page
echo '<p>Click <a href="index1.php">here</a> to go back</p>';
?>
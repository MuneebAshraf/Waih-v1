
<?php
/**
 * Created by PhpStorm.
 * User: muneebashraf
 */

$dbLink = new mysqli('mysql21.unoeuro.com', 'waih_dk', 'W0rkhardforjannah', 'waih_dk_db');
if(mysqli_connect_errno()) {
    die("MySQL connection failed: ". mysqli_connect_error());
}


$show_name = $_GET['show_name'];

    $query = "SELECT * FROM Podcasts WHERE show_name = '{$show_name}'";


    $result = $dbLink->query($query);


if($result) {

    // Make sure there are some files in there
    if($result->num_rows == 0) {
        echo '<script>console.log("ingen podcasts registreret")</script>';
    }
    else {
        // Print the top of a table
        $i = 1;
        while($row = $result->fetch_assoc()) {

            echo "
                    <p>{$row['name']}</p><br>
                    <p>{$row['show_host']}</p> <br>
                    <p>Gæst: {$row['show_guest']}</p>
                    <p>{$row['description']}</p>
                    <div class='playerContainer'>
                        <audio controls> 
                        <source src= {$row['path']} type={$row['mime']}> 
                        </audio>
                    </div>
                   
                ";
        }

    }


    // Free the result
    $result->free();
}
else
{
    echo 'Error! SQL query failed:';
    echo "<pre>{$dbLink->error}</pre>";
}

// Close the mysql connection
$dbLink->close();




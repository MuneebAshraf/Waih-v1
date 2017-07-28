
<link rel="stylesheet" type="text/css" href="../css/plyr.css">
<link href="../css/style-sTEST.css" rel="stylesheet">

<?php
/**
 * Created by PhpStorm.
 * User: muneebashraf
 */

include 'connect.php';

    $query = "SELECT * FROM Podcasts WHERE show_name = 'upToDate'";


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
          /*
            $name = $i++ . "podcast.mp3";

            $tmppodcast = tempnam(sys_get_temp_dir(), $name);
            $podcast = fopen($tmppodcast, "w");
            fwrite($podcast,$row['data']);
            fclose($podcast);
            */

            $data = base64_encode($row['data']);

            echo "
       
                    <p>{$row['name']}</p><br>
                    <p>{$row['show_host']}</p> <br>
                    <p>Gæst: {$row['show_guest']}</p>
                    
                    <div class='playerContainer'>
                        <p>{$row['name']}</p> 
                        <audio controls class='js-player'> 
                        <source src=data:{$row['mime']};base64,{$data} type='audio/mp3'> 
                        </audio>
                    </div>
                    <p>{$row['description']}</p>
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

?>


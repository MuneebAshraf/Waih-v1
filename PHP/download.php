
<link rel="stylesheet" type="text/css" href="../css/plyr.css">
<link href="../css/style-sTEST.css" rel="stylesheet">

<?php
/**
 * Created by PhpStorm.
 * User: muneebashraf
 */


    $dbLink = new mysqli('waih.dk.mysql', 'waih_dk_podcasts', 'waihpodcasts', 'waih_dk_podcasts');
    if(mysqli_connect_errno()) {
        die("MySQL connection failed: ". mysqli_connect_error());
    }

    $query = "SELECT * FROM myTable";


    $result = $dbLink->query($query);


if($result) {

    // Make sure there are some files in there
    if($result->num_rows == 0) {
        echo '<p>There are no files in the database</p>';
    }
    else {
        // Print the top of a table
        echo '<table width="100%">
                <tr>
                    <td><b>Name</b></td>
                    <td><b>Mime</b></td>
                    <td><b>Size (bytes)</b></td>
                    <td><b>Created</b></td>
                    <td><b>&nbsp;</b></td>
                </tr>';

        // Print each file
        $i = 1;
        while($row = $result->fetch_assoc()) {

            $name = $i++ . "podcast.mp3";
            $podcast = fopen($name, "w");
            fwrite($podcast,$row['data']);
            fclose($podcast);

            echo "
                <tr>
                    <td>{$row['name']}</td>
                    <td>{$row['mime']}</td>
                    <td>{$row['size']}</td>
                    <td>{$row['created']}</td>
                    <td>
                    <div class='playerContainer'>
                        <p>{$row['name']}</p> 
                        <audio controls class='js-player'> 
                        <source src=$name type='audio/mp3'> 
                        </audio>
                    </div>
                    </td>
                </tr>";

        }

        // Close table
        echo '</table>';
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

<script src="../js/jquery-2.1.1.js"></script>
<script type="text/javascript" src="../js/plyr.js"></script>
<script type="text/javascript" src="../js/rangetouch.js"></script>
<script> plyr.setup();</script>

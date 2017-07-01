<?php

if(isset($_POST["save_audio"]) && $_POST["save_audio"]=="Upload audio") {

    $dir = 'audio/';

    $audio_path = $dir . basename($_FILES['audioFile']['name']);

    if (move_uploaded_file($_FILES['audioFile']['tmp_name'], $audio_path)) {
        echo 'leggo';
    } else {
        echo 'kom nuuu';
    }
} else {
    echo "Filen er ikke fundet";
}
function saveAudio($fileName)
    {
        $conn=mysqli_connect('waih.dk.mysql','waih_dk_podcasts','waihpodcasts','waih_dk_podcasts');
                if(!$conn)
                {
                    die('Du er uduelig');
                }

                $query="insert into Podcasts('Title')values('{$fileName}')";

                mysqli_query($conn,$query);

                if(mysqli_affected_rows($conn)>0)
                {
                echo "alhamdulillah";
                }

                mysqli_close($conn);

    }

?>
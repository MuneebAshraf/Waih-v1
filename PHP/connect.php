<?php
/**
 * Created by PhpStorm.
 * User: muneebashraf
 * Date: 28/07/2017
 * Time: 00.26
 */

$dbLink = new mysqli('mysql21.unoeuro.com', 'waih_dk', 'W0rkhardforjannah', 'waih_dk_db');
if(mysqli_connect_errno()) {
    die("MySQL connection failed: ". mysqli_connect_error());
}


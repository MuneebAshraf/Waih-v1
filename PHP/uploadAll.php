<?php
/**
 * Created by PhpStorm.
 * User: muneebashraf
 * Date: 28/07/2017
 * Time: 00.26
 */



$year = 2016;
$month = 1;
while ($month < 13){

    for ($day = 1 ; $day < 32 ; $day++) {

        if ($day < 10 && $month < 10) {

        echo '0'.$day . '-' . '0'. $month . '-' . $year . '<br>';

        } else if ($day < 10) {

            echo '0' . $day . '-' .  $month . '-' . $year . '<br>';

        } else if($month < 10) {

            echo $day . '-' . '0'. $month . '-' . $year . '<br>';


        } else {

            echo $day . '-' .  $month . '-' . $year . '<br>';

        }




    }
    $month++;
}

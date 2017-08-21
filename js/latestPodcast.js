/**
 * Created by muneebashraf on 26/04/2017.
 */

var upToDate  = {show_name: "upToDate"         ,div:"<div class='col-md-6 col-sm-6 wp3 senestePodcasts upToDate'>" +"<div class='overlay-effect effects'>" +"<div class='img col-md-4'>" +"<div class='overlay'><i class='ion-ios-play-outline'></i></div>" +"<img src='img/myter.jpg'   alt='Up to date Radio WAIH'>" +"</div>" +"</div>"         +"<p class='PodcastHeader col-md-8'>Up to date</p>"         +"<div class='playerContainer'><p>{$name}</p><p>{$row['show_host']}</p><p>Gæst: {$row['show_guest']}</p><audio controls><source src='audio/test.mp3' type='audio/mpeg'></audio></div>" +"</div>"}
var isbjerg   = {show_name: "toppenAfIsbjerget",div:"<div class='col-md-6 col-sm-6 wp3 senestePodcasts isbjerg'>"  +"<div class='overlay-effect effects'>" +"<div class='img col-md-4'>" +"<div class='overlay'><i class='ion-ios-play-outline'></i></div>" +"<img src='img/toppen.JPG'  alt='Toppen af isbjerget Radio WAIH'>" +"</div>"+"</div>" +"<p class='PodcastHeader col-md-8'>Toppen af Isbjerget</p>"+"<div class='playerContainer'><p>{$name}</p><p>{$row['show_host']}</p><p>Gæst: {$row['show_guest']}</p><audio controls><source src='audio/test.mp3' type='audio/mpeg'></audio></div>" +"</div>"}
var turKultur = {show_name: "turMedKultur"     ,div:"<div class='col-md-6 col-sm-6 wp3 senestePodcasts turKultur'>"+"<div class='overlay-effect effects'>" +"<div class='img col-md-4'>" +"<div class='overlay'><i class='ion-ios-play-outline'></i></div>" +"<img src='img/kultur.jpg'  alt='Tur med kultur Radio WAIH'>" + "</div>"+"</div>"     +"<p class='PodcastHeader col-md-8'>En tur med kultur</p>"  +"<div class='playerContainer'><p>{$name}</p><p>{$row['show_host']}</p><p>Gæst: {$row['show_guest']}</p><audio controls><source src='audio/test.mp3' type='audio/mpeg'></audio></div>" +"</div>"}
var samfund   = {show_name: "samfundsdebatten" ,div:"<div class='col-md-6 col-sm-6 wp3 senestePodcasts samfund'>"  +"<div class='overlay-effect effects'>" +"<div class='img col-md-4'>" +"<div class='overlay'><i class='ion-ios-play-outline'></i></div>" +"<img src='img/samfund.jpg' alt='Portfolio Item'>"+"</div>" +"</div>"                 +"<p class='PodcastHeader col-md-8'>Samfundsdebatten</p>"   +"<div class='playerContainer'><p>{$name}</p><p>{$row['show_host']}</p><p>Gæst: {$row['show_guest']}</p><audio controls><source src='audio/test.mp3' type='audio/mpeg'></audio></div>" +"</div>"}
var apropos   = {show_name: "apropos"          ,div:"<div class='col-md-6 col-sm-6 wp3 senestePodcasts apropos'>"  +"<div class='overlay-effect effects'>" +"<div class='img col-md-4'>" +"<div class='overlay'><i class='ion-ios-play-outline'></i></div>" +"<img src='img/apropos.jpg' alt='Portfolio Item'>"+"</div>"+"</div>"                  +"<p class='PodcastHeader col-md-8'>Apropos</p>"            +"<div class='playerContainer'><p>{$name}</p><p>{$row['show_host']}</p><p>Gæst: {$row['show_guest']}</p><audio controls><source src='audio/test.mp3' type='audio/mpeg'></audio></div>" +"</div>"}
var tabu      = {show_name: "aktivister"       ,div:"<div class='col-md-6 col-sm-6 wp3 senestePodcasts tabu'>"     +"<div class='overlay-effect effects'>" +"<div class='img col-md-4'>" +"<div class='overlay'><i class='ion-ios-play-outline'></i></div>" +"<img src='img/tabu.jpg'    alt='Tabu Radio WAIH'>" +"</div>" +"</div>"               +"<p class='PodcastHeader col-md-8'>Tabu</p>"               +"<div class='playerContainer'><p>{$name}</p><p>{$row['show_host']}</p><p>Gæst: {$row['show_guest']}</p><audio controls><source src='audio/test.mp3' type='audio/mpeg'></audio></div>" +"</div>"}
var familie   = {show_name: "enFamilieTing"    ,div:"<div class='col-md-6 col-sm-6 wp3 senestePodcasts familie'>"  +"<div class='overlay-effect effects'>" +"<div class='img col-md-4'>" +"<div class='overlay'><i class='ion-ios-play-outline'></i></div>" +"<img src='img/familie.jpg' alt='En familie ting... Radio WAIH'>" +"</div>" +"</div> "+"<p class='PodcastHeader col-md-8'>En familie ting...</p>" +"<div class='playerContainer'><p>{$name}</p><p>{$row['show_host']}</p><p>Gæst: {$row['show_guest']}</p><audio controls><source src='audio/test.mp3' type='audio/mpeg'></audio></div>" +"</div>"}

latestPodcasts();
setInterval(checkHalfOur, 1000*60);
function checkHalfOur() {
var mins = new Date().getMinutes();

if (mins < 10){
    mins = '0' + new Date().getMinutes()
} else {
    mins = new Date().getMinutes();
}

if(mins === "30"){
    latestPodcasts();
}

}

function latestPodcasts() {

    var time = new Date();
    var hh = time.getHours();
    var mm = time.getMinutes();

    if(hh < 10){
        hh = '0' + time.getHours();
    } else{
        hh = time.getHours();
    }

    if(mm < 10){
        mm = '0' + time.getMinutes();
    } else {
        mm = time.getMinutes();
    }

    time = hh + ':' + mm;
    var dayOftheWeek =  new Date().getDay();

    switch (dayOftheWeek) {
        case 1: if(time >= '19:10'){
            monday()
        } else {sunday()}
            break;
        case 2: if(time >= '19:10'){
            tuesday()
        } else {monday()}
            break;
        case 3: if(time >= '19:10'){
            wednesday()
        } else {tuesday()}
            break;
        case 4: if(time >= '19:10'){
            thursday()
        } else {wednesday()}
            break;
        case 5: if(time >= '19:10'){
            friday()
        } else {thursday()}
            break;
        case 6: if(time >= '19:10'){
            saturday()
        } else {friday()}
            break;
        case 0: if(time >= '19:10'){
            sunday()
        } else {saturday()}
            break;
    }
    function monday() {
        $(".latestPodcasts1").empty();
        $(".latestPodcasts1").append(
            upToDate.div + familie.div

        );
        $(".latestPodcasts2").empty();
        $(".latestPodcasts2").append(
            tabu.div + apropos.div
        );
    }
    
    function tuesday() {
        $(".latestPodcasts1").empty();
        $(".latestPodcasts1").append(
            isbjerg.div + upToDate.div

        );
        $(".latestPodcasts2").empty();
        $(".latestPodcasts2").append(
            familie.div + tabu.div
        );
    }
    
    function wednesday() {
        $(".latestPodcasts1").empty();
        $(".latestPodcasts1").append(
           turkultur.div + isbjerg.div

        );
        $(".latestPodcasts2").empty();
        $(".latestPodcasts2").append(
           upToDate.div + familie.div
        );
    }

    function thursday() {
        $(".latestPodcasts1").empty();
        $(".latestPodcasts1").append(
            samfund.div + turkultur.div

        );
        $(".latestPodcasts2").empty();
        $(".latestPodcasts2").append(
            isbjerg.div + upToDate.div
        );

    }

    function friday() {
        $(".latestPodcasts1").empty();
        $(".latestPodcasts1").append(
            apropos.div + samfund.div

        );
        $(".latestPodcasts2").empty();
        $(".latestPodcasts2").append(
            turkultur.div + isbjerg.div
        );
    }

    function saturday() {
        $(".latestPodcasts1").empty();
        $(".latestPodcasts1").append(
            tabu.div + apropos.div

        );
        $(".latestPodcasts2").empty();
        $(".latestPodcasts2").append(
            samfund.div + turkultur.div
        );
    }

    function sunday() {
        $(".latestPodcasts1").empty();
        $(".latestPodcasts1").append(
            familie.div + tabu.div
        );
        $(".latestPodcasts2").empty();
        $(".latestPodcasts2").append(
            apropos.div + samfund.div
        );
    }

}

$(document).one('click','.upToDate .overlay, .upToDate i',function () {
    $.get('../download_podcasts.php?show_name=' + upToDate.show_name + "&offset=0&limit=1",
        function (response) {
            $("div.upToDate > div.playerContainer").replaceWith(response);
            plyr.setup("div.upToDate > div.playerContainer");
            $("div.upToDate > div.playerContainer > p").addClass('animated bounceInLeft');
            $("div.upToDate > div.playerContainer > div.plyr ").addClass('animated bounceInLeft');
        })
});
$(document).one('click','.isbjerg .overlay, .isbjerg i',function () {
    $.get('../download_podcasts.php?show_name=' + isbjerg.show_name + "&offset=0&limit=1",
        function (response) {
            $("div.isbjerg > div.playerContainer").replaceWith(response);
            plyr.setup("div.isbjerg > div.playerContainer");
            $("div.isbjerg > div.playerContainer > p").addClass('animated bounceInLeft');
            $("div.isbjerg > div.playerContainer > div.plyr ").addClass('animated bounceInLeft');
        })
});
$(document).one('click','.turKultur .overlay, .turKultur i',function () {
    $.get('../download_podcasts.php?show_name=' + turKultur.show_name + "&offset=0&limit=1",
        function (response) {
            $("div.turKultur > div.playerContainer").replaceWith(response);
            plyr.setup("div.turKultur > div.playerContainer");
            $("div.turKultur > div.playerContainer > p").addClass('animated bounceInLeft');
            $("div.turKultur > div.playerContainer > div.plyr ").addClass('animated bounceInLeft');
        })
});
$(document).one('click','.samfund .overlay, .samfund i',function () {
    $.get('../download_podcasts.php?show_name=' + samfund.show_name + "&offset=0&limit=1",
        function (response) {
            $("div.samfund > div.playerContainer").replaceWith(response);
            plyr.setup("div.samfund > div.playerContainer");
            $("div.samfund > div.playerContainer > p").addClass('animated bounceInLeft');
            $("div.samfund > div.playerContainer > div.plyr ").addClass('animated bounceInLeft');
        })
});
$(document).one('click','.apropos .overlay, .apropos i',function () {
    $.get('../download_podcasts.php?show_name=' + apropos.show_name + "&offset=0&limit=1",
        function (response) {
            $("div.apropos > div.playerContainer").replaceWith(response);
            plyr.setup("div.apropos > div.playerContainer");
            $("div.apropos > div.playerContainer > p").addClass('animated bounceInLeft');
            $("div.apropos > div.playerContainer > div.plyr ").addClass('animated bounceInLeft');
        })
});
$(document).one('click','.tabu .overlay, .tabu i',function () {
    $.get('../download_podcasts.php?show_name=' + tabu.show_name + "&offset=0&limit=1",
        function (response) {
            $("div.tabu > div.playerContainer").replaceWith(response);
            plyr.setup("div.tabu > div.playerContainer");
            $("div.tabu > div.playerContainer > p").addClass('animated bounceInLeft');
            $("div.tabu > div.playerContainer > div.plyr ").addClass('animated bounceInLeft');
        })
});
$(document).one('click','.familie .overlay, .familie i',function () {
    $.get('../download_podcasts.php?show_name=' + familie.show_name + "&offset=0&limit=1",
        function (response) {
            $("div.familie > div.playerContainer").replaceWith(response);
            plyr.setup("div.familie > div.playerContainer");
            $("div.familie > div.playerContainer > p").addClass('animated bounceInLeft');
            $("div.familie > div.playerContainer > div.plyr ").addClass('animated bounceInLeft');
        })
});


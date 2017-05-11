/**
 * Created by muneebashraf on 26/04/2017.
 */

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
        var apropos ="<div class='col-md-6 col-sm-6 wp3 senestePodcasts'>"+"<div class='overlay-effect effects'>"+"<div class='img col-md-4'>"+"<a href='#' onclick="+"MM_openBrWindow('apropos-lyd.html','','resizable=yes,width=540,height=300')"+" class='expand'>"+"<div class='overlay'><i class='ion-ios-play-outline'></i></div>"+"<img src='img/apropos.jpg' alt='Portfolio Item'>"+"</a>"+"</div>"+"</div>"+"<p class='PodcastHeader col-md-8'>Apropos</p>"+"<div id='aproposPlayerText1' class='infoText'></div>"+"</div>";
        var tabu ="<div class='col-md-6 col-sm-6 wp3 senestePodcasts'>" +"<div class='overlay-effect effects'>" +"<div class='img col-md-4'>" +"<a href='#' onclick="+"MM_openBrWindow('tabu-lyd.html','','resizable=yes,width=540,height=300')"+" class='expand'>" +"<div class='overlay'><i class='ion-ios-play-outline'></i></div>" +"<img src='img/tabu.jpg' alt='Tabu Radio WAIH'>" +"</a>" +"</div>" +"</div>" +"<p class='PodcastHeader col-md-8'>Tabu</p>" +"<div id='tabuPlayerText1' class='infoText'></div>" +"</div>";
        var familie ="<div class='col-md-6 col-sm-6 wp3 senestePodcasts'>" +"<div class='overlay-effect effects'>" +"<div class='img col-md-4'>" +"<a href='#' onclick="+"MM_openBrWindow('familie-lyd.html','','resizable=yes,width=540,height=300')"+" class='expand'>" +"<div class='overlay'><i class='ion-ios-play-outline'></i></div>" +"<img src='img/familie.jpg' alt='En familie ting... Radio WAIH'>" +"</a>" +"</div>" +"</div> " +"<p class='PodcastHeader col-md-8'>En familie ting...</p>" +"<div id='familiePlayerText1' class='infoText'></div>" +"</div>";
        var upToDate =  "<div class='col-md-6 col-sm-6 wp3 senestePodcasts'>" +"<div class='overlay-effect effects'>" +"<div class='img col-md-4'>" +"<a href='#' onclick="+"onclick="+"MM_openBrWindow('UpToDate-lyd.html','','resizable=yes,width=540,height=300')"+" class='expand'>" +"<div class='overlay'><i class='ion-ios-play-outline'></i></div>" +"<img src='img/myter.jpg' alt='Up to date Radio WAIH'>" +"</a>" +"</div>" +"</div>" +"<p class='PodcastHeader col-md-8'>Up to date</p>" +"<div id='religiøsePlayerText1' class='infoText'></div>" +"</div>";
        $(".latestPodcasts1").empty();
        $(".latestPodcasts1").append(
            upToDate + familie

        );
        $(".latestPodcasts2").empty();
        $(".latestPodcasts2").append(
            tabu + apropos
        );
    }
    
    function tuesday() {
        var tabu ="<div class='col-md-6 col-sm-6 wp3 senestePodcasts'>" +"<div class='overlay-effect effects'>" +"<div class='img col-md-4'>" +"<a href='#' onclick="+"MM_openBrWindow('tabu-lyd.html','','resizable=yes,width=540,height=300')"+" class='expand'>" +"<div class='overlay'><i class='ion-ios-play-outline'></i></div>" +"<img src='img/tabu.jpg' alt='Tabu Radio WAIH'>" +"</a>" +"</div>" +"</div>" +"<p class='PodcastHeader col-md-8'>Tabu</p>" +"<div id='tabuPlayerText1' class='infoText'></div>" +"</div>";
        var familie ="<div class='col-md-6 col-sm-6 wp3 senestePodcasts'>" +"<div class='overlay-effect effects'>" +"<div class='img col-md-4'>" +"<a href='#' onclick="+"MM_openBrWindow('familie-lyd.html','','resizable=yes,width=540,height=300')"+" class='expand'>" +"<div class='overlay'><i class='ion-ios-play-outline'></i></div>" +"<img src='img/familie.jpg' alt='En familie ting... Radio WAIH'>" +"</a>" +"</div>" +"</div> " +"<p class='PodcastHeader col-md-8'>En familie ting...</p>" +"<div id='familiePlayerText1' class='infoText'></div>" +"</div>";
        var upToDate =  "<div class='col-md-6 col-sm-6 wp3 senestePodcasts'>" +"<div class='overlay-effect effects'>" +"<div class='img col-md-4'>" +"<a href='#' onclick="+"MM_openBrWindow('UpToDate-lyd.html','','resizable=yes,width=540,height=300')"+" class='expand'>" +"<div class='overlay'><i class='ion-ios-play-outline'></i></div>" +"<img src='img/myter.jpg' alt='Up to date Radio WAIH'>" +"</a>" +"</div>" +"</div>" +"<p class='PodcastHeader col-md-8'>Up to date</p>" +"<div id='religiøsePlayerText1' class='infoText'></div>" +"</div>";
        var isbjerg = "<div class='col-md-6 col-sm-6 wp3 senestePodcasts'> " +"<div class='overlay-effect effects'> " +"<div class='img col-md-4'> " +"<a href='#' onclick="+"MM_openBrWindow('isbjerget-lyd.html','','resizable=no,width=540,height=300')"+" class='expand'> " +"<div class='overlay'><i class='ion-ios-play-outline'></i></div> " +"<img src='img/toppen.JPG' alt='Toppen af isbjerget Radio WAIH'> " +"</a> " +"</div> " +"</div> " +"<p class='PodcastHeader col-md-8'>Toppen af Isbjerget</p> " +"<div id='isbjergetPlayerText1' class='infoText'></div> " +"</div> ";
        $(".latestPodcasts1").empty();
        $(".latestPodcasts1").append(
            isbjerg + upToDate

        );
        $(".latestPodcasts2").empty();
        $(".latestPodcasts2").append(
            familie + tabu
        );
    }
    
    function wednesday() {
        var familie ="<div class='col-md-6 col-sm-6 wp3 senestePodcasts'>" +"<div class='overlay-effect effects'>" +"<div class='img col-md-4'>" +"<a href='#' onclick="+"MM_openBrWindow('familie-lyd.html','','resizable=yes,width=540,height=300')"+" class='expand'>" +"<div class='overlay'><i class='ion-ios-play-outline'></i></div>" +"<img src='img/familie.jpg' alt='En familie ting... Radio WAIH'>" +"</a>" +"</div>" +"</div> " +"<p class='PodcastHeader col-md-8'>En familie ting...</p>" +"<div id='familiePlayerText1' class='infoText'></div>" +"</div>";
        var upToDate =  "<div class='col-md-6 col-sm-6 wp3 senestePodcasts'>" +"<div class='overlay-effect effects'>" +"<div class='img col-md-4'>" +"<a href='#' onclick="+"MM_openBrWindow('UpToDate-lyd.html','','resizable=yes,width=540,height=300')"+" class='expand'>" +"<div class='overlay'><i class='ion-ios-play-outline'></i></div>" +"<img src='img/myter.jpg' alt='Up to date Radio WAIH'>" +"</a>" +"</div>" +"</div>" +"<p class='PodcastHeader col-md-8'>Up to date</p>" +"<div id='religiøsePlayerText1' class='infoText'></div>" +"</div>";
        var isbjerg = "<div class='col-md-6 col-sm-6 wp3 senestePodcasts'> " +"<div class='overlay-effect effects'> " +"<div class='img col-md-4'> " +"<a href='#' onclick="+"MM_openBrWindow('isbjerget-lyd.html','','resizable=no,width=540,height=300')"+" class='expand'> " +"<div class='overlay'><i class='ion-ios-play-outline'></i></div> " +"<img src='img/toppen.JPG' alt='Toppen af isbjerget Radio WAIH'> " +"</a> " +"</div> " +"</div> " +"<p class='PodcastHeader col-md-8'>Toppen af Isbjerget</p> " +"<div id='isbjergetPlayerText1' class='infoText'></div> " +"</div> ";
        var turkultur =  "<div class='col-md-6 col-sm-6 wp3 senestePodcasts'>" + "<div class='overlay-effect effects'>" + "<div class='img col-md-4'>" + "<a href='#' onclick="+"MM_openBrWindow('tur-kultur-lyd.html','','resizable=yes,width=540,height=300')"+" class='expand'>" + "<div class='overlay'><i class='ion-ios-play-outline'></i></div>" + "<img src='img/kultur.jpg' alt='Tur med kultur Radio WAIH'>" + "</a>" + "</div>" + "</div>" + "<p class='PodcastHeader col-md-8'>En tur med kultur</p>" + "<div id='kulturPlayerText1' class='infoText'></div> " + "</div> ";
        $(".latestPodcasts1").empty();
        $(".latestPodcasts1").append(
           turkultur + isbjerg

        );
        $(".latestPodcasts2").empty();
        $(".latestPodcasts2").append(
           upToDate + familie
        );
    }

    function thursday() {
        var upToDate =  "<div class='col-md-6 col-sm-6 wp3 senestePodcasts'>" +"<div class='overlay-effect effects'>" +"<div class='img col-md-4'>" +"<a href='#' onclick="+"MM_openBrWindow('UpToDate-lyd.html','','resizable=yes,width=540,height=300')"+" class='expand'>" +"<div class='overlay'><i class='ion-ios-play-outline'></i></div>" +"<img src='img/myter.jpg' alt='Up to date Radio WAIH'>" +"</a>" +"</div>" +"</div>" +"<p class='PodcastHeader col-md-8'>Up to date</p>" +"<div id='religiøsePlayerText1' class='infoText'></div>" +"</div>";
        var isbjerg = "<div class='col-md-6 col-sm-6 wp3 senestePodcasts'> " +"<div class='overlay-effect effects'> " +"<div class='img col-md-4'>" +"<a href='#' onclick="+"MM_openBrWindow('isbjerget-lyd.html','','resizable=no,width=540,height=300')"+" class='expand'> " +"<div class='overlay'><i class='ion-ios-play-outline'></i></div> " +"<img src='img/toppen.JPG' alt='Toppen af isbjerget Radio WAIH'> " +"</a> " +"</div> " +"</div> " +"<p class='PodcastHeader col-md-8'>Toppen af Isbjerget</p> " +"<div id='isbjergetPlayerText1' class='infoText'></div> " +"</div> ";
        var turkultur =  "<div class='col-md-6 col-sm-6 wp3 senestePodcasts'>" + "<div class='overlay-effect effects'>" + "<div class='img col-md-4'>" +"<a href='#' onclick="+"MM_openBrWindow('tur-kultur-lyd.html','','resizable=yes,width=540,height=300')"+" class='expand'>" + "<div class='overlay'><i class='ion-ios-play-outline'></i></div>" + "<img src='img/kultur.jpg' alt='Tur med kultur Radio WAIH'>" + "</a>" + "</div>" + "</div>" + "<p class='PodcastHeader col-md-8'>En tur med kultur</p>" + "<div id='kulturPlayerText1' class='infoText'></div> " + "</div> ";
        var samfund ="<div class='col-md-6 col-sm-6 wp3 senestePodcasts'>" +"<div class='overlay-effect effects'>" +"<div class='img col-md-4'>" +"<a href='#' onclick="+"MM_openBrWindow('samfund-lyd.html','','resizable=yes,width=540,height=300')"+" class='expand'>" +"<div class='overlay'><i class='ion-ios-play-outline'></i></div>" +"<img src='img/samfund.jpg' alt='Portfolio Item'>" +"</a>" +"</div>" +"</div>" +"<p class='PodcastHeader col-md-8'>Samfundsdebatten</p>" +"<div id='samfundPlayerText1' class='infoText'></div>" +"</div>";
        $(".latestPodcasts1").empty();
        $(".latestPodcasts1").append(
            samfund + turkultur + "<div></div>"

        );
        $(".latestPodcasts2").empty();
        $(".latestPodcasts2").append(
            isbjerg + upToDate
        );

    }

    function friday() {
        var isbjerg = "<div class='col-md-6 col-sm-6 wp3 senestePodcasts'> " +"<div class='overlay-effect effects'> " +"<div class='img col-md-4'> " +"<a href='#' onclick="+"MM_openBrWindow('isbjerget-lyd.html','','resizable=no,width=540,height=300')"+" class='expand'> " +"<div class='overlay'><i class='ion-ios-play-outline'></i></div> " +"<img src='img/toppen.JPG' alt='Toppen af isbjerget Radio WAIH'> " +"</a> " +"</div> " +"</div> " +"<p class='PodcastHeader col-md-8'>Toppen af Isbjerget</p> " +"<div id='isbjergetPlayerText1' class='infoText'></div> " +"</div> ";
        var turkultur =  "<div class='col-md-6 col-sm-6 wp3 senestePodcasts'>" + "<div class='overlay-effect effects'>" + "<div class='img col-md-4'>" + "<a href='#' onclick="+"MM_openBrWindow('tur-kultur-lyd.html','','resizable=yes,width=540,height=300')"+" class='expand'>" + "<div class='overlay'><i class='ion-ios-play-outline'></i></div>" + "<img src='img/kultur.jpg' alt='Tur med kultur Radio WAIH'>" + "</a>" + "</div>" + "</div>" + "<p class='PodcastHeader col-md-8'>En tur med kultur</p>" + "<div id='kulturPlayerText1' class='infoText'></div> " + "</div> ";
        var samfund ="<div class='col-md-6 col-sm-6 wp3 senestePodcasts'>" +"<div class='overlay-effect effects'>" +"<div class='img col-md-4'>" +"<a href='#' onclick="+"MM_openBrWindow('samfund-lyd.html','','resizable=yes,width=540,height=300')"+" class='expand'>" +"<div class='overlay'><i class='ion-ios-play-outline'></i></div>" +"<img src='img/samfund.jpg' alt='Portfolio Item'>" +"</a>" +"</div>" +"</div>" +"<p class='PodcastHeader col-md-8'>Samfundsdebatten</p>" +"<div id='samfundPlayerText1' class='infoText'></div>" +"</div>";
        var apropos = "<div class='col-md-6 col-sm-6 wp3 senestePodcasts'>"+"<div class='overlay-effect effects'>"+"<div class='img col-md-4'>"+"<a href='#' onclick="+"MM_openBrWindow('apropos-lyd.html','','resizable=yes,width=540,height=300')"+" class='expand'>"+"<div class='overlay'><i class='ion-ios-play-outline'></i></div>"+"<img src='img/apropos.jpg' alt='Portfolio Item'>"+"</a>"+"</div>"+"</div>"+"<p class='PodcastHeader col-md-8'>Apropos</p>"+"<div id='aproposPlayerText1' class='infoText'></div>"+"</div>";
        $(".latestPodcasts1").empty();
        $(".latestPodcasts1").append(
            apropos + samfund

        );
        $(".latestPodcasts2").empty();
        $(".latestPodcasts2").append(
            turkultur + isbjerg
        );
    }

    function saturday() {
        var turkultur =  "<div class='col-md-6 col-sm-6 wp3 senestePodcasts'>" + "<div class='overlay-effect effects'>" + "<div class='img col-md-4'>" + "<a href='#' onclick="+"MM_openBrWindow('tur-kultur-lyd.html','','resizable=yes,width=540,height=300')"+" class='expand'>" + "<div class='overlay'><i class='ion-ios-play-outline'></i></div>" + "<img src='img/kultur.jpg' alt='Tur med kultur Radio WAIH'>" + "</a>" + "</div>" + "</div>" + "<p class='PodcastHeader col-md-8'>En tur med kultur</p>" + "<div id='kulturPlayerText1' class='infoText'></div> " + "</div> ";
        var samfund ="<div class='col-md-6 col-sm-6 wp3 senestePodcasts'>" +"<div class='overlay-effect effects'>" +"<div class='img col-md-4'>" +"<a href='#' onclick="+"MM_openBrWindow('samfund-lyd.html','','resizable=yes,width=540,height=300')"+" class='expand'>" +"<div class='overlay'><i class='ion-ios-play-outline'></i></div>" +"<img src='img/samfund.jpg' alt='Portfolio Item'>" +"</a>" +"</div>" +"</div>" +"<p class='PodcastHeader col-md-8'>Samfundsdebatten</p>" +"<div id='samfundPlayerText1' class='infoText'></div>" +"</div>";
        var apropos = "<div class='col-md-6 col-sm-6 wp3 senestePodcasts'>"+"<div class='overlay-effect effects'>"+"<div class='img col-md-4'>"+"<a href='#' onclick="+"MM_openBrWindow('apropos-lyd.html','','resizable=yes,width=540,height=300')"+" class='expand'>"+"<div class='overlay'><i class='ion-ios-play-outline'></i></div>"+"<img src='img/apropos.jpg' alt='Portfolio Item'>"+"</a>"+"</div>"+"</div>"+"<p class='PodcastHeader col-md-8'>Apropos</p>"+"<div id='aproposPlayerText1' class='infoText'></div>"+"</div>";
        var tabu ="<div class='col-md-6 col-sm-6 wp3 senestePodcasts'>" +"<div class='overlay-effect effects'>" +"<div class='img col-md-4'>" +"<a href='#' onclick="+"MM_openBrWindow('tabu-lyd.html','','resizable=yes,width=540,height=300')"+" class='expand'>" +"<div class='overlay'><i class='ion-ios-play-outline'></i></div>" +"<img src='img/tabu.jpg' alt='Tabu Radio WAIH'>" +"</a>" +"</div>" +"</div>" +"<p class='PodcastHeader col-md-8'>Tabu</p>" +"<div id='tabuPlayerText1' class='infoText'></div>" +"</div>";
        $(".latestPodcasts1").empty();
        $(".latestPodcasts1").append(
            tabu + apropos

        );
        $(".latestPodcasts2").empty();
        $(".latestPodcasts2").append(
            samfund + turkultur
        );
    }

    function sunday() {
        var samfund ="<div class='col-md-6 col-sm-6 wp3 senestePodcasts'>" +"<div class='overlay-effect effects'>" +"<div class='img col-md-4'>" +"<a href='#' onclick="+"MM_openBrWindow('samfund-lyd.html','','resizable=yes,width=540,height=300')"+" class='expand'>" +"<div class='overlay'><i class='ion-ios-play-outline'></i></div>" +"<img src='img/samfund.jpg' alt='Portfolio Item'>" +"</a>" +"</div>" +"</div>" +"<p class='PodcastHeader col-md-8'>Samfundsdebatten</p>" +"<div id='samfundPlayerText1' class='infoText'></div>" +"</div>";
        var apropos = "<div class='col-md-6 col-sm-6 wp3 senestePodcasts'>"+"<div class='overlay-effect effects'>"+"<div class='img col-md-4'>"+"<a href='#' onclick="+"MM_openBrWindow('apropos-lyd.html','','resizable=yes,width=540,height=300')"+" class='expand'>"+"<div class='overlay'><i class='ion-ios-play-outline'></i></div>"+"<img src='img/apropos.jpg' alt='Portfolio Item'>"+"</a>"+"</div>"+"</div>"+"<p class='PodcastHeader col-md-8'>Apropos</p>"+"<div id='aproposPlayerText1' class='infoText'></div>"+"</div>";
        var tabu ="<div class='col-md-6 col-sm-6 wp3 senestePodcasts'>" +"<div class='overlay-effect effects'>" +"<div class='img col-md-4'>" +"<a href='#' onclick="+"MM_openBrWindow('tabu-lyd.html','','resizable=yes,width=540,height=300')"+" class='expand'>" +"<div class='overlay'><i class='ion-ios-play-outline'></i></div>" +"<img src='img/tabu.jpg' alt='Tabu Radio WAIH'>" +"</a>" +"</div>" +"</div>" +"<p class='PodcastHeader col-md-8'>Tabu</p>" +"<div id='tabuPlayerText1' class='infoText'></div>" +"</div>";
        var familie ="<div class='col-md-6 col-sm-6 wp3 senestePodcasts'>" +"<div class='overlay-effect effects'>" +"<div class='img col-md-4'>" +"<a href='#' onclick="+"MM_openBrWindow('familie-lyd.html','','resizable=yes,width=540,height=300')"+" class='expand'>" +"<div class='overlay'><i class='ion-ios-play-outline'></i></div>" +"<img src='img/familie.jpg' alt='En familie ting... Radio WAIH'>" +"</a>" +"</div>" +"</div> " +"<p class='PodcastHeader col-md-8'>En familie ting...</p>" +"<div id='familiePlayerText1' class='infoText'></div>" +"</div>";
        $(".latestPodcasts1").empty();
        $(".latestPodcasts1").append(
            familie + tabu

        );
        $(".latestPodcasts2").empty();
        $(".latestPodcasts2").append(
            apropos + samfund
        );
    }



}

/**
 * Created by muneebashraf on 21/04/2017.
 */

//Sætter en flexibel højde på program diven
var biggestHeight = 0;
function height() {
$(".programmer *").each(function () {
    if($(this).height() > biggestHeight){
        biggestHeight = $(this).height()
    }});$(".programmer").height(biggestHeight);}
var loop = setTimeout(height,100);

var stateObj = { programmer: "programmer" };

window.onpopstate = function(event) {
};
addPodcasts("17-04-2017","Vært: Johannes<br>Gæster: Omar El-khatib & Abu Yunes<br>Dato: 17/04-2017");
addPodcasts("10-04-2017","Vært: Johannes<br>Gæster: Engin Bozkir & Elias Rama<br>Dato: 10/04-2017");
addPodcasts("03-04-2017","Vært: Johannes<br>Gæster: Elias Rama<br>Dato: 02/04-2017");
addPodcasts("27-03-2017","Vært: Johannes<br>Gæster: Engin Bozkir & Elias Rama<br>Dato: 27/03-2017");
addPodcasts("20-03-2017","Vært: Johannes<br>Gæster: Engin Bozkir & Abu Yunes<br>Dato: 20/03-2017");
addPodcasts("13-03-2017","Vært: Johannes<br>Gæst: Engin Bozkir<br>Dato: 13/03-2017");
addPodcasts("06-03-2017","Vært: Johannes & Abu Yunes<br>Gæst: Engin Bozkir<br>Dato: 06/03-2017");
addPodcasts("27:02-2017","Vært: Elias Rama<br>Gæst: Lamies Nassri<br>Dato: 27/02-2017");
addPodcasts("20:02-2017","Vært: Johannes<br>Gæst:  Tarek Ghanoum<br>Dato: 20/02-2017");
addPodcasts("13:02-2017","Vært: Johannes<br>Gæst: Abdullahi Hassan<br>Dato: 13/02-2017");
addPodcasts("06:02-2017","Vært: Elias Rama<br>Gæst: Tarek Ghanoum<br>Dato: 06/02-2017");


function isbjerg() {
    $(".podcastsPlayer").empty();
addPodcasts("07:02-2017.mp3","Vært: Abu Karim<br>Profil: Nødhjælpsarbejder, skuespiller og meget andet<br>Gæst: Khalid Alsubeihi");
addPodcasts("14:02-2017.mp3","Vært: Abu Karim<br>Profil: Professionel fighter & sociale pædagog<br>Gæst: Rhassan Muhareb");
addPodcasts("21:02-2017.mp3","Vært: Abu Karim<br>Profil: Tidligere topkriminel<br>Gæst: Abu Yunes");
addPodcasts("28:02-2017.mp3","Vært: Abu Karim<br>Profil: Ung iværksætter<br>Gæst: Kareem Ahmed");
addPodcasts("07-03-2017.mp3","Vært: Abu Karim<br>Profil: Dokumentarist & forfatter<br>Gæst: Nagieb Khaja");
addPodcasts("14-03-2017.mp3","Vært: Abu Karim<br>Profil: Stifter af Kamelmælk Danmark<br>Gæst: Pernille Lykke Christoffersen");
addPodcasts("21-03-2017.mp3","Værter: Abu Karim<br>Emne: Mohammad Ali<br>Gæst: Saleh Mbamba");
addPodcasts("28-03-2017.mp3","Værter: Abu Karim<br>Emne: Radio WAIH<br>Gæst:");
addPodcasts("04-04-2017.mp3","Værter: Abu Karim<br>Profil: Verdenskendte nasheed-sanger<br>Gæst: Mohanad Mansour");
addPodcasts("11-04-2017.mp3","Værter: Aysha Farooqui<br>Profil: Læge og medstifter af NGO<br>Gæst: Uswa Nissar Anjum");
addPodcasts("18-04-2017.mp3","Værter: Aysha Farooqui<br>Profil: Læge & digter<br>Gæst: Amna Shah Syed");
    plyr.setup();
    stateObj = { programmer: "programmer" };
    history.pushState(stateObj, "page 1", "#ToppenAfIsbjerget");
}

function turKultur(){
    $(".podcastsPlayer").empty();

js_audioPlayer(10,"audio/08:02-2017.mp3", "Vært: Aysha Farooqui<br>Emne: Kulturens rolle hos danske muslimer<br>Gæst: Kaoutar Elhamss");
js_audioPlayer(9,"audio/01:03-2017.mp3", "Vært: Johannes<br>Emne: Fordomme og diskrimination<br>Gæst: Alisher Ceran");
js_audioPlayer(8,"audio/15-03-2017.mp3", "Vært: Johannes<br>Emne: Hadsforbrydelser imod muslimer<br>Gæst: Farouk Hassouni");
js_audioPlayer(7,"audio/22-03-2017.mp3", "Vært: Johannes<br>Emne: Danske muslimer med pakistanske rødder<br>Gæst: Arsal Tahseen");
js_audioPlayer(6,"audio/29-03-2017.mp3", "Vært: Johannes<br>Emne: Danske muslimer med somaliske rødder<br>Gæst: Adam & Abdighani");
js_audioPlayer(5,"audio/05-04-2017.mp3", "Vært: Johannes<br>Emne: Danske muslimer med jyske rødder<br>Gæst: Dean Abdullah");
js_audioPlayer(4,"audio/12-04-2017.mp3", "Vært: Johannes<br>Emne: Danske muslimer med albanske rødder<br>Gæst: Lavdrim Elmazi");
js_audioPlayer(3,"audio/19-04-2017.mp3", "Vært: Johannes<br>Emne: Danske muslimer med tyrkiske rødder<br>Gæst: Burhan Bayhan");
js_audioPlayer(2,"audio/26-04-2017.mp3", "<br>Vært: Johannes<br>Emne: Recap af En tur med kultur<br>");
js_audioPlayer(1,"audio/10-05-2017.mp3", "<br>Vært: Johannes<br>Emne: Danske muslimer med afghanske rødder<br>Gæst: Ahmad Masood Popal");
    plyr.setup();
    stateObj = { programmer: "programmer" };
    history.pushState(stateObj, "page 1", "#ToppenAfIsbjerget");
}

$(document).on('click','.programsMini li',function () {
    if($(this).find('div').hasClass('isbjerg')) {
        isbjerg();
        $(".isbjerg").addClass('active');
        $(".programHeadline").text('Toppen af isbjerget');
        $(".program-upto").addClass('animated slideOutLeft');
        $(".program-isbjerg").css('display', 'block').addClass('animated slideInRight')


    }})


function addPodcasts(audioPath,title){

$(".podcastsPlayer").append(
        "<div class='playerContainer'>"+
        "<p>"+title+"</p>" +
        "<audio controls class='js-player' >" +
        "<source src='audio/"+audioPath+".mp3' type='audio/mp3'>" +
        "</audio>"+
        "</div>"

)}






 
 

/**
 * Created by muneebashraf on 21/04/2017.
 */

addPodcasts("06:02-2017","Vært: Elias Rama<br>Gæst: Tarek Ghanoum<br>Dato: 06/02-2017");
addPodcasts("13:02-2017","Vært: Johannes<br>Gæst: Abdullahi Hassan<br>Dato: 13/02-2017");
addPodcasts("20:02-2017","Vært: Johannes<br>Gæst:  Tarek Ghanoum<br>Dato: 20/02-2017");
addPodcasts("27:02-2017","Vært: Elias Rama<br>Gæst: Lamies Nassri<br>Dato: 27/02-2017");
addPodcasts("06-03-2017","Vært: Johannes & Abu Yunes<br>Gæst: Engin Bozkir<br>Dato: 06/03-2017");    
addPodcasts("13-03-2017","Vært: Johannes<br>Gæst: Engin Bozkir<br>Dato: 13/03-2017");                
addPodcasts("20-03-2017","Vært: Johannes<br>Gæster: Engin Bozkir & Abu Yunes<br>Dato: 20/03-2017");  
addPodcasts("27-03-2017","Vært: Johannes<br>Gæster: Engin Bozkir & Elias Rama<br>Dato: 27/03-2017"); 
addPodcasts("03-04-2017","Vært: Johannes<br>Gæster: Elias Rama<br>Dato: 02/04-2017");                
addPodcasts("10-04-2017","Vært: Johannes<br>Gæster: Engin Bozkir & Elias Rama<br>Dato: 10/04-2017"); 
addPodcasts("17-04-2017","Vært: Johannes<br>Gæster: Omar El-khatib & Abu Yunes<br>Dato: 17/04-2017");

function addPodcasts(audioPath,title){

$(".podcastsPlayer").append(
        "<div class='playerContainer'>"+
        "<p>"+title+"</p>" +
        "<audio controls class='js-player' >" +
        "<source src='audio/"+audioPath+".mp3' type='audio/mp3'>" +
        "</audio>"+
        "</div>"

)}

function isbjerg() {
    $(".podcastsContainer").empty();
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
}

$(document).on('click','.programsMini li',function () {
    console.log($(this).find('div'));
    $(".programsMini li").find('div').removeClass('active');
    $(this).find('div').addClass('active');
    if($(this).find('div').hasClass('isbjerg')){
        $(".programHeadline").text('Toppen af isbjerget');
        $(".program-upto").animate({
            left:"-1500px"
        },1000, function () {
            $(".program-upto").css('display','none');
        });
        $(".program-isbjerg").css('display','block').animate({
            left:'0'
        },1000)




    }else if($(this).find('div').hasClass('upto')){
        $(".programHeadline").text('Up to Date');
        $(".program-isbjerg").animate({
            left:"1500px"
        },1000, function () {
            $(".program-isbjerg").css('display','none');
        });
        $(".program-upto").css('display','block').animate({
            left:'0'
        },1000)

    }

})





 
 
 
 
 
 

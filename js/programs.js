/**
 * Created by muneebashraf on 21/04/2017.
 */



addPodcasts("06:02-2017","Vært: Elias Rama<br>Gæst: Tarek Ghanoum<br>Dato: 06/02-2017");
addPodcasts("13:02-2017","Vært: Johannes<br>Gæst: Abdullahi Hassan<br>Dato: 13/02-2017");
addPodcasts("20:02-2017","Vært: Johannes<br>Gæst:  Tarek Ghanoum<br>Dato: 20/02-2017");
addPodcasts("27:02-2017","Vært: Elias Rama<br>Gæst: Lamies Nassri<br>Dato: 27/02-2017");
addPodcasts("06-03-2017", "Vært: Johannes & Abu Yunes<br>Gæst: Engin Bozkir<br>Dato: 06/03-2017");
addPodcasts("13-03-2017", "Vært: Johannes<br>Gæst: Engin Bozkir<br>Dato: 13/03-2017");
addPodcasts("20-03-2017", "Vært: Johannes<br>Gæster: Engin Bozkir & Abu Yunes<br>Dato: 20/03-2017");
addPodcasts("27-03-2017",  "Vært: Johannes<br>Gæster: Engin Bozkir & Elias Rama<br>Dato: 27/03-2017");
addPodcasts("03-04-2017",  "Vært: Johannes<br>Gæster: Elias Rama<br>Dato: 02/04-2017");
addPodcasts("10-04-2017",  "Vært: Johannes<br>Gæster: Engin Bozkir & Elias Rama<br>Dato: 10/04-2017");
addPodcasts("17-04-2017",  "Vært: Johannes<br>Gæster: Omar El-khatib & Abu Yunes<br>Dato: 17/04-2017");

function addPodcasts(audioPath,title){

$(".podcastsPlayer").append(
        "<div class='playerContainer'>"+
        "<p>"+title+"</p>" +
        "<audio controls class='js-player' >" +
        "<source src='audio/"+audioPath+".mp3' type='audio/mp3'>" +
        "</audio>"+
        "</div>"

)

}

 
 
 
 
 
 
 
 
 
 
 

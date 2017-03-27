/**
 * Created by muneebashraf on 20/02/2017.
 */



js_audioPlayer(1,"audio/03:02-2017.mp3","Vært: Zainab Nasrati<br>Emne: Empati<br>Gæst: Ali Nicolaisen");
js_audioPlayer(2,"audio/10:02-2017.mp3", "Vært: Lubna Ahmed<br>Emne: Tonen i den offentlige debat<br>Gæst: Digter og debattør, Özcan Ajrulovski");
js_audioPlayer(3,"audio/17:02-2017.mp3",  "Vært:Zainab Nasrati<br>Emne: Mindfulnessog den muslimske bøn <br>Gæst: Sprogpsykolog og mentor Hamida Naji");
js_audioPlayer(4,"audio/24:02-2017.mp3",  "Vært: Aysha Farooqui<br>Emne: Uddannelsespres <br>Gæst: Jeannett Skov");
js_audioPlayer(5,"audio/03-03-2017.mp3", "Vært: Zainab Nasrati<br>Emne: Danskheden hos den helt unge generation<br>Gæster: Caroline Ousager & Osama Samsam ");
js_audioPlayer(6,"audio/10-03-2017.mp3", "Værter: Aysha Farooqui og Elias Rama<br>Emne: Nike's hijab, inklusion eller kapitalisering?<br>Gæster: Zarife Øzcan, Karima Doui og Laila Kristensen Rashid");
js_audioPlayer(7,"audio/17-03-2017.mp3", "Værter: Elias Rama<br>Emne: Old School vs. New School<br>Gæste: Imran Shah");
js_audioPlayer(8,"audio/En tur med kultu.mp3",  "Test8 ");



function js_audioPlayer(location,file, name) {

    $.ajax({
        url:file,
        type:'HEAD',
        error: function()
        {
            $("#player"+location).remove();
            //file does not exist
        },
        success: function()
        {
            $("#player"+location).append(
                "<div id='jquery_jplayer_"+location+"' class=jp-jplayer'></div>" +
                "<div id='jp_interface_"+location+"' class='jp-audio' role='application' aria-label='media player'>"+
                "<div class='jp-type-single'>"+
                "<div class='jp-gui jp-interface'>"+
                "<div class='jp-controls'>"+
                "<button class='jp-play' role='button' tabindex='0'>play</button>"+
                "</div>"+
                "<div class='jp-progress'>"+
                "<div class='jp-seek-bar'>"+
                "<div class='jp-play-bar'></div>"+
                "</div>"+
                "</div>"+
                "<div class='jp-volume-controls'>"+
                "<button class='jp-mute' role='button' tabindex=0>mute</button>"+
                "<button class='jp-volume-max' role='button' tabindex='0'>max volume</button>"+
                "<div class='jp-volume-bar'>"+
                "<div class='jp-volume-bar-value'></div>"+
                "</div>"+
                "</div>"+
                "<div class='jp-time-holder'>"+
                "<div class='jp-current-time' role='timer' aria-label='time'>&nbsp;</div>"+
                "<div class='jp-duration' role='timer' aria-label='duration'>&nbsp;</div>"+
                "</div>"+
                "</div>"+
                "<div class='jp-no-solution'>"+
                "<span>Update Required</span>"+
                "To play the media you will need to either update your browser to a recent version or update your <a href='http://get.adobe.com/flashplayer/ target=_blank'>Flash plugin</a>"+
                "</div>"+
                "</div>"+
                "</div>");

            $("#jquery_jplayer_" + location).before("<h3>"+name+"</h3>");
            jQuery("#jquery_jplayer_" + location).jPlayer( {
                ready: function () {
                    jQuery(this).jPlayer("setMedia", {
                        mp3: file
                    });
                },
                cssSelectorAncestor: "#jp_interface_" + location,
                swfPath: "js/jplayer",
                wmode: "window",
                useStateClassSkin: true,
                autoBlur: false,
                smoothPlayBar: true,
                keyEnabled: true,
                remainingDuration: true,
                toggleDuration: true,
                preload:"none",
                solution:"flash, html"
            });
            return;

        }
    });
}



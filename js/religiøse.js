/**
 * Created by muneebashraf on 20/02/2017.
 */



js_audioPlayer(1,"audio/06:02-2017.mp3","Vært: Elias Rama<br>Gæst: Tarek Ghanoum<br>Dato: 06/02-2017");
js_audioPlayer(2,"audio/13:02-2017.mp3","Vært: Johannes<br>Gæst: Abdullahi Hassan<br>Dato: 13/02-2017");
js_audioPlayer(3,"audio/20:02-2017.mp3","Vært: Johannes<br>Gæst:  Tarek Ghanoum<br>Dato: 20/02-2017");
js_audioPlayer(4,"audio/27:02-2017.mp3","Vært: Elias Rama<br>Gæst: Lamies Nassri<br>Dato: 27/02-2017");
js_audioPlayer(5,"audio/06-03-2017.mp3", "Vært: Johannes & Abu Yunes<br>Gæst: Engin Bozkir<br>Dato: 06/03-2017");
js_audioPlayer(6,"audio/13-03-2017.mp3", "Vært: Johannes<br>Gæst: Engin Bozkir<br>Dato: 13/03-2017");
js_audioPlayer(7,"audio/20-03-2017.mp3", "Vært: Johannes<br>Gæster: Engin Bozkir & Abu Yunes<br>Dato: 20/03-2017");
js_audioPlayer(8,"audio/En tur med kultu.mp3",  "Test8");





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



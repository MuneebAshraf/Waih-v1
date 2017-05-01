/**
 * Created by muneebashraf on 21/04/2017.
 */

var show;

$(".programBox").click(function (e) {
    var target = $(e.target);
    if( target.is(".uptodate-box") ) {
        $('.background-picture').append("<h1>Up to date</h1>");
        $(".content-text").append(" <p>Hashtag mig her, hashtag mig der. Up To Date er programmet, hvor vi vil snakke om de emner som er oppe på de sociale medier. Vi vil interagere med jer via dem, få jeres vinkel med og åbne op for en spændende debat.<br><br>Følg med hver mandag kl 17.00 på www.waih.dk, app eller når som helst via podcast. Programmet genudsendes mandag kl 20.00 og tirsdag kl 07.30. </p>")
        show="UpToDate"

    } else if (target.is(".isbjerget-box") ) {
        $(".background-picture").append("<h1>Toppen af isbjerget</h1>");
        $(".content-text").append(" <p>Normalt kender vi kun meget lidt til mange af de fremtrædende muslimske personligheder, der findes i det danske samfund, på globalt plan, eller nogle af de historiske, mindre omtalte muslimske personligheder. I programmet ”Toppen af isbjerget” dykker værten Abu Karim ned under overfladen, og giver os et dybere indblik i disse personligheders liv og historier.<br><br>Følg med hver tirsdag kl 17.00 på www.waih.dk, app eller når som helst via podcast. Programmet genudsendes tirsdag kl 20.00 og onsdag kl 07.30.</p>")
        show="isbjerget"

    } else if (target.is(".turkultur-box") ) {
        $(".background-picture").append("<h1>En tur med kultur</h1>");
    }
    podcastsExists();
    $(".background-overlay").css('display','block');
        $(".pop-up").animate({
            opacity:1,
            top:"-=100px"
        },500);

});

$($(".background-overlay")).click(function (e) {
    var target = $(e.target)
    if( target.is(".background-overlay") ) {
        $(".pop-up").animate({
            opacity:0,
            top:"-=100px"
        },500,function () {
            emptyPopUp()
        })
        }
});

jQuery.fn.exists = function(){return this.length>0;};
document.onkeydown = function (evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27) {
        $(".pop-up").animate({
            opacity:0,
            top:"-=100px"
        },500,function () {
            emptyPopUp()
        })
    }};


function podcastsExists() {
    window.location.hash = show;
    jQuery.ajax({
        url: show+".html",
        success: function(result) {
            var html = jQuery('<div>').html(result);
            for( i=0 ; i < 10 ; i++ ){
                $(".podcasts").append("<div class='podcast-box col-md-4'><div id="+i+" class='podcast-content col-md-12'></div></div>");
                player = html.find("div#player"+i).clone().removeClass('col-md-6');
                $("#"+i).append(player);
            }
            $.getScript("js/"+show+".js", function() {
            })
        },
    });
}

function emptyPopUp() {
    $(".background-overlay").css('display','none');
    $(".pop-up").css('top','100px');
    $(".background-picture, .content-text, .podcasts").empty()
}


// Isoliert "globale" variablen fuer dieses Skript von globalen variablen des Fenters
(function($){
    
function randomImage()
{
    // zufälliger ganzahliger index
    var index = Math.floor(Math.random() * BACKGROUNDS.length);
    console.debug(index);
    // das index-te hintergrund bild
    return BACKGROUNDS[index];
}
    
// wenn "ready", dann fuehr diese Funktion aus
$(function(){
 
    console.debug("ready!");
    
    var image = randomImage();
    // finde <body /> element und setze CSS Regeln
    $("body").css({
        background: "url('" + image + "')"
    });
})
    
// Ende Isolation
})(jQuery);
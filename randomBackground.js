
// Isoliert "globale" variablen fuer dieses Skript von globalen variablen des Fenters
(function($){
    
// Random Image Funktion. Gibt eine zufällige Hintergrund-URL zurueck.
// Die moeglichen Hintergründe werden in der globalen variable BACKGROUNDS definiert.
    
function randomImage()
{
    // zufaelliger ganzahliger index
    var index = Math.floor(Math.random() * BACKGROUNDS.length);
    // das index-te hintergrund bild
    return BACKGROUNDS[index];
}
    
// wenn "ready", dann fuehr diese Funktion aus
$(function(){
 
    var image = randomImage();
    // finde <body /> element und setze CSS Regeln
    $("body").css({
        background: "url('" + image + "')"
    });
});
    
// Ende Isolation
})(jQuery);

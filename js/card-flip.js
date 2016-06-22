// ======================= DOM Utility Functions from PastryKit =============================== //
// Source: https://desandro.github.io/3dtransforms/docs/card-flip.html //

// Sure, we could use jQuery or XUI for these, 
// but these are concise and will work with plain vanilla JS

Element.prototype.hasClassName = function (a) {
    return new RegExp("(?:^|\\s+)" + a + "(?:\\s+|$)").test(this.className);
};
Element.prototype.addClassName = function (a) {
    if (!this.hasClassName(a)) {
        this.className = [this.className, a].join(" ");
    }
};
Element.prototype.removeClassName = function (b) {
    if (this.hasClassName(b)) {
        var a = this.className;
        this.className = a.replace(new RegExp("(?:^|\\s+)" + b + "(?:\\s+|$)", "g"), " ");
    }
};
Element.prototype.toggleClassName = function (a) {
  this[this.hasClassName(a) ? "removeClassName" : "addClassName"](a);
};


// ======================= Card Flip =============================== //
// Source: https://desandro.github.io/3dtransforms/docs/card-flip.html //
//var init = function() {
var card = document.getElementById("card");

// Assign click action to flip card question
//document.getElementById("info").addEventListener( "click", function(){
//    card.toggleClassName("flipped");
//    }, false);
document.getElementById("info").onclick = function() {
  card.toggleClassName("flipped");
}
//};


//Addition of function to remove flipped class
//document.getElementById("resolveInfo").addEventListener( "click", function(){
//    $(" #card ").removeClass("flipped")
//});
document.getElementById("resolveInfo").onclick = function() {
  $(" #card ").removeClass("flipped")
}

//window.addEventListener('DOMContentLoaded', init, false);
 // Old browsers

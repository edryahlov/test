window.onload = function() {
    "use strict";
    var button = document.getElementById("change");
    button.onclick = function() {
        var random1 = Math.floor(Math.random()*255);
        var random2 = Math.floor(Math.random()*255);
        var random3 = Math.floor(Math.random()*255);
        document.getElementsByTagName("body")[0].style.backgroundColor = 'rgb('+random1+','+random2+','+random3+')';
    }
}
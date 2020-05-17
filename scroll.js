window.onscroll = function() {
    menuScroll()
};

function menuScroll() {
    var topBar = document.getElementById("topBar");
    var _header = document.getElementById("header");
    if ((document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) && screen.width > 599) {
        document.getElementById("subTitol").style.display = "none";
        document.getElementById("titol").style.borderBottom = "none";
        document.getElementById("titol").style.fontSize = "1.75rem";
        document.getElementById("btn").style.fontSize = "1.2rem";
        var x = document.getElementsByClassName("idioma")
        x[0].style.flexDirection = "row";
        topBar.style.position = "fixed";

    } else {
        if (screen.width > 599) {
            /* document.getElementById("subTitol").style.display = "block"; */
            document.getElementById("subTitol").removeAttribute("style");
            document.getElementById("titol").style.borderBottom = "black solid 3px";
            document.getElementById("titol").style.fontSize = "2rem";
            document.getElementById("btn").style.fontSize = "1.75rem";
            var x = document.getElementsByClassName("idioma")
            x[0].style.flexDirection = "column";
            topBar.style.position = "relative";
        }
    }
}
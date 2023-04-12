function myFunc() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
        document.getElementById("myBtn").innerHTML = "Close";
    } else {
        x.className = "topnav";
        document.getElementById("myBtn").innerHTML = "Menu";
    }
}

function getMax() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
        document.getElementById("myBtn").innerHTML = "Close";
    } else {
        x.className = "topnav";
        document.getElementById("myBtn").innerHTML = "Menu";
    }
}
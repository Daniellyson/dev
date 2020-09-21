function openNav() {
    if(window.matchMedia("(min-width: 601px)").matches) {
        document.getElementById("mySidebar").style.width = "250px";
    }
    else {
        document.getElementById("mySidebar").style.width = "170px";
    }
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
}
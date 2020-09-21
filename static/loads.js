window.onload = function() {    
    // place where I fade out the loading page  <div class="se-pre-con"></div> under </body>
    $(".se-pre-con").fadeOut("slow");
    $("head").load("header.html");
}

function fireGitHub() {
    location.href = "https://github.com/Daniellyson";
}

function fireLinkedin() {
    location.href = "https://www.linkedin.com/in/daniellyson-vasconcelos/";
}
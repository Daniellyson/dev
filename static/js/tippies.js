tippy('#fuel', {
    content: 'App written in JS which verifies your <span class="tippies" onclick="fireGitHubFuel()">fuel</span> consumption',
    placement: 'bottom',
    theme: 'sideBar',
    interactive: true,
    arrow: true
});

function fireGitHubFuel() {
    window.open("https://github.com/Daniellyson/Fuel");
}

tippy('#escape', {
    content: 'One of my developments during my internship at <span class="tippies" onclick="fireMiiL()">MiiL</span>.' +
    ' An escape game to play on your PC, built for the platform <span class="tippies" onclick="fireUCL()">Smart\'Web</span> ' +
    'built with <span class="tippies" onclick="fireUnity()">Unity</span>',
    interactive: true,
    placement: 'bottom',
    theme: 'sideBar',
    arrow: true
});

function fireUnity() {
    location.href = "#unity";
}

function fireMiiL() {
    window.open("https://www.miil.be/");
}

function fireUCL() {
    window.open("https://uclouvain.be/fr/instituts-recherche/ilc/miil/smart-web.html");
}

tippy('#cLang', {
    content: 'C language is considered as the mother language of all the modern programming languages ' + 
    'because most of the compilers, JVMs, Kernels, etc. are written in C',
    placement: 'bottom',
    theme: 'language',
    arrow: true
});

tippy('#unity', {
    content: 'Unity 2D : This tech was not tought at IESN. I learnt, by my self, during my internship to be able to create the Escape Game',
    placement: 'bottom',
    theme: 'language',
    arrow: true
});
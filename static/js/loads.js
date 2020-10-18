window.onload = function() {    
    // place where I fade out the loading page  <div class="se-pre-con"></div> under </body>
    $(".se-pre-con").fadeOut("slow");

    // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyDHJ9fadEOAU83Ftl4ORm0dpmgdk_9kdHo",
        authDomain: "fir-js-ca028.firebaseapp.com",
        databaseURL: "https://fir-js-ca028.firebaseio.com",
        projectId: "fir-js-ca028",
        storageBucket: "fir-js-ca028.appspot.com",
        messagingSenderId: "62510889739",
        appId: "1:62510889739:web:684a25a863053a68b8800e"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    database = firebase.database();
    ref = database.ref("likes");

    ref.on("value", function(snapshot) {

        if(!isNaN(snapshot.val().love)) {
            document.getElementById('like').innerHTML = snapshot.val().love;
        }
    });
}

function fireGitHub() {
    location.href = "https://github.com/Daniellyson";
}

function fireLinkedin() {
    location.href = "https://www.linkedin.com/in/daniellyson-vasconcelos/";
}

function fireUpdate() {

    var myCookie = getCookie();

    if(myCookie != "Madeleine") {
        var plusOne = 0;

        ref.on("value", function(snapshot){
            if(!isNaN(snapshot.val().love)) {
                plusOne = parseInt(snapshot.val().love);
            }
        });
    
        plusOne++;
    
        ref.set({
            love: plusOne
        });
    
        document.getElementById("like").innerHTML = plusOne;

        setCookie();
    }
}

function setCookie() {
    var cname = "MyCookieIs";
    var cvalue = "Madeleine";
    var exdays = 90;
    var date = new Date();
    date.setTime(date.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ date.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";";
}

function getCookie(cname = "MyCookieIs") {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
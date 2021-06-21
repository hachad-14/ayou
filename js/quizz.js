$(document).ready(function() {

    var todaysDate = new Date();

    var inputDate = new Date("06/21/2021");
    if(inputDate.setHours(0,0,0,0) == todaysDate.setHours(0,0,0,0)) {
        document.getElementById("pre").innerHTML = "J'éspere que t'es prete fraté.\n C'est pas un quizz de bébé, j'tle dis...";
        document.getElementById("pre1").innerHTML = "Allez on commence !!!";
        document.getElementById("fq").innerHTML = "Comment s'appelle mon\nfrére ?";
        document.getElementById("b1").innerHTML = "Kamal";
        document.getElementById("b2").innerHTML = "Mohamed";
        document.getElementById("b3").innerHTML = "Mohamed Kamal";
        document.getElementById("b4").innerHTML = "Mohamed Kamal Issam";

        $("#b1").click(function() {
            document.getElementById("redscreen").style.visibility = "visible";
            document.getElementById("arrow").style.visibility = "hidden";
        });
        $("#b2").click(function() {
            document.getElementById("redscreen").style.visibility = "visible";
            document.getElementById("arrow").style.visibility = "hidden";
        });
        //vrai------------------------------------
        $("#b3").click(function() {
            document.getElementById("greenscreen").style.visibility = "visible";
            document.getElementById("arrow").style.visibility = "hidden";
        });
        $("#b4").click(function() {
            document.getElementById("redscreen").style.visibility = "visible";
            document.getElementById("arrow").style.visibility = "hidden";
        });
        
        if($('#redscreen').is(':visible')){
            setTimeout( function(){ 
                document.getElementById("redscreen").style.visibility = "hidden";
            }, 3000 );
        }
        if($('#greenscreen').is(':visible')){
            setTimeout( function(){ 
                document.getElementById("greenscreen").style.visibility = "hidden";
            }, 3000 );
        }

        setTimeout( function(){ 
            document.getElementById("pre1").style.opacity = "1";
        }, 7000 );
        setTimeout( function(){ 
            document.getElementById("pre1").style.opacity = "0";
        }, 10000 );
        setTimeout( function(){ 
            document.getElementById("fq").style.opacity = "1";
            document.getElementById("b1").style.visibility = "visible";
            document.getElementById("b2").style.visibility = "visible";
            document.getElementById("b3").style.visibility = "visible";
            document.getElementById("b4").style.visibility = "visible";
            document.getElementById("b1").style.opacity = "1";
            document.getElementById("b2").style.opacity = "1";
            document.getElementById("b3").style.opacity = "1";
            document.getElementById("b4").style.opacity = "1";
        }, 12000 );
    }

    var inputDate1 = new Date("06/23/2021");
    if(inputDate1.setHours(0,0,0,0) == todaysDate.setHours(0,0,0,0)) {
        document.getElementById("pre").innerHTML = "Sache que j’adore te voir heureuse\net ma plus belle récompense est\nton sourire.";
    }

    var inputDate2 = new Date("06/24/2021");
    if(inputDate2.setHours(0,0,0,0) == todaysDate.setHours(0,0,0,0)) {
        console.log("pre");
    }

    var inputDate3 = new Date("06/25/2021");
    if(inputDate3.setHours(0,0,0,0) == todaysDate.setHours(0,0,0,0)) {
        console.log("pre");
    }

    var inputDate4 = new Date("06/26/2021");
    if(inputDate4.setHours(0,0,0,0) == todaysDate.setHours(0,0,0,0)) {
        console.log("pre");
    }
});
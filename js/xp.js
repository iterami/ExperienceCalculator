function calculate(){
    var xp = document.getElementById(0).value.replace(/(\,|\.)/g, '');
    if(!isNaN(xp)){
        // Diablo 2 and Diablo 2: Lord of Destruction - level 99
        document.getElementById(1).innerHTML  = (parseInt(xp)/38377390.17).toFixed(7);

        // Path of Exile - level 100
        document.getElementById(2).innerHTML  = (parseInt(xp)/42503344.44).toFixed(7);

        // Runescape - Level 99, Level 120, 200 Million Experience
        document.getElementById(3).innerHTML  = (parseInt(xp)/  130344.31).toFixed(7);
        document.getElementById(4).innerHTML  = (parseInt(xp)/ 1042731.67).toFixed(7);
        document.getElementById(5).innerHTML  = (parseInt(xp)/ 2000000   ).toFixed(7);

        // World of Warcraft - Level 20, Level 60, Level 70, Level 80, Level 85, Level 90
        document.getElementById(6).innerHTML  = (parseInt(xp)/    1591   ).toFixed(7);
        document.getElementById(7).innerHTML  = (parseInt(xp)/   33794   ).toFixed(7);
        document.getElementById(8).innerHTML  = (parseInt(xp)/   81014   ).toFixed(7);
        document.getElementById(9).innerHTML  = (parseInt(xp)/  240666   ).toFixed(7);
        document.getElementById(10).innerHTML = (parseInt(xp)/  385954   ).toFixed(7);
        document.getElementById(11).innerHTML = (parseInt(xp)/ 1493754   ).toFixed(7);
    }
}

window.onkeydown = function(e){
    // if enter key is pressed, calculate
    var key = window.event ? event : e;
    if((key.charCode ? key.charCode : key.keyCode) === 13){
        calculate();
    }
}

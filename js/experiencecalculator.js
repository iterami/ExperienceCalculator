function calculate(){
    // Fetch XP value without , or ..
    var xp = document.getElementById(0).value.replace(/(\,|\.)/g, '');

    if(isNaN(xp)){
        return;
    }

    xp = parseInt(xp);

    // Diablo 2 and Diablo 2: Lord of Destruction
    document.getElementById(1).innerHTML = (xp / 38377390.17).toFixed(7); // Level 99

    // Path of Exile
    document.getElementById(2).innerHTML = (xp / 42503344.44).toFixed(7); // Level 100

    // Runescape
    document.getElementById(3).innerHTML = (xp / 130344.31).toFixed(7); // Level 99
    document.getElementById(4).innerHTML = (xp / 1042731.67).toFixed(7); // Level 120
    document.getElementById(5).innerHTML = (xp / 2000000).toFixed(7); // 200 million XP

    // World of Warcraft - Level 20, Level 60, Level 70, Level 80, Level 85, Level 90
    document.getElementById(6).innerHTML = (xp / 1591).toFixed(7); // Level 20
    document.getElementById(7).innerHTML = (xp / 33794).toFixed(7); // Level 60
    document.getElementById(8).innerHTML = (xp / 81014).toFixed(7); // Level 70
    document.getElementById(9).innerHTML = (xp / 240666).toFixed(7); // level 80
    document.getElementById(10).innerHTML = (xp / 385954).toFixed(7); // Level 85
    document.getElementById(11).innerHTML = (xp / 1493754).toFixed(7); // Level 90

    // Fetch custom XP goal without , or ..
    var xp_custom = document.getElementById('custom').value.replace(/(\,|\.)/g, '');

    // Custom value entered by the user.
    document.getElementById('custom-span').innerHTML = (xp /
      parseInt(xp_custom) * 100
    ).toFixed(7);
}

window.onkeydown = function(e){
    var key = window.event ? event : e;
    key = key.charCode ? key.charCode : key.keyCode;

    // ENTER: calculate.
    if(key === 13){
        calculate();
    }
};

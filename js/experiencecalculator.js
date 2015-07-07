'use strict';

function calculate(){
    // Fetch XP value without , or ..
    var xp = document.getElementById('xp').value.replace(/(\,|\.)/g, '');

    if(isNaN(xp)){
        xp = 0;
    }

    xp = parseInt(xp);

    // Diablo 2 and Diablo 2: Lord of Destruction
    document.getElementById('d2lod-99').innerHTML = (xp / 38377390.17).toFixed(7); // Level 99

    // Runescape
    document.getElementById('rs-99').innerHTML = (xp / 130344.31).toFixed(7); // Level 99
    document.getElementById('rs-120').innerHTML = (xp / 1042731.67).toFixed(7); // Level 120
    document.getElementById('rs-max').innerHTML = (xp / 2000000).toFixed(7); // 200 million XP
    document.getElementById('rs-f2p').innerHTML = (xp / 32000038.8).toFixed(7); // Max F2P XP
    document.getElementById('rs-p2p').innerHTML = (xp / 52000000).toFixed(7); // Max Member XP

    // Fetch custom XP goal without , or ..
    var xp_custom = document.getElementById('custom').value.replace(/(\,|\.)/g, '');

    // Custom value entered by the user.
    document.getElementById('custom-span').innerHTML = (xp /
      parseInt(xp_custom) * 100
    ).toFixed(7);
}

window.onkeydown = function(e){
    var key = e.keyCode || e.which;

    // ENTER: calculate.
    if(key === 13){
        calculate();
    }
};

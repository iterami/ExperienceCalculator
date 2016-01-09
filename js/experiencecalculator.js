'use strict';

function calculate(){
    // Fetch XP value without , or ..
    var xp = parseInt(document.getElementById('xp').value.replace(/(\,|\.)/g, ''));

    var ids = {
      // Diablo 2 and Diablo 2: Lord of Destruction
      'd2lod-99': 38377390.17,
      // Runescape
      'rs-99': 130344.31,
      'rs-120': 1042731.67,
      'rs-f2p': 32000038.8,
      'rs-max': 2000000,
      'rs-p2p': 52000000,
      // Custom
      'custom': parseInt(document.getElementById('custom-xp').value.replace(/(\,|\.)/g, '')) / 100,
    };
    for(var id in ids){
        document.getElementById(id).innerHTML = (xp / ids[id]).toFixed(7);
    };
}

window.onkeydown = function(e){
    var key = e.keyCode || e.which;

    // ENTER: calculate.
    if(key === 13){
        calculate();
    }
};

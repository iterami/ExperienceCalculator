'use strict';

function calculate(){
    core_storage_save();

    // Fetch XP value without , or ..
    var xp = sanitize_integer('xp');

    var ids = {
      // Other
      'custom': sanitize_integer('custom-xp') / 100,
      // Diablo 2
      'd2lod-99': 35204852.54,
      // RuneScape
      'rs-99': 130344.31,
      'rs-120': 1042731.67,
      'rs-f2p': 34000034.92,
      'rs-max': 2000000,
      'rs-p2p': 52000000,
    };
    for(var id in ids){
        document.getElementById(id).innerHTML = (xp / ids[id]).toFixed(7);
    };
}

function sanitize_integer(id){
    return Number.parseInt(
      document.getElementById(id).value.replace(/(\,|\.)/g, ''),
      10
    );
}

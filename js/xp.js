function calculate(){
    // fetch values without , or .
    var xp        = document.getElementById(0).value.replace(/(\,|\.)/g, '');
    var xp_custom = document.getElementById('custom').value.replace(/(\,|\.)/g, '');

    if(!isNaN(xp)){
        xp = parseInt(xp);

        // Diablo 2 and Diablo 2: Lord of Destruction - level 99
        document.getElementById(1).innerHTML  = (xp / 38377390.17).toFixed(7);

        // Path of Exile - level 100
        document.getElementById(2).innerHTML  = (xp / 42503344.44).toFixed(7);

        // Runescape - Level 99, Level 120, 200 Million Experience
        document.getElementById(3).innerHTML  = (xp /   130344.31).toFixed(7);
        document.getElementById(4).innerHTML  = (xp /  1042731.67).toFixed(7);
        document.getElementById(5).innerHTML  = (xp /  2000000   ).toFixed(7);

        // World of Warcraft - Level 20, Level 60, Level 70, Level 80, Level 85, Level 90
        document.getElementById(6).innerHTML  = (xp /     1591   ).toFixed(7);
        document.getElementById(7).innerHTML  = (xp /    33794   ).toFixed(7);
        document.getElementById(8).innerHTML  = (xp /    81014   ).toFixed(7);
        document.getElementById(9).innerHTML  = (xp /   240666   ).toFixed(7);
        document.getElementById(10).innerHTML = (xp /   385954   ).toFixed(7);
        document.getElementById(11).innerHTML = (xp /  1493754   ).toFixed(7);

        // custom value entered by the user
        document.getElementById('custom-span').innerHTML = (xp /
            parseInt(xp_custom) * 100
        ).toFixed(7);
    }
}

window.onkeydown = function(e){
    // if enter key is pressed, calculate
    var key = window.event ? event : e;
    if((key.charCode ? key.charCode : key.keyCode) === 13){
        calculate();
    }
}

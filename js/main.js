'use strict';

function repo_init(){
    core_repo_init({
      'storage': {
        'custom-xp': '0',
        'xp': '0',
      },
      'title': 'ExperienceCalculator.htm',
    });

    document.getElementById('custom-xp').oninput = calculate;
    document.getElementById('xp').oninput = calculate;

    core_storage_update();
    calculate();
}

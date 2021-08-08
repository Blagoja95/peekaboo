
let monkey = document.querySelector('img');
let state = false;


function activateBtn() {
    if (state === false) {
        monkey.src = "Assets/monkeyOpen1.png";
        state = true;
    }
    else {
        monkey.src = "Assets/monkeyClose1.png";
        state = false;
    }
}

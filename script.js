
function roll() {


    switch (Math.ceil(Math.random() * 100 % 6)) {
        case 1:
            document.getElementById("dice").innerHTML = ` <img src="side_1_pip.png" alt="1">`;
            break;
        case 2:
            document.getElementById("dice").innerHTML = ` <img src="side_2_pips.png" alt="1">`;
            break;
        case 3:
            document.getElementById("dice").innerHTML = ` <img src="side_3_pips.png" alt="1" >`;
            break;
        case 4:
            document.getElementById("dice").innerHTML = ` <img src="side_4_pips.png" alt="1" >`;
            break;
        case 5:
            document.getElementById("dice").innerHTML = ` <img src="side_5_pips.png" alt="1">`;
            break;
        case 6:
            document.getElementById("dice").innerHTML = ` <img src="side_6_pips.png" alt="1">`;
            break;
    }

}
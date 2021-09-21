var number_of_diactivated = 0;
var score_penalty = 0;
var global_score = 0;
var click_protection = new Array();
document.getElementById("score").innerHTML = global_score;
var activated_hex = "#C3073F";
var deactivated_hex = "#46344E";
var triple_hex = "#ffff00";
var number_of_blocks = 20;
var win_number = 17;
function start() {

    var numbers = new Array();
    var position = "number";
    var answer_pos = 0;
    var answer = new Array();




    for (var i = 0; i < number_of_blocks; i++) {

        numbers[i] = getRand(1, 10);
        position = position + i;
        document.getElementById(position).innerHTML = numbers[i];
        position = "number";
    }
    for (var i = 0; i < 2; i++) {
        answer[i] = -1;
    }



    var number0 = document.getElementById("number0");
    var number1 = document.getElementById("number1");
    var number2 = document.getElementById("number2");
    var number3 = document.getElementById("number3");
    var number4 = document.getElementById("number4");
    var number5 = document.getElementById("number5");
    var number6 = document.getElementById("number6");
    var number7 = document.getElementById("number7");
    var number8 = document.getElementById("number8");
    var number9 = document.getElementById("number9");
    var number10 = document.getElementById("number10");
    var number11 = document.getElementById("number11");
    var number12 = document.getElementById("number12");
    var number13 = document.getElementById("number13");
    var number14 = document.getElementById("number14");
    var number15 = document.getElementById("number15");
    var number16 = document.getElementById("number16");
    var number17 = document.getElementById("number17");
    var number18 = document.getElementById("number18");
    var number19 = document.getElementById("number19");


    var clicked = 0;
    var answer_minus1 = 0;
    var answer_minus2 = 0;
    var answer_plus = 0;

    number0.onclick = function () {
        if (number_of_diactivated > win_number) {
            end();
        }
        else if (clicked == 2 && click_protection[0] != true) {
            deactivation();
            clear();
            clicked = 0;
            document.getElementById('number0').style.backgroundColor = triple_hex;
            answer_plus = answer[0] + answer[1];
            answer_minus1 = answer[0] - answer[1];
            answer_minus2 = answer[1] - answer[0];
            if (numbers[0] == answer_minus1 || numbers[0] == answer_minus2 || numbers[0] == answer_plus) {
                document.getElementById('number0').style.visibility = "hidden";
                answer[0] = -1;
                answer[1] = -1;
                answer_pos = 0;
                number_of_diactivated++;

            } else {
                answer[0] = -1;
                answer[1] = -1;
                answer_pos = 0;
                document.getElementById('number0').style.backgroundColor = deactivated_hex;
                wrongNumber();
                score_penalty++;
                healthCheck();
            }
        }
        else if (click_protection[0] != true) {
            clicked++;
            document.getElementById('number0').style.backgroundColor = activated_hex;
            innerActivation(0);
        } else {
            innerDeactivation(0);
            document.getElementById('number0').style.backgroundColor = deactivated_hex;
        }
    }

    number1.onclick = function () {
        if (number_of_diactivated > win_number) {
            end();
        }
        else if (clicked == 2 && click_protection[1] != true) {
            deactivation();
            clear();
            clicked = 0;
            document.getElementById('number1').style.backgroundColor = triple_hex;
            answer_plus = answer[0] + answer[1];
            answer_minus1 = answer[0] - answer[1];
            answer_minus2 = answer[1] - answer[0];
            if (numbers[1] == answer_minus1 || numbers[1] == answer_minus2 || numbers[1] == answer_plus) {
                document.getElementById('number1').style.visibility = "hidden";
                answer[0] = -1;
                answer[1] = -1;
                answer_pos = 0;
                number_of_diactivated++;

            } else {
                answer[0] = -1;
                answer[1] = -1;
                answer_pos = 0;
                document.getElementById('number1').style.backgroundColor = deactivated_hex
                wrongNumber();
                score_penalty++;
                healthCheck();
            }
        }
        else if (click_protection[1] != true) {
            clicked++;
            document.getElementById('number1').style.backgroundColor = activated_hex;
            innerActivation(1);
        } else {
            innerDeactivation(1);
            document.getElementById('number1').style.backgroundColor = deactivated_hex;
        }
    }

    number2.onclick = function () {
        if (number_of_diactivated > win_number) {
            end();
        }
        else if (clicked == 2 && click_protection[2] != true) {
            deactivation();
            clear();
            clicked = 0;
            document.getElementById('number2').style.backgroundColor = triple_hex;
            answer_plus = answer[0] + answer[1];
            answer_minus1 = answer[0] - answer[1];
            answer_minus2 = answer[1] - answer[0];
            if (numbers[2] == answer_minus1 || numbers[2] == answer_minus2 || numbers[2] == answer_plus) {
                document.getElementById('number2').style.visibility = "hidden";
                answer[0] = -1;
                answer[1] = -1;
                answer_pos = 0;
                number_of_diactivated++;

            } else {
                answer[0] = -1;
                answer[1] = -1;
                answer_pos = 0;
                document.getElementById('number2').style.backgroundColor = deactivated_hex;
                wrongNumber();
                score_penalty++;
                healthCheck();
            }
        }
        else if (click_protection[2] != true) {
            clicked++;
            document.getElementById('number2').style.backgroundColor = activated_hex;
            innerActivation(2);
        } else {
            innerDeactivation(2);
            document.getElementById('number2').style.backgroundColor = deactivated_hex;
        }
    }

    number3.onclick = function () {
        if (number_of_diactivated > win_number) {
            end();
        }
        else if (clicked == 2 && click_protection[3] != true) {
            deactivation();
            clear();
            clicked = 0;
            document.getElementById('number3').style.backgroundColor = triple_hex;
            answer_plus = answer[0] + answer[1];
            answer_minus1 = answer[0] - answer[1];
            answer_minus2 = answer[1] - answer[0];
            if (numbers[3] == answer_minus1 || numbers[3] == answer_minus2 || numbers[3] == answer_plus) {
                document.getElementById('number3').style.visibility = "hidden";
                answer[0] = -1;
                answer[1] = -1;
                answer_pos = 0;
                number_of_diactivated++;

            } else {
                answer[0] = -1;
                answer[1] = -1;
                answer_pos = 0;
                document.getElementById('number3').style.backgroundColor = deactivated_hex;
                wrongNumber();
                score_penalty++;
                healthCheck();
            }
        }
        else if (click_protection[3] != true) {
            clicked++;
            document.getElementById('number3').style.backgroundColor = activated_hex;
            innerActivation(3);
        } else {
            innerDeactivation(3);
            document.getElementById('number3').style.backgroundColor = deactivated_hex;
        }
    }

    number4.onclick = function () {
        if (number_of_diactivated > win_number) {
            end();
        }
        else if (clicked == 2 && click_protection[4] != true) {
            deactivation();
            clear();
            clicked = 0;
            document.getElementById('number4').style.backgroundColor = triple_hex;
            answer_plus = answer[0] + answer[1];
            answer_minus1 = answer[0] - answer[1];
            answer_minus2 = answer[1] - answer[0];
            if (numbers[4] == answer_minus1 || numbers[4] == answer_minus2 || numbers[4] == answer_plus) {
                document.getElementById('number4').style.visibility = "hidden";
                answer[0] = -1;
                answer[1] = -1;
                answer_pos = 0;
                number_of_diactivated++;

            } else {
                answer[0] = -1;
                answer[1] = -1;
                answer_pos = 0;
                document.getElementById('number4').style.backgroundColor = deactivated_hex;
                wrongNumber();
                score_penalty++;
                healthCheck();
            }
        }
        else if (click_protection[4] != true) {
            clicked++;
            document.getElementById('number4').style.backgroundColor = activated_hex;
            innerActivation(4);
        } else {
            innerDeactivation(4);
            document.getElementById('number4').style.backgroundColor = deactivated_hex;
        }
    }

    number5.onclick = function () {
        if (number_of_diactivated > win_number) {
            end();
        }
        else if (clicked == 2 && click_protection[5] != true) {
            deactivation();
            clear();
            clicked = 0;
            document.getElementById('number5').style.backgroundColor = triple_hex;
            answer_plus = answer[0] + answer[1];
            answer_minus1 = answer[0] - answer[1];
            answer_minus2 = answer[1] - answer[0];
            if (numbers[5] == answer_minus1 || numbers[5] == answer_minus2 || numbers[5] == answer_plus) {
                document.getElementById('number5').style.visibility = "hidden";
                answer[0] = -1;
                answer[1] = -1;
                answer_pos = 0;
                number_of_diactivated++;

            } else {
                answer[0] = -1;
                answer[1] = -1;
                answer_pos = 0;
                document.getElementById('number5').style.backgroundColor = deactivated_hex;
                wrongNumber();
                score_penalty++;
                healthCheck();
            }
        }
        else if (click_protection[5] != true) {
            clicked++;
            document.getElementById('number5').style.backgroundColor = activated_hex;
            innerActivation(5);
        } else {
            innerDeactivation(5);
            document.getElementById('number5').style.backgroundColor = deactivated_hex;
        }
    }

    number6.onclick = function () {
        if (number_of_diactivated > win_number) {
            end();
        }
        else if (clicked == 2 && click_protection[6] != true) {
            deactivation();
            clear();
            clicked = 0;
            document.getElementById('number6').style.backgroundColor = triple_hex;
            answer_plus = answer[0] + answer[1];
            answer_minus1 = answer[0] - answer[1];
            answer_minus2 = answer[1] - answer[0];
            if (numbers[6] == answer_minus1 || numbers[6] == answer_minus2 || numbers[6] == answer_plus) {
                document.getElementById('number6').style.visibility = "hidden";
                answer[0] = -1;
                answer[1] = -1;
                answer_pos = 0;
                number_of_diactivated++;

            } else {
                answer[0] = -1;
                answer[1] = -1;
                answer_pos = 0;
                document.getElementById('number6').style.backgroundColor = deactivated_hex;
                wrongNumber();
                score_penalty++;
                healthCheck();
            }
        }
        else if (click_protection[6] != true) {
            clicked++;
            document.getElementById('number6').style.backgroundColor = activated_hex;
            innerActivation(6);
        } else {
            innerDeactivation(6);
            document.getElementById('number6').style.backgroundColor = deactivated_hex;
        }
    }

    number7.onclick = function () {
        if (number_of_diactivated > win_number) {
            end();
        }
        else if (clicked == 2 && click_protection[7] != true) {
            deactivation();
            clear();
            clicked = 0;
            document.getElementById('number7').style.backgroundColor = triple_hex;
            answer_plus = answer[0] + answer[1];
            answer_minus1 = answer[0] - answer[1];
            answer_minus2 = answer[1] - answer[0];
            if (numbers[7] == answer_minus1 || numbers[7] == answer_minus2 || numbers[7] == answer_plus) {
                document.getElementById('number7').style.visibility = "hidden";
                answer[0] = -1;
                answer[1] = -1;
                answer_pos = 0;
                number_of_diactivated++;

            } else {
                answer[0] = -1;
                answer[1] = -1;
                answer_pos = 0;
                document.getElementById('number7').style.backgroundColor = deactivated_hex;
                wrongNumber();
                score_penalty++;
                healthCheck();
            }
        }
        else if (click_protection[7] != true) {
            clicked++;
            document.getElementById('number7').style.backgroundColor = activated_hex;
            innerActivation(7);
        } else {
            innerDeactivation(7);
            document.getElementById('number7').style.backgroundColor = deactivated_hex;
        }
    }

    number8.onclick = function () {
        if (number_of_diactivated > win_number) {
            end();
        }
        else if (clicked == 2 && click_protection[8] != true) {
            deactivation();
            clear();
            clicked = 0;
            document.getElementById('number8').style.backgroundColor = triple_hex;
            answer_plus = answer[0] + answer[1];
            answer_minus1 = answer[0] - answer[1];
            answer_minus2 = answer[1] - answer[0];
            if (numbers[8] == answer_minus1 || numbers[8] == answer_minus2 || numbers[8] == answer_plus) {
                document.getElementById('number8').style.visibility = "hidden";
                answer[0] = -1;
                answer[1] = -1;
                answer_pos = 0;
                number_of_diactivated++;

            } else {
                answer[0] = -1;
                answer[1] = -1;
                answer_pos = 0;
                document.getElementById('number8').style.backgroundColor = deactivated_hex;
                wrongNumber();
                score_penalty++;
                healthCheck();
            }
        }
        else if (click_protection[8] != true) {
            clicked++;
            document.getElementById('number8').style.backgroundColor = activated_hex;
            innerActivation(8);
        } else {
            innerDeactivation(8);
            document.getElementById('number8').style.backgroundColor = deactivated_hex;
        }
    }

    number9.onclick = function () {
        if (number_of_diactivated > win_number) {
            end();
        }
        else if (clicked == 2 && click_protection[9] != true) {
            deactivation();
            clear();
            clicked = 0;
            document.getElementById('number9').style.backgroundColor = triple_hex;
            answer_plus = answer[0] + answer[1];
            answer_minus1 = answer[0] - answer[1];
            answer_minus2 = answer[1] - answer[0];
            if (numbers[9] == answer_minus1 || numbers[9] == answer_minus2 || numbers[9] == answer_plus) {
                document.getElementById('number9').style.visibility = "hidden";
                answer[0] = -1;
                answer[1] = -1;
                answer_pos = 0;
                number_of_diactivated++;

            } else {
                answer[0] = -1;
                answer[1] = -1;
                answer_pos = 0;
                document.getElementById('number9').style.backgroundColor = deactivated_hex;
                wrongNumber();
                score_penalty++;
                healthCheck();
            }
        }
        else if (click_protection[9] != true) {
            clicked++;
            document.getElementById('number9').style.backgroundColor = activated_hex;
            innerActivation(9);
        } else {
            innerDeactivation(9);
            document.getElementById('number9').style.backgroundColor = deactivated_hex;
        }
    }

    number10.onclick = function () {
        if (number_of_diactivated > win_number) {
            end();
        }
        else if (clicked == 2 && click_protection[10] != true) {
            deactivation();
            clear();
            clicked = 0;
            document.getElementById('number10').style.backgroundColor = triple_hex;
            answer_plus = answer[0] + answer[1];
            answer_minus1 = answer[0] - answer[1];
            answer_minus2 = answer[1] - answer[0];
            if (numbers[10] == answer_minus1 || numbers[10] == answer_minus2 || numbers[10] == answer_plus) {
                document.getElementById('number10').style.visibility = "hidden";
                answer[0] = -1;
                answer[1] = -1;
                answer_pos = 0;
                number_of_diactivated++;

            } else {
                answer[0] = -1;
                answer[1] = -1;
                answer_pos = 0;
                document.getElementById('number10').style.backgroundColor = deactivated_hex;
                wrongNumber();
                score_penalty++;
                healthCheck();
            }
        }
        else if (click_protection[10] != true) {
            clicked++;
            document.getElementById('number10').style.backgroundColor = activated_hex;
            innerActivation(10);
        } else {
            innerDeactivation(10);
            document.getElementById('number10').style.backgroundColor = deactivated_hex;
        }
    }

    number11.onclick = function () {
        if (number_of_diactivated > win_number) {
            end();
        }
        else if (clicked == 2 && click_protection[11] != true) {
            deactivation();
            clear();
            clicked = 0;
            document.getElementById('number11').style.backgroundColor = triple_hex;
            answer_plus = answer[0] + answer[1];
            answer_minus1 = answer[0] - answer[1];
            answer_minus2 = answer[1] - answer[0];
            if (numbers[11] == answer_minus1 || numbers[11] == answer_minus2 || numbers[11] == answer_plus) {
                document.getElementById('number11').style.visibility = "hidden";
                answer[0] = -1;
                answer[1] = -1;
                answer_pos = 0;
                number_of_diactivated++;

            } else {
                answer[0] = -1;
                answer[1] = -1;
                answer_pos = 0;
                document.getElementById('number11').style.backgroundColor = deactivated_hex;
                wrongNumber();
                score_penalty++;
                healthCheck();
            }
        }
        else if (click_protection[11] != true) {
            clicked++;
            document.getElementById('number11').style.backgroundColor = activated_hex;
            innerActivation(11);
        } else {
            innerDeactivation(11);
            document.getElementById('number11').style.backgroundColor = deactivated_hex;
        }
    }

    number12.onclick = function () {
        if (number_of_diactivated > win_number) {
            end();
        }
        else if (clicked == 2 && click_protection[12] != true) {
            deactivation();
            clear();
            clicked = 0;
            document.getElementById('number12').style.backgroundColor = triple_hex;
            answer_plus = answer[0] + answer[1];
            answer_minus1 = answer[0] - answer[1];
            answer_minus2 = answer[1] - answer[0];
            if (numbers[12] == answer_minus1 || numbers[12] == answer_minus2 || numbers[12] == answer_plus) {
                document.getElementById('number12').style.visibility = "hidden";
                answer[0] = -1;
                answer[1] = -1;
                answer_pos = 0;
                number_of_diactivated++;

            } else {
                answer[0] = -1;
                answer[1] = -1;
                answer_pos = 0;
                document.getElementById('number12').style.backgroundColor = deactivated_hex;
                wrongNumber();
                score_penalty++;
                healthCheck();
            }
        }
        else if (click_protection[12] != true) {
            clicked++;
            document.getElementById('number12').style.backgroundColor = activated_hex;
            innerActivation(12);
        } else {
            innerDeactivation(12);
            document.getElementById('number12').style.backgroundColor = deactivated_hex;
        }
    }

    number13.onclick = function () {
        if (number_of_diactivated > win_number) {
            end();
        }
        else if (clicked == 2 && click_protection[13] != true) {
            deactivation();
            clear();
            clicked = 0;
            document.getElementById('number13').style.backgroundColor = triple_hex;
            answer_plus = answer[0] + answer[1];
            answer_minus1 = answer[0] - answer[1];
            answer_minus2 = answer[1] - answer[0];
            if (numbers[13] == answer_minus1 || numbers[13] == answer_minus2 || numbers[13] == answer_plus) {
                document.getElementById('number13').style.visibility = "hidden";
                answer[0] = -1;
                answer[1] = -1;
                answer_pos = 0;
                number_of_diactivated++;

            } else {
                answer[0] = -1;
                answer[1] = -1;
                answer_pos = 0;
                document.getElementById('number13').style.backgroundColor = deactivated_hex;
                wrongNumber();
                score_penalty++;
                healthCheck();
            }
        }
        else if (click_protection[13] != true) {
            clicked++;
            document.getElementById('number13').style.backgroundColor = activated_hex;
            innerActivation(13);
        } else {
            innerDeactivation(13);
            document.getElementById('number13').style.backgroundColor = deactivated_hex;
        }
    }

    number14.onclick = function () {
        if (number_of_diactivated > win_number) {
            end();
        }
        else if (clicked == 2 && click_protection[14] != true) {
            deactivation();
            clear();
            clicked = 0;
            document.getElementById('number14').style.backgroundColor = triple_hex;
            answer_plus = answer[0] + answer[1];
            answer_minus1 = answer[0] - answer[1];
            answer_minus2 = answer[1] - answer[0];
            if (numbers[14] == answer_minus1 || numbers[14] == answer_minus2 || numbers[14] == answer_plus) {
                document.getElementById('number14').style.visibility = "hidden";
                answer[0] = -1;
                answer[1] = -1;
                answer_pos = 0;
                number_of_diactivated++;

            } else {
                answer[0] = -1;
                answer[1] = -1;
                answer_pos = 0;
                document.getElementById('number14').style.backgroundColor = deactivated_hex;
                wrongNumber();
                score_penalty++;
                healthCheck();
            }
        }
        else if (click_protection[14] != true) {
            clicked++;
            document.getElementById('number14').style.backgroundColor = activated_hex;
            innerActivation(14);
        } else {
            innerDeactivation(14);
            document.getElementById('number14').style.backgroundColor = deactivated_hex;
        }
    }

    number15.onclick = function () {
        if (number_of_diactivated > win_number) {
            end();
        }
        else if (clicked == 2 && click_protection[15] != true) {
            deactivation();
            clear();
            clicked = 0;
            document.getElementById('number15').style.backgroundColor = triple_hex;
            answer_plus = answer[0] + answer[1];
            answer_minus1 = answer[0] - answer[1];
            answer_minus2 = answer[1] - answer[0];
            if (numbers[15] == answer_minus1 || numbers[15] == answer_minus2 || numbers[15] == answer_plus) {
                document.getElementById('number15').style.visibility = "hidden";
                answer[0] = -1;
                answer[1] = -1;
                answer_pos = 0;
                number_of_diactivated++;

            } else {
                answer[0] = -1;
                answer[1] = -1;
                answer_pos = 0;
                document.getElementById('number15').style.backgroundColor = deactivated_hex;
                wrongNumber();
                score_penalty++;
                healthCheck();
            }
        }
        else if (click_protection[15] != true) {
            clicked++;
            document.getElementById('number15').style.backgroundColor = activated_hex;
            innerActivation(15);
        } else {
            innerDeactivation(15);
            document.getElementById('number15').style.backgroundColor = deactivated_hex;
        }
    }

    number16.onclick = function () {
        if (number_of_diactivated > win_number) {
            end();
        }
        else if (clicked == 2 && click_protection[16] != true) {
            deactivation();
            clear();
            clicked = 0;
            document.getElementById('number16').style.backgroundColor = triple_hex;
            answer_plus = answer[0] + answer[1];
            answer_minus1 = answer[0] - answer[1];
            answer_minus2 = answer[1] - answer[0];
            if (numbers[16] == answer_minus1 || numbers[16] == answer_minus2 || numbers[16] == answer_plus) {
                document.getElementById('number16').style.visibility = "hidden";
                answer[0] = -1;
                answer[1] = -1;
                answer_pos = 0;
                number_of_diactivated++;

            } else {
                answer[0] = -1;
                answer[1] = -1;
                answer_pos = 0;
                document.getElementById('number16').style.backgroundColor = deactivated_hex;
                wrongNumber();
                score_penalty++;
                healthCheck();
            }
        }
        else if (click_protection[16] != true) {
            clicked++;
            document.getElementById('number16').style.backgroundColor = activated_hex;
            innerActivation(16);
        } else {
            innerDeactivation(16);
            document.getElementById('number16').style.backgroundColor = deactivated_hex;
        }
    }


    number17.onclick = function () {
        if (number_of_diactivated > win_number) {
            end();
        }
        else if (clicked == 2 && click_protection[17] != true) {
            deactivation();
            clear();
            clicked = 0;
            document.getElementById('number17').style.backgroundColor = triple_hex;
            answer_plus = answer[0] + answer[1];
            answer_minus1 = answer[0] - answer[1];
            answer_minus2 = answer[1] - answer[0];
            if (numbers[17] == answer_minus1 || numbers[17] == answer_minus2 || numbers[17] == answer_plus) {
                document.getElementById('number17').style.visibility = "hidden";
                answer[0] = -1;
                answer[1] = -1;
                answer_pos = 0;
                number_of_diactivated++;

            } else {
                answer[0] = -1;
                answer[1] = -1;
                answer_pos = 0;
                document.getElementById('number17').style.backgroundColor = deactivated_hex;
                wrongNumber();
                score_penalty++;
                healthCheck();
            }
        }
        else if (click_protection[17] != true) {
            clicked++;
            document.getElementById('number17').style.backgroundColor = activated_hex;
            innerActivation(17);
        } else {
            innerDeactivation(17);
            document.getElementById('number17').style.backgroundColor = deactivated_hex;
        }
    }


    number18.onclick = function () {
        if (number_of_diactivated > win_number) {
            end();
        }
        else if (clicked == 2 && click_protection[18] != true) {
            deactivation();
            clear();
            clicked = 0;
            document.getElementById('number18').style.backgroundColor = triple_hex;
            answer_plus = answer[0] + answer[1];
            answer_minus1 = answer[0] - answer[1];
            answer_minus2 = answer[1] - answer[0];
            if (numbers[18] == answer_minus1 || numbers[18] == answer_minus2 || numbers[18] == answer_plus) {
                document.getElementById('number18').style.visibility = "hidden";
                answer[0] = -1;
                answer[1] = -1;
                answer_pos = 0;
                number_of_diactivated++;

            } else {
                answer[0] = -1;
                answer[1] = -1;
                answer_pos = 0;
                document.getElementById('number18').style.backgroundColor = deactivated_hex;
                wrongNumber();
                score_penalty++;
                healthCheck();
            }
        }
        else if (click_protection[18] != true) {
            clicked++;
            document.getElementById('number18').style.backgroundColor = activated_hex;
            innerActivation(18);
        } else {
            innerDeactivation(18);
            document.getElementById('number18').style.backgroundColor = deactivated_hex;
        }
    }

    number19.onclick = function () {
        if (number_of_diactivated > win_number) {
            end();
        }
        else if (clicked == 2 && click_protection[19] != true) {
            deactivation();
            clear();
            clicked = 0;
            document.getElementById('number19').style.backgroundColor = triple_hex;
            answer_plus = answer[0] + answer[1];
            answer_minus1 = answer[0] - answer[1];
            answer_minus2 = answer[1] - answer[0];
            if (numbers[19] == answer_minus1 || numbers[19] == answer_minus2 || numbers[19] == answer_plus) {
                document.getElementById('number19').style.visibility = "hidden";
                answer[0] = -1;
                answer[1] = -1;
                answer_pos = 0;
                number_of_diactivated++;

            } else {
                answer[0] = -1;
                answer[1] = -1;
                answer_pos = 0;
                document.getElementById('number19').style.backgroundColor = deactivated_hex;
                wrongNumber();
                score_penalty++;
                healthCheck();
            }
        }
        else if (click_protection[19] != true) {
            clicked++;
            document.getElementById('number19').style.backgroundColor = activated_hex;
            innerActivation(19);
        } else {
            innerDeactivation(19);
            document.getElementById('number19').style.backgroundColor = deactivated_hex;
        }
    }

    function innerDeactivation(id) {
        click_protection[id] = false;
        clicked--;
        if (numbers[id] == answer[0]) {
            answer[0] = -1;
        } else {
            answer[1] = -1;
        }
        answer_pos--;
        console.log(answer);
    }
    function innerActivation(id) {
        if (answer[0] == -1) {
            answer[0] = numbers[id];
            answer_pos++;
            click_protection[id] = true;
        } else {
            answer[1] = numbers[id];
            answer_pos++;
            click_protection[id] = true;
        }

    }

    function healthCheck() {
        if (document.getElementById('health3').style.visibility != "hidden") {
            document.getElementById('health3').style.visibility = "hidden";
        }
        else if (document.getElementById('health2').style.visibility != "hidden") {
            document.getElementById('health2').style.visibility = "hidden";
        }
        else if (document.getElementById('health1').style.visibility != "hidden") {
            document.getElementById('health1').style.visibility = "hidden";
        }
        if (score_penalty >= 3) {
            end();
        }
    }

}


function getRand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function clear() {
    var number = "number";
    for (var i = 0; i < number_of_blocks; i++) {

        document.getElementById(number + i).style.backgroundColor = deactivated_hex;

    }
}
start();

function deactivation() {
    for (var i = 0; i < number_of_blocks; i++) {
        click_protection[i] = false;
    }
}

function end() {
    var position_global = "number";
    clear();
    position_global = "number";
    for (var i = 0; i < number_of_blocks; i++) {
        position_global = position_global + i;
        document.getElementById(position_global).style.visibility = "visible";
        position_global = "number";
    }
    global_score += (20 - score_penalty);
    if (score_penalty == 3) {
        global_score = 0;
    }
    document.getElementById("score").innerHTML = global_score;
    number_of_diactivated = 0;
    score_penalty = 0;
    deactivation();
    document.getElementById('health3').style.visibility = "visible";
    document.getElementById('health2').style.visibility = "visible";
    document.getElementById('health1').style.visibility = "visible";
    start();
}



function wrongNumber() {
    start();
}




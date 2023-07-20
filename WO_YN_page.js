ScoreP1 = 0;

ScoreP2 = 0;


player_1 = localStorage.getItem("USERNAME1");
document.getElementById("player1").innerHTML = player_1 + " : " + ScoreP1;

player_2 = localStorage.getItem("USERNAME2");
document.getElementById("player2").innerHTML = player_2 + " : " + ScoreP2;


function Logout()
{
    localStorage.removeItem("USERNAME1");
    localStorage.removeItem("USERNAME2");

    window.location.replace("index.html");
}

function Send()
{
    num1 = document.getElementById("player_turn").value;
    num2 = document.getElementById("player_turn1").value;

    CAnswer = parseInt(num1) * parseInt(num2);

    output_num = "<h4>" + num1 + " X " + num2 + "</h4>";
    output_input = "<h4>Respuesta:</h4> <input type='text' class='form-control' id='answer' placeholder='Ingresa el número correcto'> <br> <br>";
    output_button = "<button style='width: 18%;' class='btn btn-info' onclick'check()'>Comprobar</button>";

    row = output_num + output_input + output_button;

    document.getElementById("output").innerHTML = row;

    num1 = document.getElementById("player_turn").value = "";
    num2 = document.getElementById("player_turn1").value = "";
}
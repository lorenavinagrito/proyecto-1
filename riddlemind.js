function verificarRespuestas(){

    var total = 5;
    var puntos = 0;
    
    
   
    


    var myForm = document.forms["quizForm"];
    var respuestas = ["a", "b", "c", "a", "b"];

    for(var i = 1; i <= total; i++){
        if(myForm["p" + i].value === null || myForm["p" + i].value === ""){
            alert("Por favor responde la pregunta " + i);
            return false;
        }else{
            if(myForm["p" + i].value === respuestas[i - 1]){
                ++puntos;

            }  
        }
    }

    var resultado = document.getElementById("resultado");
    resultado.innetHTML = '<h3>Obtuvistes <span>' + puntos + '</span> de <span>' + total +' puntos</span></h3>';
 

    return false;



}


var puntajePorOpcion = [
    [0, 5, 0, 0],
    [0, 0, 5, 0],
    [0, 0, 0, 5],
    [0, 5, 0, 0],
    [0, 5, 0, 0],
]


var puntaje = 0;
var i = 0;


    



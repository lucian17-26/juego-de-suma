var num1, num2;

var respuesta;

var indiceOpCoreecta;

txt_suma = document.getElementById("suma");
op1 = document.getElementById("respuesta1");
op2 = document.getElementById("respuesta2");
op3 = document.getElementById("respuesta3");
txt_msj = document.getElementById("msj");
txt_resultado = document.getElementById("resultado");

function comenzar(){
    txt_resultado.innerHTML = " ?";
    txt_msj.innerHTML = "";

    num1 = Math.round(Math.random()*9);
    num2 = Math.round(Math.random()*9);
    respuesta = num1 + num2;

    txt_suma.innerHTML= num1 + " + " + num2 + " = ";

    indiceOpCoreecta = Math.round(Math.random()*2);
    if(indiceOpCoreecta==0){
        op1.innerHTML = respuesta ;
        op2.innerHTML = respuesta - 1;
        op3.innerHTML = respuesta + 1;
    }else if(indiceOpCoreecta==1){
        op1.innerHTML = respuesta + 2;
        op2.innerHTML = respuesta ;
        op3.innerHTML = respuesta -3;
    }else if(indiceOpCoreecta==2){
        op1.innerHTML = respuesta + 1;
        op2.innerHTML = respuesta - 2;
        op3.innerHTML = respuesta ;
    }
}


function controlarRespuesta(elegida){
    txt_resultado.innerHTML = elegida.innerHTML;

    if(respuesta == elegida.innerHTML){
        txt_msj.innerHTML = "CORRECTO!!";
        txt_msj.style.color = "green";
        setTimeout(comenzar, 2000);
    }else{
        txt_msj.innerHTML = "INCORRECTO!!!";
        txt_msj.style.color = "red";
        setTimeout(limpiar, 2000);
    }
}

function limpiar(){
    txt_resultado.innerHTML = " ?";
    txt_msj.innerHTML = "";
}

comenzar();



function AlteraRele1(){
    var estado = document.getElementById("cozinhaPlafonIsOff").innerHTML;
    if(estado === "0"){
        document.getElementById("cozinhaPlafonIsOff").innerHTML="1";

		document.getElementById("cozinhaPlafon").innerHTML="<a href='/?cozinhaPlafon=desligar'> <div class='p-1 m-1 border btn btn-outline-info border-info  fw-bold'> Liga/Desliga</div></a>";
    } else {
        document.getElementById("cozinhaPlafonIsOff").innerHTML="0";

        document.getElementById("cozinhaPlafon").innerHTML="<a href='/?cozinhaPlafon=ligar'> <div class='p-1 m-1 border btn btn-outline-info border-info  fw-bold'> Liga/Desliga</div></a>";
    }
}

function AlteraRele2(){
    var estado_2 = document.getElementById("estado_2").innerHTML;
    if(estado_2 === "0"){
        document.getElementById("estado_2").innerHTML="1";

		document.getElementById("botao_2").innerHTML="<a href='/?2_desligar' class='botao_2'>Desliga</a>";
    } else {
        document.getElementById("estado_2").innerHTML="0";
        document.getElementById("rele_2").innerHTML="<div class='rele2_desligado'></div>";
        document.getElementById("botao_2").innerHTML="<a href='/?2_ligar' class='botao_2'>Liga</a>";
    }
}

function AlteraRele3(){
    var estado_3 = document.getElementById("estado_3").innerHTML;
    if(estado_3 === "0"){
        document.getElementById("estado_3").innerHTML="1";
        document.getElementById("rele_3").innerHTML="<div class='rele3_ligado'></div>";
		document.getElementById("botao_3").innerHTML="<a href='/?3_desligar' class='botao_3'>Desliga</a>";
    } else {
        document.getElementById("estado_3").innerHTML="0";
        document.getElementById("rele_3").innerHTML="<div class='rele3_desligado'></div>";
        document.getElementById("botao_3").innerHTML="<a href='/?3_ligar' class='botao_3'>Liga</a>";
    }
}

function AlteraRele4(){
    var estado_4 = document.getElementById("estado_4").innerHTML;
    if(estado_4 === "0"){
        document.getElementById("estado_4").innerHTML="1";
        document.getElementById("rele_4").innerHTML="<div class='rele4_ligado'></div>";
		document.getElementById("botao_4").innerHTML="<a href='/?4_desligar' class='botao_4'>Desliga</a>";
    } else {
        document.getElementById("estado_4").innerHTML="0";
        document.getElementById("rele_4").innerHTML="<div class='rele4_desligado'></div>";
        document.getElementById("botao_4").innerHTML="<a href='/?4_ligar' class='botao_4'>Liga</a>";
    }
}
function AlteraRele5(){
    var estado_5 = document.getElementById("estado_5").innerHTML;
    if(estado_5 === "0"){
        document.getElementById("estado_5").innerHTML="1";
        document.getElementById("rele_5").innerHTML="<div class='rele5_ligado'></div>";
		document.getElementById("botao_5").innerHTML="<a href='/?5_desligar' class='botao_5'>Desliga</a>";
    } else {
        document.getElementById("estado_5").innerHTML="0";
        document.getElementById("rele_5").innerHTML="<div class='rele5_desligado'></div>";
        document.getElementById("botao_5").innerHTML="<a href='/?5_ligar' class='botao_5'>Liga</a>";
    }
}
function AlteraRele6(){
    var estado_6 = document.getElementById("estado_6").innerHTML;
    if(estado_6 === "0"){
        document.getElementById("estado_6").innerHTML="1";
        document.getElementById("rele_6").innerHTML="<div class='rele6_ligado'></div>";
		document.getElementById("botao_6").innerHTML="<a href='/?6_desligar' class='botao_3'>Desliga</a>";
    } else {
        document.getElementById("estado_6").innerHTML="0";
        document.getElementById("rele_6").innerHTML="<div class='rele6_desligado'></div>";
        document.getElementById("botao_6").innerHTML="<a href='/?6_ligar' class='botao_6'>Liga</a>";
    }
}
function AlteraRele7(){
    var estado_7 = document.getElementById("estado_7").innerHTML;
    if(estado_7 === "0"){
        document.getElementById("estado_7").innerHTML="1";
        document.getElementById("rele_7").innerHTML="<div class='rele7_ligado'></div>";
		document.getElementById("botao_7").innerHTML="<a href='/?7_desligar' class='botao_7'>Desliga</a>";
    } else {
        document.getElementById("estado_7").innerHTML="0";
        document.getElementById("rele_7").innerHTML="<div class='rele7_desligado'></div>";
        document.getElementById("botao_7").innerHTML="<a href='/?7_ligar' class='botao_7'>Liga</a>";
    }
}
function AlteraRele8(){
    var estado_8 = document.getElementById("estado_8").innerHTML;
    if(estado_8 === "0"){
        document.getElementById("estado_8").innerHTML="1";
        document.getElementById("rele_8").innerHTML="<div class='rele3_ligado'></div>";
		document.getElementById("botao_8").innerHTML="<a href='/?8_desligar' class='botao_8'>Desliga</a>";
    } else {
        document.getElementById("estado_8").innerHTML="0";
        document.getElementById("rele_8").innerHTML="<div class='rele8_desligado'></div>";
        document.getElementById("botao_8").innerHTML="<a href='/?8_ligar' class='botao_8'>Liga</a>";
    }
}
function AlteraRele9(){
    var estado_9= document.getElementById("estado_9").innerHTML;
    if(estado_9 === "0"){
        document.getElementById("estado_9").innerHTML="1";
        document.getElementById("rele_9").innerHTML="<div class='rele9_ligado'></div>";
		document.getElementById("botao_9").innerHTML="<a href='/?9_desligar' class='botao_9'>Desliga</a>";
    } else {
        document.getElementById("estado_9").innerHTML="0";
        document.getElementById("rele_9").innerHTML="<div class='rele9_desligado'></div>";
        document.getElementById("botao_9").innerHTML="<a href='/?9_ligar' class='botao_9'>Liga</a>";
    }
}
function AlteraRele10(){
    var estado_10 = document.getElementById("estado_10").innerHTML;
    if(estado_10 === "0"){
        document.getElementById("estado_10").innerHTML="1";
        document.getElementById("rele_10").innerHTML="<div class='rele10_ligado'></div>";
		document.getElementById("botao_10").innerHTML="<a href='/?10_desligar' class='botao_10'>Desliga</a>";
    } else {
        document.getElementById("estado_10").innerHTML="0";
        document.getElementById("rele_10").innerHTML="<div class='rele10_desligado'></div>";
        document.getElementById("botao_10").innerHTML="<a href='/?10_ligar' class='botao_10'>Liga</a>";
    }
}

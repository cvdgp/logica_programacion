/*1. confirmamos si el resto de dividir el número entre 3 y 5 es 0*/

 let resultado = 0;
 let num =[];
 let textoIntroducido = "";
 let cargadorTxt     =   document.getElementById("txt");
 let resultadoSuma   =   document.getElementById("resultado");


for(let i = 1 ; i < 1000; i++ ){
    if(i%3 == 0) num.push(i);
    if(i%5 == 0) num.push(i);
}
num.forEach((element)=>{
    resultado += element;
    textoIntroducido += "<div class=´cargador´>" + element + "</div>";

}); 

resultadoSuma.innerHTML = "La suma de todos los números es:  "  +  resultado;
cargadorTxt.innerHTML =  textoIntroducido;

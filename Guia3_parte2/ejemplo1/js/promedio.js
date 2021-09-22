/*Código para calcular el promedio de notas ingresadas */
//Declaración de variable
var i,num,nota,notaactual,promedio;

//Captura de la cantidad de notas que se ingresarán
num = parseInt(prompt('Cuántas notas se van a ingresar?',''));

//Definiendo un valor de iniciación para la variable que almacenará el promedio
nota = 0;
Header = "<header class=\"masked'\">";
Header += "<h1>Selectable Text</h1>";
Header += "</header>";
document.write(Header);

//Ciclo o lazo que permitirá ingresar cada nota
document.write("<section>");
document.write("<article>");
for(i=1;i<=num;i++){
    notaactual = parseFloat(prompt("Ingresae la nota " + i + ": ",""));
    document.write("<h3>La nota " + i + ": " + Math.round(notaactual * Math.pow(10,2) / Math.pow(10,2)) +
    "</h3>");
    nota += notaactual;
}
//Obteniendo el cálculo del promedio
promedio = nota / (i-1);

//Imprimir el valor redondeado a dos decimales del promedio
document.write("<h3>El promedio de las notas es: " + Math.round(promedio * Math.pow(10,2)) / Math.pow(10,2) + "</h3>");
document.write("</article>");
document.write("</section>");


function calcular(){
    let nombre = document.getElementById("nombre").value;

    let rsd1 = document.getElementById("nota1").value;
    let rsd2 = document.getElementById("nota2").value;
    let rsd3 = document.getElementById("nota3").value;

    let promedioFinal = ((parseFloat(rsd1) * 30 /100) + (parseFloat(rsd2) * 30 /100) + (parseFloat(rsd3) * 40 / 100));
    

    alert("El promedio final del estudiante " + nombre + " es " + promedioFinal);

    if(promedioFinal < 3.0){
        alert("Oye!! "+ nombre + " Esfuerzate porque estas perdiendo la materia");
    }else if(promedioFinal >= 3.0 && promedioFinal < 4.0){
        alert("Oye!! " + nombre + " Esfuerzate un poquito más, porque estas pasando muy regular pero aun asi pasas");
    }else if(promedioFinal > 4.0 && promedioFinal <= 5.0){
        alert("Felicidades!!! " + nombre + " estas pasando la materia");
    } else {
        alert("no hay probabilidad de pasar lo siento :...(");
    }
}
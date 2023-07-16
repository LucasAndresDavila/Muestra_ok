let numero,descuento,resultado,resultado1,resultado2;
function resumen() { 
    numero = document.getElementById("Cantida").value;
    descuento = document.getElementById("Descuento").value;
    resultado = numero * 200 
    resultado1 = resultado*(descuento/100)
    resultado2 = resultado - resultado1
    const list = document.getElementById("aca");
    list.innerHTML = "$" + resultado2;
}


const precioOriginal = 0;
const descuento = 0;


function calcularPrecioConDescuento(precio,descuento){
    const porcentajeConDescuento =  (100 -descuento);
    const precioConDescuento = (precio * porcentajeConDescuento)/100;
    return precioConDescuento;
}

function calcular(){
    const inputPrice = document.getElementById("InputPrice");
    const precio = Number(inputPrice.value);

    const inputDiscount = document.getElementById("InputDiscount");
    const descuento = Number(inputDiscount.value);

    const precioConDescuento = calcularPrecioConDescuento(precio,descuento);//function

    const resultP = document.getElementById("ResultPrice");
    resultP.innerText = "El precio con descuento es: $" + precioConDescuento;

    const resultDiscount = document.getElementById("ResultDiscount");
    resultDiscount.innerText = "El descuento fue de: $" + (precio - precioConDescuento);
}
$(document).ready(function () {
    



    $("#fondo_nuevo").find("a").click(function (e) { 
    e.preventDefault();
    $(this).html(`<button class="cerrar" >cerrar</button>`)
});



$(".div_buscador").hide();


$(".buscador").click(function (e) { 
    e.preventDefault();
    
$(".div_buscador").slideDown();


});

$(".equis").click(function (e) { 
    e.preventDefault();
    $(".div_buscador").slideUp();


});


$(".desc_header_principal").find("a").hover(function () {
        // over
        $(this).addClass("animate__bounce");
        
    }, function () {
        // out
        $(this).removeClass("animate__bounce");
    }
);



/* CODIGO JS PARA CARRITO DE COMPRA*/

$(".btn_agregar1").click(function (e) { 
    e.preventDefault();

let imagen_producto = $(this).parent().find("img").attr("src");
let nombre_producto = $(this).parent().find("h2").text();    
let precio_producto = $(this).parent().find("h3").find("a").text();
console.log(imagen_producto);
console.log(nombre_producto);
console.log(precio_producto);

let card_compra = $(`   
<div class="producto_comprado">


<div class="img_compra">
    <img src=${imagen_producto} alt="">
</div>

<div class="info_compra">
    <h3>${nombre_producto}</h3>
    <h3>Precio: ${precio_producto}</h3>
   <a class="eliminar2">Eliminar</a>
</div>

</div>
`)



$(".div_lista_carrito").append(card_compra);


$(".eliminar2").click(function (e) { 
    e.preventDefault();
    $(this).parent().parent().hide();    
});


});


$(".btn_agregar2").click(function (e) { 
    e.preventDefault();
let precio2 = $(this).parent().find("h2").find("a").text();
let nombre2= $(this).parent().find("h3").text();
let imagen2 = $(this).parent().find("img").attr("src");

let card_prodct2 = $(`
<div class="producto_comprado">
<div class="img_compra">
    <img src="${imagen2}" alt="">
</div>

<div class="info_compra">
    <h3>${nombre2}</h3>
    <h3>Precio: ${precio2}</h3>
    <a class="eliminar2">Eliminar</a>
</div>

</div>
`)
$(".eliminar2").click(function (e) { 
    e.preventDefault();
    $(this).parent().parent().hide();    
});
$(".div_lista_carrito").append(card_prodct2);


});












$(".boton_agregar").click(function (e) { 
    e.preventDefault();
    let nombre3 = $(this).parent().find("h3").eq(0).text();
    let precio3 = $(this).parent().find("h3").eq(1).find("a").text();
    let imagen3 = $(this).parent().find("img").attr("src");
let card_prodct3 = $(`
<div class="producto_comprado">
<div class="img_compra">
    <img src=${imagen3} alt="">
</div>

<div class="info_compra">
    <h3>${nombre3}</h3>
    <h3>Precio: ${precio3}</h3>
    <a class="eliminar2">Eliminar</a>
</div>

</div>
`)


$(".div_lista_carrito").append(card_prodct3);



$(".eliminar2").click(function (e) { 
    e.preventDefault();
    $(this).parent().parent().hide();    
});



});
/* CODIGO JS PARA CARRITO DE COMPRA*/



/* OCULTAR Y MOSTRAS CARRITO DE COMPRA*/

    $(".div_lista_carrito").hide();


$(".carrito").click(function (e) { 
    e.preventDefault();
    
$(".div_lista_carrito").fadeToggle();


});



/* CODIGO PARA EL MENU DESLIZABLE*/

$(".cont_header").find("nav").hide();

$(".icono").click(function (e) { 
    e.preventDefault();
    
$(".cont_header").find("nav").slideToggle();

});
/*CODIGO PARA EL MENU DESLIZABLE*/


/*CODIGO JS PARA VACIAR EL CARRITO*/

$(".eliminar").click(function (e) { 
    e.preventDefault();
    
$(".producto_comprado").hide();


});















});
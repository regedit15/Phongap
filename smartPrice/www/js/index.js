$(document).ready(function() {

    var precioVacio = "$ 0";

    $("#btn_agregar").click(function() {
        var fila =
            "<tr>" +
            "   <td>" +
            "       <h4 class='titulo'>Precio</h4>" +
            "       <input class='form-control' id='precio'>" +
            "   </td>" +
            "   <td>" +
            "       <h4 class='titulo'>Cantidad</h4>" +
            "       <input class='form-control' id='cantidad'>" +
            "   </td>" +
            "   <td>" +
            "       <h4 class='precio'>Resultado</h4>" +
            "       <div class='alert alert-success'>" +
            "           <h4 id='resultado' class='precio'>" + precioVacio + "</h4>" +
            "       </div>" +
            "   </td>" +
            "</tr>";

        $('table').append(fila);
    });

    // para cargar la fila al cargar la pagina
    $('#btn_agregar').click();

    $("input").keyup(function(event) {
        var precio = $("#precio").val();
        var cantidad = $("#cantidad").val();

        if (precio != '' && cantidad != '') {
            $("#resultado").text('$' + ((1000 * precio) / cantidad).toFixed(2));
        } else {
            $("#resultado").text(precioVacio);
        }
    });

});



// 360g    $30
// 1000g   X
//
// 500 ml    $30
// 1000ml    X
//
// 5 unid       10
// 1          X
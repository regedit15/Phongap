$(document).ready(function() {

    var precioVacio = "$ 0";

    $("#btn_agregar").click(function() {
        var fila =
            "<div class='row'>" +
            "   <div class='col-sm-4'>" +
            "       <h4 class='titulo'>Precio</h4>" +
            "       <input class='form-control' id='precio'>" +
            "   </div>" +
            "   <div class='col-sm-4'>" +
            "       <h4 class='titulo'>Cantidad</h4>" +
            "       <input class='form-control' id='cantidad'>" +
            "   </div>" +
            "   <div class='col-sm-3'>" +
            "       <h4 class='precio'>Resultado</h4>" +
            "       <div id='divVerde' class='alert alert-success'>" +
            "           <h4 id='resultado' class='precio'>" + precioVacio + "</h4>" +
            "       </div>" +
            "   </div>" +
            "</div>";

        $('#grilla').append(fila);
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
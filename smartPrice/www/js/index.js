$(document).ready(function() {

    var precioVacio = "$ 0";

    $("#btn_agregar").click(function() {
        var fila =
            "<div class='row'>" +
            "   <div class='col-sm-4'>" +
            "       <h4 class='titulo'>Precio</h4>" +
            "       <input class='form-control' id='precio' name='precio'>" +
            "   </div>" +
            "   <div class='col-sm-4'>" +
            "       <h4 class='titulo'>Cantidad</h4>" +
            "       <input class='form-control' id='cantidad' name='cantidad'>" +
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

        if ($("#myform").valid()) {
            var precio = $("#precio").val();
            var cantidad = $("#cantidad").val();
            $("#resultado").text('$' + ((1000 * precio) / cantidad).toFixed(2));
        }
    });



    jQuery.validator.addMethod("soloNumeros", function(value, element) {
        return this.optional(element) || /^[0-9]+(\.[0-9]{1,2})?$/.test(value);
    }, "Ingrese un n&uacute;mero decimal. Ej: 22.50");


    $("#myform").validate({
        rules: {
            precio: {
                required: true,
                soloNumeros: true
            },
            cantidad: {
                required: true,
                number: true
            }
        }
    });

});
$(document).ready(function() {
    var contador = 0;
    var precioVacio = "$ 0";

    // sirve para despues, agregarle las reglas, si no esta esto tira error, porque no sabe a quien agregarle las reglas
    $("#myform").validate();

    $("#btn_agregar").click(function() {

        var fila =
            "<div class='row'>" +
            "   <div class='col-sm-4'>" +
            "       <h4 class='titulo'>Precio</h4>" +
            "       <input type='number' class='form-control' id='precio-" + contador + "' name='precio-" + contador + "'> " +
            "   </div>" +
            "   <div class='col-sm-4'>" +
            "       <h4 class='titulo'>Cantidad</h4>" +
            "       <input type='number' class='form-control' id='cantidad-" + contador + "' name='cantidad-" + contador + "'>" +
            "   </div>" +
            "   <div class='col-sm-3'>" +
            "       <h4 class='precio'>Resultado</h4>" +
            "       <div id='divVerde' class='alert alert-success'>" +
            "           <h4 id='resultado-" + contador + "' class='precio'>" + precioVacio + "</h4>" +
            "       </div>" +
            "   </div>" +
            "</div>";

        $('#grilla').append(fila);


        $("#precio-" + contador).rules('add', {
            required: true,
            soloNumeros: true
        });

        $("#cantidad-" + contador).rules('add', {
            required: true,
            soloNumeros: true
        });

        $("#precio-" + contador).keyup(calcularPrecio);
        $("#cantidad-" + contador).keyup(calcularPrecio);

        contador = contador + 1;
    });

    // para cargar la fila al cargar la pagina
    $('#btn_agregar').click();

    function calcularPrecio() {

        var split = this.name.split('-');
        var idPrecio = "#precio-" + split[1];
        var idCantidad = "#cantidad-" + split[1];
        var idResultado = "#resultado-" + split[1];
        var valorPrecio = $(idPrecio).val();
        var valorCantidad = $(idCantidad).val();

        if (split[0] == 'precio') {
            setearPrecio(idPrecio, idCantidad, idResultado, valorPrecio, valorCantidad);
        } else {
            setearPrecio(idCantidad, idPrecio, idResultado, valorPrecio, valorCantidad);
        }
    }

    function setearPrecio(val1, val2, idResultado, valorPrecio, valorCantidad) {
        if ($(val1).valid() && $(val2).val() != "" && $(val2).valid()) {
            $(idResultado).text('$' + ((1000 * valorPrecio) / valorCantidad).toFixed(2));
        }
    }

    jQuery.validator.addMethod("soloNumeros", function(value, element) {
        return this.optional(element) || /^[0-9]+(.[0-9]{1,2})?$/.test(value);
    }, "Ingrese un n&uacute;mero decimal. Ej: 22.50");

});
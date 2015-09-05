$(document).ready(function() {


    $("#btn_agregar").click(function() {
        var $row = $("<tr><td><h4 class='titulo'>Precio</h4><input class='form-control' id='exampleInputEmail1'></td><td><h4 class='titulo'>Cantidad</h4><input class='form-control' id='exampleInputEmail1'></td><td><h4 class='precio'>Resultado</h4><h4 class='precio'>$55.50</h4></td></tr>");

        $('table').append($row);
    });



    $("input").keyup(function(event) {
        var precio = $("#precio").val();
        var cantidad = $("#cantidad").val();

        if (precio != '' && cantidad != '') {
            $("#resultado").text('$' + ((1000 * precio) / cantidad).toFixed(2));
        } else {
            $("#resultado").text('');
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
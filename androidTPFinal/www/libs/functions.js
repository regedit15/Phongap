
//-------------------- Bateria
function nivelBateria() 
{
    document.addEventListener("deviceready", onDeviceReady, false);
}

function onDeviceReady() 
{
    window.addEventListener("batterystatus", onBatteryStatus, false);
}

function onBatteryStatus(info) 
{
    if (info.isPlugged) 
    {
        // var frase = "Esta conectado: SI";
        $("#checkbox1").val('on').slider('refresh');//si
    } 
    else 
    {
        // var frase = "Esta conectado: NO";
        $("#checkbox1").val('off').slider('refresh');//no
    }

    // alert("Nivel de bateria: " + info.level + "%. " + frase);
    $("#barra").val(info.level).slider("refresh");
}
//---------------------------------


//-------------------- Listar contactos
function listarContactos() 
{
    var options = new ContactFindOptions();
    // options.filter=""; 
    var fields = ["displayName", "name"];
    navigator.contacts.find(fields, onSuccess, onError, options);
}

function onSuccess(contacts) 
{
    alert("Cantidad de Contactos: " + contacts.length)
    for (var i=0; i<contacts.length; i++) {

        // alert("Nombre: " + contacts[i].displayName);
        $('#listaContactos').append('<li>' + contacts[i].displayName + '</li>').listview('refresh');
    }
}

function onError(contactError) 
{
    alert('sos un pancho que no sabe programar!');
}
//---------------------------------


function menu() 
{
    var myselect = document.getElementById("selectOpt");

    if(myselect.options[myselect.selectedIndex].value == "1")
    {
        $.mobile.changePage($("#bateria"), { transition: "slideup"});
        nivelBateria();
    }
    if(myselect.options[myselect.selectedIndex].value == "2")
    {
        $.mobile.changePage($("#contactos"), { transition: "slideup"});
        listarContactos();
    }
}
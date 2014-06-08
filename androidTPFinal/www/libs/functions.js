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
// //---------------------------------


//-------------------- Listar contactos
function listarContactos() {
    
    var options = new ContactFindOptions();
    options.filter = "";
    options.multiple = true; 
    var fields = ["displayName", "name", "phoneNumbers"];
    navigator.contacts.find(fields, onSuccess, onError, options);
}

function onSuccess(contacts) {

    for(var i = 0; i < contacts.length; i++) {

        var contact = contacts[i];
        // alert("" +  contact.displayName + " " + contact.phoneNumbers[0].value);

        $('#listaContactos').append('<li>' + contacts[i].displayName + contact.phoneNumbers[0].value + '</li>').listview('refresh');
    }
}

function onError(contactError) {
  alert('onError!');
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
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
        $("#checkbox1").val('on').slider('refresh');//si
    } 
    else 
    {
        $("#checkbox1").val('off').slider('refresh');//no
    }

    $("#barra").val(info.level).slider("refresh");
}
// //---------------------------------


//-------------------- Listar contactos
function listarContactos() {
    var options = new ContactFindOptions();
    options.filter = "";
    options.multiple = true; 
    var fields = ["displayName", "name", "phoneNumbers", "emails"];
    navigator.contacts.find(fields, onSuccess, onError, options);
}

function onSuccess(contacts) {

    for(var i = 0; i < contacts.length; i++) {

        var contact = contacts[i];

        $('#listaContactos').append('<li><a href="#dialogo">' + contacts[i].displayName + '</a></li>').listview('refresh');        
    }

    $('#listaContactos').children('li').on('click', function () 
    {
       $("#nombreContacto").text(contacts[$(this).index()].displayName);
       $("#telefonoContacto").text(contacts[$(this).index()].phoneNumbers[0].value);
       $("#correoContacto").text(contacts[$(this).index()].emails[0].value);
    });
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

function irAContactos() 
{
    $.mobile.changePage($("#contactos"), { transition: "slideup"});
}

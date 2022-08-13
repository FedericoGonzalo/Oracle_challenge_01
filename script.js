function encriptador() {

    // var mensaje=prompt("Escriba su mensaje, solo letras minusculas sin numeros ni caracteres");

    // alert("su mensaje a encriptar es: "+mensaje );
    //alert("Largo de mensaje "+mensaje.length );
    var mensaje = document.querySelector("input").value;
   
    var respuestaEncrp = "";
    for (var i = 0; i < mensaje.length; i++) {
        if (mensaje.charAt(i) == "a") {
            //    alert("A "+ mensaje.charAt(i) );
            respuestaEncrp = respuestaEncrp + ("ai");
        }
        else if (mensaje.charAt(i) == "e") {
            //   alert("E "+ mensaje.charAt(i) );
            respuestaEncrp = respuestaEncrp + ("enter")
        }
        else if (mensaje.charAt(i) == "i") {
            //  alert("I "+ mensaje.charAt(i) );
            respuestaEncrp = respuestaEncrp + ("imes")
        }
        else if (mensaje.charAt(i) == "o") {
            //  alert("O "+ mensaje.charAt(i) );
            respuestaEncrp = respuestaEncrp + ("ober")
        }
        else if (mensaje.charAt(i) == "u") {
            // alert("U "+ mensaje.charAt(i) );
            respuestaEncrp = respuestaEncrp + ("ufat")
        }
        else (respuestaEncrp = respuestaEncrp + (mensaje.charAt(i)));


    }


    mensaje = document.querySelector("input").value = respuestaEncrp;
 //   alert(respuestaEncrp);
}
function decencriptador() {

    var mensaje = document.querySelector("input").value;
    //  alert("su mensaje a encriptar es: " + mensaje);
    // alert("Largo de mensaje " + mensaje.length);

    var respuestaDecencrp = "";
    for (var i = 0; i < mensaje.length; i++) {
        if (mensaje.charAt(i) == "a") {
            //  alert("A "+ mensaje.charAt(i) );
            respuestaDecencrp = respuestaDecencrp + ("a");
            i++;
        }
        else if (mensaje.charAt(i) == "e") {
            //  alert("E "+ mensaje.charAt(i) );
            respuestaDecencrp = respuestaDecencrp + ("e");
            i = i + 4;
        }
        else if (mensaje.charAt(i) == "i") {
            //  alert("I "+ mensaje.charAt(i) );
            respuestaDecencrp = respuestaDecencrp + ("i");
            i = i + 3;
        }
        else if (mensaje.charAt(i) == "o") {
            //  alert("O "+ mensaje.charAt(i) );
            respuestaDecencrp = respuestaDecencrp + ("o");
            i = i + 3;
        }
        else if (mensaje.charAt(i) == "u") {
            //  alert("U "+ mensaje.charAt(i) );
            respuestaDecencrp = respuestaDecencrp + ("u");
            i = i + 3;
        }
        else (respuestaDecencrp = respuestaDecencrp + (mensaje.charAt(i)));


    }
    mensaje = document.querySelector("input").value =respuestaDecencrp;
  //  alert(respuestaDecencrp)



}

function copyF(){
    var mensaje = document.querySelector("input");
    mensaje.select();
    document.execCommand("copy");
}


var encriptar = document.getElementById("botonEncriptar");
encriptar.onclick = encriptador;
var decencriptar = document.getElementById("botonDesencriptar");
decencriptar.onclick = decencriptador;
var copiar = document.getElementById("botonCopiar");
copiar.onclick =copyF;

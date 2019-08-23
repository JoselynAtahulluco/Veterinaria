document.addEventListener("DOMContentLoaded",function(e){
    llena_mascota();
})

var dat=Date();
var arr=dat.split(" ")
document.getElementById('date').innerHTML=arr[2]+"/"+arr[1]+"/"+arr[3];

function llena_mascota(){
    var array_mascota=["Perro","Gato"];
   var select = document.getElementById("cbo_mascota");
   for (elemento in array_mascota) {
      var opcion = document.createElement("option");
      opcion.value = elemento;
      opcion.text = array_mascota[elemento];
      select.add(opcion);
   } 
}

document.getElementById("btn_ver").addEventListener("click",function(e){
    e.preventDefault();
   
    
       var select = document.getElementById('cbo_mascota');
       var indice = select.selectedIndex;
       document.getElementById('txt_texto').value = select.options[indice].text;
       document.getElementById('').open = select.options[indice].open;
   
   })



/*calcular */
function calc1(){
    document.getElementById("txtsubtotal").value = "69.00";
}
function calc2(){
    document.getElementById("txtsubtotal").value = "165.00";
}
function calc3(){
    document.getElementById("txtsubtotal").value = "239.00";
}
function calc4(){
    document.getElementById("txtsubtotal").value = "198.90";
}
function calc5(){
    document.getElementById("txtsubtotal").value = "358.00";
}
function calc6(){
    document.getElementById("txtsubtotal").value = "339.90";
}
function calc7(){
    document.getElementById("txtsubtotal").value = "25.00";
}
function calc8(){
    document.getElementById("txtsubtotal").value = "45.00";
}
function calc9(){
    document.getElementById("txtsubtotal").value = "27.90";
}
   



document.querySelector('#chkHabilita').addEventListener('change',function(e){
    if(document.getElementById('chkHabilita').checked== true){
        document.getElementById("txt").value = "1";
        document.getElementById("txt").disabled = false;
    }

})


document.querySelector('#btncalcular').addEventListener('click',function(e){
    var prod = parseInt(document.getElementById("btn9").value) * 14.00;
    var prod1 = parseInt(document.getElementById("txt1").value) * 18.00;
    var prod2 = parseInt(document.getElementById("txt3").value) * 25.00;
    var prod3 = parseInt(document.getElementById("txt4").value) * 32.00;
    var prod4 = parseInt(document.getElementById("txt5").value) * 50.00;

    var total = parseFloat(prod) + parseFloat(prod1) + parseFloat(prod2) + parseFloat(prod3) + parseFloat(prod4);
    var stotal = parseFloat(total) / 1.18;
    var igv = parseFloat(total) - parseFloat(stotal);

    if(document.getElementById("rdbpor0").checked)
    {
        document.getElementById("txtsubtotal").value = 'S/. ' + stotal.toFixed(2);
        document.getElementById("txtigv").value = 'S/. ' + igv.toFixed(2);
        document.getElementById("txtdescuento").value = 'S/. 0';
        document.getElementById("txttotal").value = 'S/. ' + total.toFixed(2);
    }

})

document.querySelector('#btnNuevo').addEventListener('click',function(e){
    document.querySelector('#txtsubtotal').value="";
    document.querySelector('#txtigv').value="";
    document.querySelector('#txttotal').value="";

})


document.getElementById("texto_nombre").addEventListener("blur", function(event) {
    let valor = event.target.value;
    if (!valor) { 
      alert("Dime tu nombre mmgvo");
    }else{
        alert(`Tu nombre es ${valor}, que nombre mas feo`);

    }
  });
  let company = prompt('Que empresa creo JavaScript?', '');
  if(company == 'Netscape'){
    alert("Correcto");

}else{
    alert("Estas meando fuera del perol");

}


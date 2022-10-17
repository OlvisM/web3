function Carga(){
    fetch("http://www.raydelto.org/agenda.php").then(datos => datos.json())
        
    .then(datos=>{
     let ef = datos;
          console.log(ef);
    
    });
}

function Enviar(){
    let nombre= document.getElementsByName("nombre");
    let apellido= document.getElementsByName("apellido");
    let telefono= document.getElementsByName("telefono");

  
 let string = {nombre: nombre, apellido: apellido, telefono: telefono};
 let url="http://www.raydelto.org/agenda.php";
 fetch(url, 
 {
 method:'POST', 
 body:JSON.stringify(string)}
 ).then( post => post.json()).then(
 () => 
 {
 console.log(post); 
 }
 );
}


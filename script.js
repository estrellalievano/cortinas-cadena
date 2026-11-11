document.getElementById("quoteForm").addEventListener("submit",function(e){
 e.preventDefault();
 const data=new FormData(this);
 const texto=[
 "Hola, quiero solicitar una cotización para Cortinas Cadena.",
 "Nombre: "+data.get("nombre"),
 "Teléfono: "+data.get("telefono"),
 "Correo: "+data.get("correo"),
 "Servicio: "+data.get("servicio"),
 "Mensaje: "+data.get("mensaje")
 ].join("\n");
 // Añadiremos el WhatsApp empresarial cuando tengamos el número.
 alert("¡Gracias! Tu solicitud está lista. Próximamente conectaremos este formulario con el WhatsApp de la empresa.");
 console.log(texto);
});
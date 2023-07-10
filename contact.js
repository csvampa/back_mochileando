// function sendEmail(){
//     var clientEmail = document.getElementById('fmail').value;
//     var clienName = document.getElementById('fname').value;
//     var subject = document.querySelector('#fasunto').value;
//     var body = document.querySelector('#fmsg').value;
//     Email.send({
//         Host : "smtp.elasticemail.com",
//         Username : "iroldan.br@gmail.com",
//         Password : "0FD95C3F7AEFD1F8C6D5653BDDAE1506C5FA",
//         To : (clientEmail),
//         From : "iroldan.br@gmail.com",
//         Subject : (subject),
//         Body : (`Hola ${clienName}
//         <br>
//         <br>
//         Muchas gracias por contactarte con nosotros, hemos recibido la siguiente consuta de tu parte:
//         <br>
//         ${body}
//         <br>
//         En los próximos 5 dias recibiras una respuesta de nuestros mochileros.
//         <br>
//         <br>
//         Estamos en contacto
//         <br>
//         Support Mochileando`)
//     }).then(
//       message => alert(message)
//     );
// }
fetch('http://localhost:5000/contacto')
  .then((response) => response.json())
    
function save_formulario() {
      let formulario = {
        nombre: this.nombre,
        apellido: this.apelido,
        mail: this.mail,
        asunto: this.asunto,
        mensaje: this.mensaje,
      };

      // Configurar las opciones para la solicitud fetch
      var options = {
        body: JSON.stringify(formulario), // Convertir el objeto a una cadena JSON
        method: "POST", // Establecer el método HTTP como POST
        headers: { "Content-Type": "application/json" },
        redirect: "follow",
      };

      // Realizar una solicitud fetch para guardar el producto en el servidor
      fetch(this.url, options)
        .then(function () {
          alert("Registro grabado!");
          window.location.href = "./contacto.html"; // Redirigir a la página de productos
        })
        .catch((err) => {
          console.error(err);
          alert("Error al Grabar.");
        });
      }

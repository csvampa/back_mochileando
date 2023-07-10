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
 
const url = 'http://localhost:5000/contacto';
const data = {
  nombre: document.getElementById('fname').value,
  apellido: document.getElementById('fapell').value,
  mail: document.getElementById('fmail').value,
  asunto: document.getElementById('fasunto').value,
  mensaje: document.getElementById('fmsg').value,
};

const requestOptions = {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data)
};

fetch(url, requestOptions)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log('Error:', error));
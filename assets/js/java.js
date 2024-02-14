function sendMail() {
  var params = {
    firstname: document.getElementById("firstname").value,
    lastname: document.getElementById("lastname").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_qa87gth";
  const templateID = "template_l2aqchu";

    emailjs.send(serviceID, templateID, params)
    .then(res=>{
        document.getElementById("firstname").value = "";
        document.getElementById("lastname").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Your message sent successfully!!")

    })
    .catch(err=>console.log(err));

}

const form = document.getElementById('contact-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = form.elements.name.value;
  const email = form.elements.email.value;
  const message = form.elements.message.value;

  if (name && email && message) {
    // Form is valid, do something here (e.g. send form data to a server)
  } else {
    // Form is invalid, display an error message
  }
});
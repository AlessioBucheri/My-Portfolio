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

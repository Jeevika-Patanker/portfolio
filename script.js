
const form = document.querySelector('form');


function sendEmail() {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const subject = document.getElementById("subject");
  const mess = document.getElementById("message");

  const bodyMessage = `Name: ${name.value}<br>  Email: ${email.value}<br> Subject: ${subject.value}<br> Message: ${mess.value}<br>`;


  Email.send({
    SecureToken:"dd4ec2e1-48cf-43f1-9e4d-b3c83f0224f8 ",
    To: "jeevikapatanker@gmail.com",
    From: "jeevikapatanker@gmail.com",
    Subject: subject.value,
    Body: bodyMessage
  }).then(
    message => {
      if (message == 'OK') {
        Swal.fire({
          title: "Success!!",
          text: "Your Message sent successfully!",
          icon: "success"
        });
      }
    }
  );
}
form.addEventListener("submit", (e) => {
  e.preventDefault();

  sendEmail();
});
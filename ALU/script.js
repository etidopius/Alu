const navbar = document.querySelector('.header .navbar');
const  menuButton = document.querySelector('.header .menu');

menuButton.addEventListener('click', () => {
    navbar.classList.toggle('show');
})

document.onscroll = () => {
    navbar.classList.remove('show');
    if(window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
    } else{
        document.querySelector('.header').classList.remove('active');
    }
};

document.onload = () => {
    if(window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
    } else{
        document.querySelector('.header').classList.remove('active');
    }
};


function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "piusetido@gmail.com",
        Password : "A82598BE149620720B6930D19FF49951BFE3",
        To : 'covenantnsa@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Contact Form Enquiry",
        Body : "Name: " + document.getElementById("name").value
            + "<br> Email: " + document.getElementById("email").value
            + "<br> Phone: " + document.getElementById("phone").value
            + "<br> Message: " + document.getElementById("text").value
    }).then(
      message => alert("Message sent successfully")
    );
}
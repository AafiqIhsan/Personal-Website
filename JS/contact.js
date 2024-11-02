var userName, userEmail, subject, message;
var link;

const email = "dibbyabarua3@gmail.com";
const ccEmail = "mrToothFairy37@gmail.com";
// const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

$("#emailMe").on("click",()=>{
    userName = $("#name").val();
    userEmail = $("#email").val();
    subject = $("#subject").val();
    message = $("#message").val();
    link = "mailto:" + email
            + "?cc=" + ccEmail
            + "?subject=" + subject
            + "&body=" + "Name: " + userName
            + "\nEmail: " + userEmail
            + "\nMessage: " + message;
    alert(link);

    window.location.href = link;
});
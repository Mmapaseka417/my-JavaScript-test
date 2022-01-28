function submit() {
    var username = document.getElementById("email").value;
    var password = document.getElementById("pwd").value;


if (username == "") {
    alert("I will not share username with anyone");
    return;
}

if (password == "") {
    alert("I will not share password with anyone");
    return;
}


    if (username == "user@gmail.com" && password == "mypassword") {
        window.location.href = "home.html";
    
    }
}
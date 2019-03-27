function password() {
    var masterpassword = "Facebook2019";
    var pass = document.getElementById('pass').value;
    if (pass == masterpassword) {
        alert("Success!")
        delay2();
    }
    else {
        alert("Invalid Password");
    }
    
}

function delay() {
    setTimeout(function(){ password(); }, 1000);
    
}

function delay2() {
    setTimeout(function(){ window.location = "info.html";}, 1000);
}
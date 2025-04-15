function abc(){
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let message = document.getElementById("message").value
    let result = document.getElementById("result")

    if(name==""){
        result.innerHTML = "Please enter Your name!"
    }
    else if(email==""){
        result.innerHTML = "Please enter your email!"
    }
    else if(message==""){
        result.innerHTML = "Please enter message!"
    }
    else {
        name = ""
        email = ""
        massage = ""
        result.innerHTML = "Your message was delivered"
        result.style.color = "green"
    }
}
var form =document.getElementById("form");

form.addEventListener("submit", function(event){
    event.preventDefault()

    var yourName = document.getElementById("yourName").value

    console.log(yourName)

    var phoneNumber = document.getElementById("phoneNumber").value

    console.log(phoneNumber)
})
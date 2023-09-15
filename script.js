console.log("Working");
document.querySelector(".btn").addEventListener("click", (e)=>{
    // Prevent submitting teh form.
    e.preventDefault();
    console.log("Clicked..")
    //no need for let user = getElementById(user), just use id.value
    console.log(username.value, password.value)
})
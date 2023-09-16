//Logic to fill the table
const showUpdatedPasswords = () => {
    // only recommended for a single table in HTML
    let tb = document.querySelector("table")
    let data = localStorage.getItem("passwords")
    if(data == null){
        tb.innerHTML = "No Data To Show"
    }
    else{
        let arr = JSON.parse(data);
        str = ""
        for (let index = 0; index < arr.length; index++) {
            const element = arr[index];
            str += `<tr>
            <td>${element.website}</td>
            <td>${element.username}</td>
            <td>${element.password}</td>
            <td>${"Delete"}</td>
            </tr>`
        }
        tb.innerHTML = tb.innerHTML + str
    }
}

console.log("Working");
document.querySelector(".btn").addEventListener("click", (e)=>{
    // Prevent submitting the form.
    e.preventDefault();
    console.log("Clicked..")
    //no need for let user = getElementById(user), just use id.value
    console.log(website.value, username.value, password.value)
    let passwords = localStorage.getItem("passwords")
    if(passwords == null){
        let json = []
        json.push({website:website.value, username:username.value, password:password.value})
        alert("Password Saved");
        localStorage.setItem("passwords", JSON.stringify(json))
    }
    else{
        let json = JSON.parse(localStorage.getItem("passwords"))
        json.push({website:website.value, username:username.value, password:password.value})
        alert("Password Saved");
        localStorage.setItem("passwords", JSON.stringify(json))
    }
    showUpdatedPasswords()
})
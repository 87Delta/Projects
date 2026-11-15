const generateBtn = document.getElementById("submit");

function generatePassword() {
    let newPassword = "";

    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
    const input = document.getElementById("charGen");
    const password = document.getElementById("passwordOutput");

    if (input.value < 12 || input.value > 128){ 
        alert("Please enter a number between 12 and 128.")
        return(input.value);
    }
    for (let i = 0; i < input.value; i++) {
        const randomIndex = Math.floor(Math.random()*chars.length);
        newPassword += chars[randomIndex];
    }
    password.textContent = newPassword;
    console.log(password.textContent);
    //displayPassword(); - this function is not needed as the password is already displayed in the password.textContent line above
}

generateBtn.addEventListener("click", generatePassword);

function displayPassword() {
    document.getElementById("passwordOutput").textContent = password;
    document.getElementById("passwordOutput").style.display = "block";
    document.getElementById("passwordOutput").style.fontSize = "20px";
    document.getElementById("passwordOutput").style.fontWeight = "bold";
    //document.getElementById("passwordOutput").style.color = "red"; -- optional styling
}


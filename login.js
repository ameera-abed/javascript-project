let username = document.getElementById("usernaame-input");
let goBtn = document.getElementById("go");
let password = document.getElementById("password");
let form = document.getElementById("form");
let emptyfieldWarning = document.getElementById("emptyfieldWarning");

goBtn.onclick = function() {

    emptyfieldWarning.classList.remove("warning");
    if (username.value && password.value) {
        let userValue = username.value;
        localStorage.setItem("user", userValue);
        location.href = "index1.html";
    } else {

        emptyfieldWarning.classList.add("warning");

        emptyfieldWarning.innerHTML = "please enter your username or password"

    }
}
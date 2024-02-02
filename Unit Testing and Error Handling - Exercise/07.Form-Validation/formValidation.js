function validate() {
    let usernameInput = document.getElementById("username");
    let emailInput = document.getElementById("email");
    let passwordInput = document.getElementById("password");
    let confirmPasswordInput = document.getElementById("confirm-password");
    let checkbox = document.getElementById("company");
    let companyNumberInput = document.getElementById("companyNumber");
    let companyInfo = document.getElementById("companyInfo");
    let userNamePattern = /^[a-zA-Z0-9]{3,20}$/;
    let emailPattern = /^[a-z0-9]+@[a-z0-9]+\.[a-z]+$/;
    let passwordPattern = /^[\w]{5,15}$/;
    checkbox.addEventListener("click", checkCompany);
    let submitButton = document.getElementById("submit");
    submitButton.addEventListener("click", submition);

    function checkCompany(event) {
        if (event.target.checked) {
            companyInfo.style.display = "block";
        } else {
            companyInfo.style.display = "none";
        }
    }

    function submition(event) {
        event.preventDefault();
        let result = document.getElementById("valid");
        if (userNamePattern.test(usernameInput.value)) {
            usernameInput.style.border = "none";
        } else {
            usernameInput.style.borderColor = "red";
        }

        if (emailPattern.test(emailInput.value)) {
            emailInput.style.border = "none";
        } else {
            emailInput.style.borderColor = "red";
        }

        if (passwordPattern.test(passwordInput.value)) {
            passwordInput.style.border = "none";
        } else {
            passwordInput.style.borderColor = "red";
        }

        if (passwordPattern.test(confirmPasswordInput.value) && confirmPasswordInput.value == passwordInput.value) {
            confirmPasswordInput.style.border = "none";
        } else {
            confirmPasswordInput.style.borderColor = "red";
        }

        if (checkbox.checked) {
            let number = Number(companyNumberInput.value);
            if (number >= 1000 && number <= 9999) {
                companyNumberInput.style.border = "none";
            } else {
                companyNumberInput.style.borderColor = "red";
            }
        }
        if (usernameInput.style.border == "none" &&
            emailInput.style.border == "none" &&
            passwordInput.style.border == "none" &&
            confirmPasswordInput.style.border == "none") {
            if (checkbox.checked) {
                if (companyNumberInput.style.border == "none") {
                    result.style.display = "block";
                }
            } else {
                result.style.display = "block";
            }
        }
    }
}
// form.js
document.addEventListener("DOMContentLoaded", function () {
    const resetButton = document.getElementById("reset");
    const submitButton = document.getElementById("submit");
    const form = document.getElementById("FormData");

    resetButton.addEventListener("click", function () {
        resetFormFields(form);
    });
    submitButton.addEventListener("click", function (event) {
        if (form.checkValidity()) {
            event.preventDefault(); // Prevent form submission
            openpopup();
        }
    });
});

function resetFormFields(form) {
    const inputs = form.querySelectorAll("input, select");
    inputs.forEach(function (input) {
        if (input.type === "radio" || input.type === "checkbox") {
            input.checked = false;
        } else if (input.type === "select-one") {
            input.selectedIndex = 0;
        } else {
            input.value = "";
        }
    });
}

function openpopup(){
    let popup=document.getElementById("popup");
    popup.classList.add("open-popup")
    const formValuesContainer = document.getElementById("formValues");
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const dob = document.getElementById("dob").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const profession = document.getElementById("profession").value;
    const country = document.getElementById("country").value;

    const content = `
            
            <table >
                    <tr>
                        <td><label for="firstName">First Name</label></td>
                        <td>${firstName}</td>
                    </tr>

                    <tr>
                        <td><label for="lastName">Last Name</label></td>
                        <td>${lastName}</td>
                    </tr>

                    <tr>
                        <td><label for="gender">Gender</label></td>
                        <td>
                        ${gender}
                                  </td>
                    </tr>

                    <tr>
                        <td><label for="dob">Date of birth</label></td>
                        <td>${dob}</td>
                    </tr>

                    <tr>
                        <td><label for="phone">Phone Number</label></td>
                        <td> ${phone}</td>
                    </tr>

                    <tr>
                        <td><label for="email">Email id</label></td>
                        <td> ${email}</td>
                    </tr>

                    <tr>
                        <td><label for="profession">Profession</label></td>
                        <td>${profession}</td>
                    </tr>

                    

                    <tr>
                        <td><label for="country">Country</label></td>
                        <td>
                        ${country}  
                        </td>
                    </tr>
                    
                </table>
        `;
        formValuesContainer.innerHTML = content;
}

function closepopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "none";
    const form = document.getElementById("FormData");
    resetFormFields(form);
}



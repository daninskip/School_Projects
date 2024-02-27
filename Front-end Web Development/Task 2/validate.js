function validateForm(event){
    
    let email1 = formWidget.email1.value
    let email2 = formWidget.email2.value

    if (email1 != email2){
        alert("Emails do not match, please re-enter");

        event.preventDefault();
    } 
}

let formWidget = document.querySelector("#questionForm");    
formWidget.addEventListener("submit", validateForm);



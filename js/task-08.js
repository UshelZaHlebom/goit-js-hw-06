const form = document.querySelector(`.login-form`)

form.addEventListener(`submit`, onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const {
        elements: { email, password }
    } = event.currentTarget;
    
    if (email.value === "" || password.value === "") {
        return alert("Please fill in all the fields!");
    }
    
    const dataFormResult = {};
    const formData = new FormData(event.currentTarget);

    formData.forEach((value, name) => {
    dataFormResult[name] = value;
    });

    console.log(dataFormResult);
    form.reset();
    }


    


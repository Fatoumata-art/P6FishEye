// gestion du modal form

let prevActiveElement;
//Open modal contact
function displayModal() {
  const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
  document.querySelector('.modal_close_button').focus();
}

//Close modal contact
function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
    document.querySelector('.modal_close_button').focus();
}

// function display msg error
    const setError = (element, message) => {
    const formData =  element.parentElement;
    const errorDisplay = formData.querySelector('.msgError');
    errorDisplay.innerHTML  = message;
    formData.classList.add("error")
    formData.classList.remove("success")
  }

    // function input success
    const setSuccess = element => {
    const formData =  element.parentElement;
    const errorDisplay = formData.querySelector('.msgError');
    errorDisplay.innerHTML  = '';
    formData.classList.add("success")
    formData.classList.remove("error")
  }

  let fname = document.getElementById("fname");
  let l_name = document.getElementById("lname");
  let email = document.getElementById("email");
  let message = document.getElementById("contactMessage");

 
  // control entre de prénom
fname.addEventListener("input", () => {
    const regexFname = /^[a-zA-Z]+(([- ])?[a-zA-Z])+$/;
    console.log(fname.value);
    if(fname.value == ''){
      setError(fname, 'Veuillez renseigner le Prénom');
      return false;
  }
  else if(!regexFname.test(fname.value)){
    setError(fname, 'Veuillez entrer 2 caractères ou plus pour le champ du Prénom.')
    return false;
  }else{
      setSuccess(fname);
      return true;
  }
  })

  
  // control entre du nom
  l_name.addEventListener("input", () => {
    const regexLast = /^[a-zA-Z]+(([- ])?[a-zA-Z])+$/;
    l_name.value = l_name.value.toUpperCase();
    if(l_name.value == ''){
      setError(l_name, 'Veuillez renseigner le Nom');
      return false;
    }else if(!regexLast.test(l_name.value)){
        setError(l_name, 'Veuillez entrer 2 caractères ou plus pour le champ du Prénom.')
        return false;
    }else
      setSuccess(l_name);
      return true;
  })
  
  // control entre de email
  function validEmail(email) {
    const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regexEmail.test(String(email).toLowerCase());
  };
  email.addEventListener("input", () => {
    console.log(email.value);
    if(email.value == ''){
      setError(email, 'Veuillez renseigner votre email');
      return false;
    }
   else if (!validEmail(email.value) ){
      setError(email, 'Veuillez entrer une adresse e-mail valide.')
      return false;
    }else{
        setSuccess(email);
        return true;
    }
    })

      // control entre du message
    message.addEventListener("input", () => {
    if(message.value == ''){
      setError(message, 'Ecrivez votre message');
      return false;
    }
})
  
function isFormValid() {
  if (!fname.value ||
    !l_name.value ||
    !email.value ||
    !message.value
   
    ) {
      return false;
  }else{
   
  return true;
  
}
}

const formModal = document.getElementById("form-modal");
const validation = document.querySelector("#contact_button");


validation.addEventListener('click', function(e) {

  e.preventDefault();
  if (!isFormValid()) {
    errorSubmit.innerHTML = "Veuillez renseigner tous les champs";
    errorSubmit.style.color = "red";
    return false;
  } else {
  
    
    // Build the alert message
   const alertMessage = `Prénom: ${fname.value}\nNom: ${l_name.value}\nEmail: ${email.value}\nMessage: ${message.value}`;
   // Show the alert message
    console.log(alertMessage);
    // Close the modal
    closeModal();
   
  }
   

})
          
// button contater moi
const buttonMouseover = document.querySelector(".contact_button");
buttonMouseover.addEventListener("mouseover", function(){
    buttonMouseover.style.backgroundColor="#D3573C";
    buttonMouseover.style.color="black";
});

const buttonMouseout = document.querySelector(".contact_button");
buttonMouseout.addEventListener("mouseout", function(){
    buttonMouseout.style.backgroundColor="#901C1C";
    buttonMouseout.style.color="white";
});

//ACCESSIBILITE PAR TOUCHE  "TAB"


const keyCodes = {
  tab: 9,
  enter: 13,
  escape: 27,
};

function closeDialog(e){
  if(document.querySelector('.c-dialog') == 'false' && e.keyCode === "escape" ){
    closeModal()
  }
}
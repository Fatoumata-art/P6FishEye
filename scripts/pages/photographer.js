//Mettre le code JavaScript lié à la page photographer.html
let fname = document.getElementById("fname");
let l_name = document.getElementById("lname");
let email = document.getElementById("email");
let message = document.getElementById("contactMessage");
const validation = document.forms["contact"];

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id')
console.log(id);

let photographer;
const photographerPromise = getPhotographer(id);
photographerPromise.then( value => photographer = value );
console.log("Photographer : ", photographer )

async function getPhotographer(id) {
        // Récupérer les données du photographe sélectionné.
        // paramètre : ID transmis dans l'URL
        try {
        let photographers = []
        const photographerData = await fetch('./data/photographers.json')
        if (photographerData.ok) {
            const data = await photographerData.json()
            //console.log(data);
            photographers = data.photographers

            const photographer = photographers.find(photographers => photographers.id == id)
            return photographer
        }
    } catch (err) {
        console.log(err)
        return new Error(err)
    }
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
-  


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
  

    validation.addEventListener('submit', function(e) {
        console.log
          e.preventDefault();
            alert("Veuillez renseigner tous les champs");
           
            return false;
          //}    
        })
          
    
          
async function init() {
    
}
  
//init();  
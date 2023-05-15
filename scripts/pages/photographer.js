//Mettre le code JavaScript lié à la page photographer.html

async function getPhotographer(id) {
    // get photographers data with fetch
    const photographerData = await fetch('./data/photographers.json')
      .then((data) => data.json());
  
    // extract photographer object
    const photographer = photographerData.photographers.find(
      (photographer) => photographer.id == id
    )
    return photographer
  
  

}

function displayPhotographer (data) {
    const main = document.getElementById('main')
    const photographerModel = photographerFactory(data)
    const userCardDOM = photographerModel.makeHeader()
    main.appendChild(userCardDOM)
}


async function init() {
     // Extraction de l'ID du photographe à traiter.
     const params = (new URL(document.location)).searchParams
    const photographerId = params.get('id')
    // Get photographers 
    const photographerInfo = await getPhotographer(photographerId);
    displayHeader(photographerInfo);
}
  
init();  
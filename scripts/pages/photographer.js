//Mettre le code JavaScript lié à la page photographer.html

//récupération du url id
const queryString = document.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id')


console.log(id);

displayMedia()

 async function getPhotographerMediaList() {
       
      
        const photographerData = await fetch('./data/photographers.json')
        .then(response => response.json())
        
    // extract media objects by photographer ID
    const mediaList = photographerData.media.filter(
      mediaPage => mediaPage.photographerId == id
    )

    return mediaList;
        
}

function displayBanner(){
  const photographBanner = document.querySelector('photograph-header'); 
}
 
function displayMedia() {
 
    const mediaContainer = document.querySelector('.photograph-body');
  
    if (mediaContainer) {
      const mediaListObj = getPhotographerMediaList();
      mediaListObj.then ( mediaList => {
        mediaList.forEach((mediaObj) => {
          const mediaModel = mediaFactory(mediaObj);
          console.log("mediaModel : ", mediaModel)
          const mediaDOM = mediaModel.getMediaDOM();
          mediaContainer.appendChild(mediaDOM);
        });
      })
    }
  }
  

- 
          
async function init() {
  //const photographer = getPhotographer()-
  //const displayMedia = displayMedia(media)

}
  
//init();  
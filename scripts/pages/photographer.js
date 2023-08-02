//Mettre le code JavaScript lié à la page photographer.html

//récupération du url id
const queryString = document.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id')


console.log(id);

displayMedia();
//displayBanner();
displayCounts();

 async function getPhotographerMediaList() {
       
      
        const photographerData = await fetch('./data/photographers.json')
        .then(response => response.json())
        
    // extract media objects by photographer ID
    const mediaList = photographerData.media.filter(
      mediaPage => mediaPage.photographerId == id
    )

    return mediaList;
        
}
//
function displayBanner(photographer){
  const photographBanner = document.querySelector('.photograph-header');
  const photographerModel = photographerFactory(photographer);
  console.log("banniere",photographerModel)
  //const bannerDOM = photographModel.getPhotographerBannerDOM();
  //photographBanner.appendChild(bannerDOM);
}
 
function displayMedia() {
 
    const mediaContainer = document.querySelector('.photograph-body');
  
    if (mediaContainer) {
      const mediaListObj = getPhotographerMediaList();
      mediaListObj.then ( mediaList => {
        mediaList.forEach((mediaObj) => {
          const mediaModel = mediaFactory(mediaObj);
          //console.log("mediaModel : ", mediaModel)
          const mediaDOM = mediaModel.getMediaDOM();
          mediaContainer.appendChild(mediaDOM);
        });
      })
    }
  }
  
  // price  photographer
  async function displayCounts(photographer) {
    const main = document.querySelector('main');
    const countDOM = document.createElement('div');
    countDOM.classList.add('counter');
    main.appendChild(countDOM);
  
    // Get all divs with the class .photograph-media-likes-count
    const likesList = document.querySelectorAll('.photograph-media-likes-count');
    let totalLikes = 0;
    // Iterate through each div and add up the total likes
    likesList.forEach(likesDiv => {
      const likes = parseInt(likesDiv.textContent);
      totalLikes += likes;
    });
  
    countDOM.innerHTML =
      `<div class="counter-likes">
          ${totalLikes} <i class="fas fa-heart"></i>
      </div>
      <div class="counter-daily">
          ${photographer.price} <span>€ /jour</span>
      </div>`;
  
    
  }
- 
          
async function init() {
  //const photographer = getPhotographer()-
  //const displayMedia = displayMedia(media)

}
  
//init();  
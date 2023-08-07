//Mettre le code JavaScript lié à la page photographer.html

//récupération du url id
const queryString = document.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id')

async function getPhotographer() {
// get photographers data with fetch
const photographerData = await fetch('./data/photographers.json')
.then((data) => data.json());

// extract photographer object
const photographer = photographerData.photographers.find(
(photographer) => photographer.id == id
)
return photographer
}

function displayBanner(data){
  const photographBanner = document.querySelector('.photograph-header');
  const photographerModel = photographerFactory(data);
  const bannerDOM = photographerModel.getPhotographerBannerDOM();
  photographBanner.appendChild(bannerDOM);
 
}
async function getPhotographerMediaList() {
       
  const photographerData = await fetch('./data/photographers.json')
  .then(response => response.json())
  
// extract media objects by photographer ID
const mediaList = photographerData.media.filter(
mediaPage => mediaPage.photographerId == id
)
return mediaList;
  
}
async function displayMedia() {
 
    const mediaContainer = document.querySelector('.photograph-body');
  
    if (mediaContainer) {
      const mediaListObj = getPhotographerMediaList();
      mediaListObj.then ( mediaList => {
        mediaList.forEach((mediaObj) => {
          console.log("Test : ", mediaObj)
          const mediaModel = mediaFactory(mediaObj);
          const mediaDOM = mediaModel.getMediaDOM();
          console.log("mediaModel : ", mediaDOM)
          mediaContainer.appendChild(mediaDOM);
        });
      })
    }
  
}
// price  photographer
async function displayCounts(photographer) {
  const main = document.getElementById('main');
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

async function init() {
const photograph = await getPhotographer();
  console.log(photograph)
  displayBanner(photograph);
  displayMedia();
  displayCounts(photograph);
}
  
init();  

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
async function getPhotographerMediaList(sortMedia = 'popularity') {
  
  const parameters = new URLSearchParams(window.location.search)
  const idString = parameters.get('id');

  const photographerData = await fetch('./data/photographers.json')
  .then(response => response.json())
  
// extract media objects by photographer ID
const mediaList = photographerData.media.filter(
mediaPage => mediaPage.photographerId == id
)
// sort the media by the specified property for filtering options
if (sortMedia === 'popularity') {
  mediaList.sort((a, b) => b.likes - a.likes);
} else if (sortMedia === 'date') {
  mediaList.sort((a, b) => new Date(b.date) - new Date(a.date));
} else if (sortMedia === 'title') {
  mediaList.sort((a, b) => a.title.localeCompare(b.title));
}

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
// Get the select element and add an event listener to it
const filterSelect = document.querySelector('#filter-select');
filterSelect.addEventListener('change', (event) => {
  // Get the selected option value
  const sortMedia = event.target.value;

  // Update the URL with the selected option value
  const parameters = new URLSearchParams(window.location.search);
  parameters.set('sort', sortMedia);
  window.location.search = parameters.toString();

  // Update the selected option in the filter button
  filterSelect.value = sortMedia;
});

// medias sorted by...
async function displaySortedMedia(media) {
  const mediaContainer = document.querySelector('.photograph-body');

  if (mediaContainer) {
    media.forEach((mediaObj) => {
      const mediaModel = mediaFactory(mediaObj);
      const mediaDOM = mediaModel.getMediaDOM();
      mediaContainer.appendChild(mediaDOM);
    });
  }
}

// lightbox
 function getLightBox(){
  const mediaContainer = document.querySelector('.photograph-body');
  console.log("hello");
  const lightboxModel = getLightboxDOM();
  mediaContainer.appendChild(lightboxModel);
  

      
    }

 


async function init() {
const photograph = await getPhotographer();

// Get the sort filter from the URL parameters
const parameters = new URLSearchParams(window.location.search);
const sortMedia = parameters.get('sort');
const photographmMediaList = await getPhotographerMediaList(sortMedia);
  displaySortedMedia(photographmMediaList);
  console.log(photograph)
  displayBanner(photograph);

  // Adding photographer's name into contact modal form 
 
  const contactModalName = document.getElementById('photographerName');
  contactModalName.innerHTML = ` ${photograph.name}`;

  //displayMedia();
  displayCounts(photograph);

  // Set the selected option in the filter button based on the URL parameter
  if (sortMedia === 'date') {
    filterSelect.selectedIndex = 1;
  } else if (sortMedia === 'title') {
    filterSelect.selectedIndex = 2;
  } else {
    filterSelect.selectedIndex = 0;
  }
  // lightBox 
  getLightBox()
  openLightbox()
  
}
  
  
init();  


// LightBox HTML Structure
function getLightboxDOM() {
  const lightboxDom = document.getElementById('lightboxId');
  console.log(lightboxDom)
  lightboxDom.classList.add('lightbox');
  lightboxDom.innerHTML = `
    <button class="lightbox-close">Fermer</button>
    <button class="lightbox-next">Suivant</button>
    <button class="lightbox-prev">Précédent</button>
    <div class="lightbox-container">
      <img src="assets/images/" alt="">
    </div>
  ` 
  
      lightboxDom.querySelector('.lightbox-close').addEventListener('click', closeLightbox)
      // add an event listener for the escape key
      document.addEventListener('keydown', handleKeyPress);

     

  return lightboxDom
} 

// Open 
function openLightbox() {
 
  const lightBoxDiv = document.querySelector(".lightbox");
  const links = document.querySelectorAll(".photograph-body a");
      
      // On ajoute l'écouteur click sur les liens
      for(let link of links){
          link.addEventListener("click", function(e){
              // On désactive le comportement des liens
              e.preventDefault();
  
              // On ajoute l'image du lien cliqué dans la modale
              const mediaContainer = lightBoxDiv.querySelector(".lightbox-container");
             // image.src = this.href;
             const image = document.createElement('img')
             mediaContainer.appendChild(image)
         
              // On affiche la modale
              lightBoxDiv.classList.add("show");

          });
      }
      
    }


// CLOSE
function closeLightbox() {
  // hide the lightbox
  document.querySelector('.lightbox').style.display = "none";
  document.querySelector('.lightbox').setAttribute('aria-hidden', 'true');

  // reset the video element to stop playback
  const video = document.querySelector('.photograph-media-video');
  if (video) {
    video.pause();
    video.currentTime = 0;
  }
}

// shutdown the lightbox by echap
function handleKeyPress(event) {
  // check if the escape key was pressed
  if (event.keyCode === 27) {
    closeLightbox();
  }
  
  // check if left arrow key was pressed
  if (event.keyCode === 37) {
    showPrevMediaItem();
  }
  
  // check if right arrow key was pressed
  if (event.keyCode === 39) {
    showNextMediaItem();
  }
}

// show next media item
function showNextMediaItem() {
  const mediaItems = document.querySelectorAll('.lightbox');
  for (let i = 0; i < mediaItems.length; i++) {
    let currentMediaItem = mediaItems[i];
    if (currentMediaItem.style.display === 'flex') {
      let nextMediaItem = mediaItems[i + 1];
      if (nextMediaItem) {
        currentMediaItem.style.display = 'none';
        nextMediaItem.style.display = 'flex';
      }
      break;
    }
  }
}

// show previous media item
function showPrevMediaItem() {
  const mediaItems = document.querySelectorAll('.lightbox');
  for (let i = 0; i < mediaItems.length; i++) {
    let currentMediaItem = mediaItems[i];
    if (currentMediaItem.style.display === 'flex') {
      let prevMediaItem = mediaItems[i - 1];
      if (prevMediaItem) {
        currentMediaItem.style.display = 'none';
        prevMediaItem.style.display = 'flex';
      }
      break;
    }
  }
}

 // add next and previous button functionality
 const nextButton = document.getElementsByClassName('.lightbox-next');
 nextButton.setAttribute('role', 'button')
 nextButton.setAttribute('aria-label', 'next media')
 nextButton.addEventListener('click', function () {
   showNextMediaItem();
 });

 const prevButton = document.getElementsByClassName('.lightbox-prev');
 prevButton.setAttribute('role', 'button')
 prevButton.setAttribute('aria-label', 'previous media')
 prevButton.addEventListener('click', function () {
   showPrevMediaItem();
 });

  
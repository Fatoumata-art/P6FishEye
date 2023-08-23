
// LightBox HTML Structure
function getLightboxDOM() {
  const lightboxDom = document.getElementById('lightboxId');
  lightboxDom.classList.add('lightbox');
  lightboxDom.innerHTML = `
    <button class="lightbox-close">Fermer</button>
    <button class="lightbox-next">Suivant</button>
    <button class="lightbox-prev">Précédent</button>
    <div class="lightbox-container">
      <img src="" alt="">
    </div>
  ` 
  
     // lightboxDom.querySelector('.lightbox-close').addEventListener('click', closeLightbox)
      // add an event listener for the escape key
     // document.addEventListener('keydown', handleKeyPress);

     

  return lightboxDom
} 

// Création de la lightbox
// on récupère toutes les images de la page et on ajoute un listener au click sur celle-ci 
// On récupère l'élément parent .media pour obtenir tout l'article et passer les éléments textuels + le tableau des result
window.onload = () => {
  
  // compare mediaid lablel and open lightbox onClick
  const mediaLinks = document.querySelectorAll('.linkMedia');
  const mediaLightboxCount = document.querySelectorAll('.lightbox').length;
console.log(mediaLightboxCount)
  mediaLinks.forEach(function (mediaLink) {
    mediaLink.addEventListener('click', function (e) {
      e.preventDefault();
      const mediaid = mediaLink.querySelector('img, video').getAttribute('mediaid');

      // Find the media-lightbox element with the same mediaid
      for (let i = 0; i < mediaLightboxCount; i++) {
        const mediaLightboxElement = document.querySelectorAll('.lightbox')[i];
        const mediaLightboxMediaid = mediaLightboxElement.querySelector('img, video').getAttribute('mediaid');
        if (mediaLightboxMediaid === mediaid) {
          // Display the media-lightbox element
          mediaLightboxElement.classList.add('show');
        } else {
          // Hide the other media-lightbox elements
          mediaLightboxElement.style.display = 'none';
        }
      }
      openLightbox();
    });
  });

}

   // On active le bouton close
   //close.addEventListener('click', closeLightbox)
   
     // }
          

// Open 

function openLightbox() {
  console.log("yesssssss")
  // display the lightbox with the clicked image
  document.getElementById('lightboxId').classList.add("show");
  document.getElementById('lightboxId').setAttribute('aria-hidden', 'false');
}

// CLOSE
function closeLightbox() {
  // hide the lightbox
  document.querySelector('.lightbox').classList.remove("show");
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
 //nextButton.setAttribute('role', 'button')
 //nextButton.setAttribute('aria-label', 'next media')
 nextButton.addEventListener('click', function () {
   showNextMediaItem();
 });

 const prevButton = document.getElementsByClassName('.lightbox-prev');
 //prevButton.setAttribute('role', 'button')
 //prevButton.setAttribute('aria-label', 'previous media')
 prevButton.addEventListener('click', function () {
   showPrevMediaItem();
 });

  
 / Open the lightbox
function openlightbox() {
    document.getElementById("lightboxId").style.display = "block";
   
  }
  
  // Close the lightbox
  function closelightbox() {
    document.getElementById("lightboxId").style.display = "none";
  }
  
  var slideIndex = 1;
  //showSlides(slideIndex);
  
  // Next/previous controls
  function plusSlides(n) {
    //showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    //showSlides(slideIndex = mediaLighbox);
  }

  window.onload = () => {
  const lightbox = document.getElementById("lightboxId")
  const links = document.getElementsByClassName("linkMedia");
  console.log(links)
  for(const link of links){
    link.addEventListener('click', function(e){
     // On désactive le comportement des liens
     e.preventDefault();

     // On ajoute l'image du lien cliqué dans la modale
     const image = lightbox.querySelector(".lightbox-container-media");
     console.log("je suis l'image", image)
     image.src = this.href;

     // On affiche la modale
     lightbox.classList.add("show");
 });

   console.log("ca marche")
  }
 
 }

//init()
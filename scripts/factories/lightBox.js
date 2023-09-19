
// window.onload = () => {
//   const mediaLightbox = document.getElementsByClassName('.photograph-media')
//   console.log(mediaLightbox);
// }


function getLightboxDOM() {
  const lightboxDom = document.getElementById('lightboxId');
  
  lightboxDom.innerHTML = `
    <button class="lightbox-close">Fermer</button>
    <button class="lightbox-next">Suivant</button>
    <button class="lightbox-prev">Précédent</button>
    <div class="lightbox-container">
      <img src="Event_Sparklers.jpg" alt="">
    </div>
  ` 
  
  

 // return lightboxDom
} 

function showMedia(media) {
  const lightbox = document.querySelector('.lightbox');
  lightbox.setAttribute('aria-hidden', 'false');
  lightbox.style.display = 'block';

  document.querySelector('.lightbox').setAttribute('aria-hidden', 'false');
  let img = lightbox.querySelector('.lightbox-container img');
  let video = lightbox.querySelector('.lightbox-container video');
  const captionText = lightbox.querySelector(".caption");

  if(media.video){
    //video
    video.alt = media.title;
    video.setAttribute('role', 'video');
    video.setAttribute("controls", "")
    video.setAttribute("autoPlay", "")
    video.src = `assets/images/${media.photographerId}/${media.video}`;
    video.style = "display: block";
    img.style = "display: none;"; 
  } else{
    // picture
   img.src = `assets/images/${media.photographerId}/${media.image}`;
  img.alt = media.title;
  img.setAttribute('role', 'img');
   img.style = "display: block;";
   video.style = "display: none;";
 }
  captionText.innerHTML = media.title;
}

// OPEN
function openLightbox(mediaList, index) {
  let media = mediaList[index];
  //console.log(" media = ", media);
    // display the lightbox with the clicked image
    const main = document.querySelector('main');
    main.setAttribute('aria-hidden', 'false');
    main.style = "display: none;";
    const lightbox = document.querySelector('.lightbox');
    const nextButton = lightbox.querySelector(".lightbox-next");
    const prevButton = lightbox.querySelector(".lightbox-prev");
    
    nextButton.setAttribute('role', 'button')
    nextButton.setAttribute('aria-label', 'next media')
    nextButton.ariaLabel ="photo suivante";
    nextButton.tabIndex ="1"
    nextButton.addEventListener('click', next)

    function next () {
      if (index <= mediaList.length) {
        index++;
        media = mediaList[index];
     
        if(index >= media.length - 1){
          showMedia(media);
          nextButton.style.display = "none"
          nextButton.tabIndex = "-1";
        }else{
          showMedia(media);
        }
      } 
    }

    prevButton.setAttribute('role', 'button')
    prevButton.setAttribute('aria-label', 'previous media')
    prevButton.addEventListener('click', previous )

    function previous() {
      index--;
      media = mediaList[index];
      showMedia(media);
        if(index == 0){
          showMedia(media);
          prevButton.style.display = "none"
          prevButton.tabIndex ="-1" 
        }else{
          showMedia(media);
      }
    }

    // add an event listener for the escape key
document.addEventListener('keydown', handleKeyPress);
// KEYBOARD
function handleKeyPress(event) {
  // check if the escape key was pressed
  if (event.keyCode === 27) {
    closeLightbox();
  }
  // check if left arrow key was pressed
  if (event.keyCode === 37) {
    previous();
  }
  // check if right arrow key was pressed
  if (event.keyCode === 39) {
    next();
  }
  // check if right arrow key was pressed
  // if (event.keyCode === "Enter") {
  //   showMedia(media);
  // }

}

     showMedia(media);
     closeLightbox()
 
}


function closeLightbox(){
   // add an event listener to the close button
  const closeButton = document.querySelector('.lightbox-close');
  closeButton.setAttribute('aria-label', 'close')
  if (closeButton) {
    closeButton.addEventListener('click', function (){
      // hide the lightbox
    document.querySelector('.lightbox').style.display = "none";
    document.querySelector('.lightbox').setAttribute('aria-hidden', 'true');

    // reset the video element to stop playback
    const video = document.querySelector('.photograph-media-video');
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
    })  
  }
}
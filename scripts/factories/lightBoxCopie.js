
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
  lightbox.style.display = 'block';
  document.querySelector('.lightbox').setAttribute('aria-hidden', 'false');
  let img = lightbox.querySelector('.lightbox-container img');
  let video = lightbox.querySelector('.lightbox-container video');
  const captionText = lightbox.querySelector(".caption");

  if(media.video){
    //video
    video.alt = media.title;
    video.src = `assets/images/${media.photographerId}/${media.video}`;
    video.style = "display: block";
    img.style = "display: none;"; 
  } else{
    // picture
   img.src = `assets/images/${media.photographerId}/${media.image}`;
  img.alt = media.title;
   img.style = "display: block;";
   video.style = "display: none;";
 }
  captionText.innerHTML = media.title;
}

// OPEN
function openLightbox(mediaList, index) {
  let media = mediaList[index];
  console.log(" media = ", media);
    // display the lightbox with the clicked image
    const lightbox = document.querySelector('.lightbox');
    const nextButton = lightbox.querySelector(".lightbox-next");
    const prevButton = lightbox.querySelector(".lightbox-prev");
    

    nextButton.addEventListener('click', function() {
      if (index < mediaList.length) {
        index++;
        media = mediaList[index];
        showMedia(media);
      } 
     })
     prevButton.addEventListener('click', function() {
        index--;
        media = mediaList[index];
        showMedia(media);
     
      
     })
    

     showMedia(media);

//  function preview(){
//   //let selectedMedia = media.img.src
//   let selectedMedia = media.img
   
//   console.log("selectedMedia", selectedMedia)
//   img = selectedMedia
//   if (!selectedMedia) {
//     selectedMedia = media.video
//     video = selectedMedia
//   } 

 

//  }

 
 
 
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


function init(){
  closeLightbox()

  
}

init();
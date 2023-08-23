window.onload = () => {
    const lightbox = document.querySelector("#lightbox");
    const close = document.querySelector("lightbox-close");
    
    const links = document.querySelectorAll("photograph-media-video img", "photograph-media-video");

    console.log("gggjffj",links)
    
    for (var t=0; t<mediasContainer.length; t++) { 
        if (mediasContainer[t].src== selectedPictures.src) {  
            numberPictureInArray = t;
            if(numberPictureInArray==0) {
                previousIcon.style.display ="none";  
            }
            if(numberPictureInArray== mediasContainer.length-1) {
                nextIcon.style.display ="none";  
            }
        }
    } 
    picture.src = selectedPictures.src;
    video.src = selectedPictures.src;
 
    
    // On active le bouton close
    close.addEventListener("click", function(){
        lightbox.classList.remove("show");
    });

    // On ferme au clic sur la lightbox
    lightbox.addEventListener("click", function(){
        lightbox.classList.remove("show");
    });
}

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

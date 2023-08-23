function displayLightbox(media) {

    // Getting required HTMLElements
    let lightbox = document.querySelector("#lightbox");
    let lightbox_media = document.querySelector(".lightbox-contaner");

    // We Empty the media container from the lightbox
    lightbox_media.innerHTML = "";

    // We create the root path of the media
    const path = `./assets/images/${media.photographerId}/`;
    let media = null;

    // We check if the media is an img or a video
    if(media.image != null){
        media = createElement("img", ["lightbox-media-img"], null, {"src": path + media.image, "alt": media.title, "tabindex": 0});
    }
    else{
        media = createElement("video", ["lightbox-media-vid"], null, {"src": path + media.video, "controls" : null, "aria-label": media.title + " video", "tabindex": 0});
    }
    // Media Title
    const title = createElement("p", ["lightbox-media-title"], media.title);

    // We append the media and the media title to the media_container HTMLElement
    lightbox_media.appendChild(media);
    lightbox_media.appendChild(title);

    // We display the Lightbox
    lightbox.style.display = "block";

}


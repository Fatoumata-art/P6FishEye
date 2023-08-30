 // check if video or img
 let mediaLinkElement, mediaLightboxElement;

 if (media.video) {
   const mediaElement = document.createElement('video');
   mediaElement.classList.add('photograph-media-video');
   mediaElement.src = `./assets/images/${media.photographerId}/${media.video}`;
   mediaElement.setAttribute('role', 'img');
   mediaElement.setAttribute('mediaID', `${media.id}`);

   mediaLinkElement = mediaElement.cloneNode(true);
   mediaLinkElement.href = `./assets/images/${media.photographerId}/${media.video}`;
   mediaLinkElement.target = '_blank';

   // Create a new <video> element and append it to the .photograph-media-link element
   const mediaLinkVideoElement = mediaElement.cloneNode(true);
   mediaLink.appendChild(mediaLinkVideoElement);

   // Create a new <video> element for the mediaLightboxElement and add the necessary attributes
   const mediaLightboxVideoElement = document.createElement('video');
   mediaLightboxVideoElement.classList.add('photograph-media-video');
   mediaLightboxVideoElement.src = `./assets/images/${media.photographerId}/${media.video}`;
   mediaLightboxVideoElement.setAttribute('role', 'img');
   mediaLightboxVideoElement.setAttribute('mediaID', `${media.id}`);
   mediaLightboxVideoElement.setAttribute('autoplay', 'on');
   mediaLightboxVideoElement.setAttribute('loop', '');

   // Add a <source> element to the mediaLightboxVideoElement to specify the video file type
   const sourceElement = document.createElement('source');
   sourceElement.src = `./assets/images/${media.photographerId}/${media.video}`;
   sourceElement.type = 'video/mp4';
   mediaLightboxVideoElement.appendChild(sourceElement);

   // Create a new <div> element for the media lightbox and append the mediaLightboxVideoElement
   mediaLightboxElement = document.createElement('div');
   mediaLightboxElement.classList.add('media-lightbox');
   mediaLightboxElement.appendChild(mediaLightboxVideoElement);


 } else {
   const mediaElement = document.createElement('img');
   mediaElement.classList.add('photograph-media-img');
   mediaElement.src = `./assets/images/${media.photographerId}/${media.image}`;
   mediaElement.alt = media.title;
   mediaElement.setAttribute('role', 'img');
   mediaElement.setAttribute('mediaID', `${media.id}`)

   mediaLinkElement = mediaElement.cloneNode(true);
   mediaLinkElement.href = `./assets/images/${media.photographerId}/${media.image}`;
   mediaLinkElement.target = '_blank';

   // Create a new <img> element and append it to both the 
   // .photograph-media-link and .media-lightbox elements
   const mediaLinkImgElement = mediaElement.cloneNode(true);
   mediaLink.appendChild(mediaLinkImgElement);
   const mediaLightboxImgElement = mediaElement.cloneNode(true);
   mediaLightboxElement = document.createElement('div');
   mediaLightboxElement.classList.add('media-lightbox');
   mediaLightboxElement.appendChild(mediaLightboxImgElement);
 }

 mediaDOM.appendChild(mediaLink);

 // create .media-lightbox-container 
 const mediaLightboxContainer = document.createElement('div');
 mediaLightboxContainer.classList.add('media-lightbox-container');
 mediaLightboxContainer.appendChild(mediaLightboxElement);

 // append into .lightbox-content
 const lightboxMedia = document.querySelector('.lightbox-content');
 lightboxMedia.appendChild(mediaLightboxContainer);

 // compare mediaid lablel and open lightbox onClick
 const mediaLinks = document.querySelectorAll('.photograph-media-link');
 const mediaLightboxCount = document.querySelectorAll('.media-lightbox').length;

 mediaLinks.forEach(function (mediaLink) {
   mediaLink.addEventListener('click', function (e) {
     e.preventDefault();
     const mediaid = mediaLink.querySelector('img, video').getAttribute('mediaid');

     // Find the media-lightbox element with the same mediaid
     for (let i = 0; i < mediaLightboxCount; i++) {
       const mediaLightboxElement = document.querySelectorAll('.media-lightbox')[i];
       const mediaLightboxMediaid = mediaLightboxElement.querySelector('img, video').getAttribute('mediaid');
       if (mediaLightboxMediaid === mediaid) {
         // Display the media-lightbox element
         mediaLightboxElement.style.display = 'flex';
       } else {
         // Hide the other media-lightbox elements
         mediaLightboxElement.style.display = 'none';
       }
     }
     openLightbox();
   });
 });
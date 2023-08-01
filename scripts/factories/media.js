function mediaFactory(media){
    const { name, city, country, tagline, title, image, likes, date, price} = media;

    const photo = `assets/images/${media.photographerId}/${media.image}`;
    const video = `assets/images/${media.photographerId}/${media.video}`;

    function getMediaDOM(){

    const mediaSection = document.createElement('section') ;
    mediaSection.classList.add('photograph-section');
    
    const mediaDOM = document.createElement('figure');
    mediaDOM.classList.add('photograph-media');
    mediaSection.appendChild(mediaDOM);


 //  Header Photographer's single page
    function getPhotographerBannerDOM() {
        const banner = document.createElement('div')
        banner.className = "banner"
        
        banner.innerHTML = `
        <div class="colOne">
            <h1 class="banner">${name}</h1>
            <h3 class="bannerLocation">${city}, ${country}</h3>
            <p class="bannerTagline">${tagline}</p>
        </div>
        <div class="colTwo">
            <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
        </div>
        <div class="colThree">
            <img class="bannerPicture" src="${picture}" alt="${name}"></img>
        </div>
        `

        return banner
    }      

       
       //check if it is img or video
       if(media.video){
            //video
            const videoLoad = document.createElement('video');
            videoLoad.classList.add("photograph-media-video");
            videoLoad.setAttribute("src", video);
            videoLoad.setAttribute('mediaID', `${media.id}`)
            videoLoad.type = 'video/mp4';
            videoLoad.alt = media.title;
            mediaDOM.appendChild(videoLoad);
            // Add a <source> element to the mediaLightboxVideoElement to specify the video file type
        

       }else{
             // picture
            const img = document.createElement( 'img' );
            img.classList.add("photograph-media-img");
            img.setAttribute("src", photo);
            img.alt = media.title;
            img.setAttribute('mediaID', `${media.id}`)
            mediaDOM.appendChild(img);
       }

        
      //title
      const h2 = document.createElement('h2');
      h2.textContent = media.title;
      h2.classList.add("photograph-media-title")
      mediaDOM.appendChild(h2);

      // mediaLikes
      const mediaLikes = document.createElement('div');
      mediaLikes.classList.add('photograph-media-likes');

      // likes per media
      const likeCount = document.createElement('span');
      likeCount.classList.add('photograph-media-likes-count');
      likeCount.innerText = media.likes;
      likeCount.setAttribute('role', 'text');
      mediaDOM.appendChild(likeCount);

       // like button
       const likeButton = document.createElement('i');
       likeButton.classList.add('fas', 'fa-heart');
       mediaDOM.appendChild(likeButton);
       if (media.isLiked) {
         likeButton.classList.add('liked');
       }
       likeButton.addEventListener('click', function () {

         // Handle the click event for adding or removing a like
         if (media.isLiked) {
           media.likes--;
           media.isLiked = false;
           likeButton.classList.remove('liked');
         } else {
           media.likes++;
           media.isLiked = true;
           likeButton.classList.add('liked');
         }
         likeCount.innerText = media.likes;

         // Update the total likes count in .counter
         const likesList = document.querySelectorAll('.photograph-media-likes-count');
         let totalLikes = 0;
         likesList.forEach((likesDiv) => {
           const likes = parseInt(likesDiv.textContent);
           totalLikes += likes;
         });
         const counterLikes = document.querySelector('.counter-likes');
         counterLikes.innerHTML = `${totalLikes} <i class="fas fa-heart"></i>`;
       });

     

      return mediaDOM
    }

    return  {
        title, photo, getMediaDOM, getPhotographerBannerDOM
    }
}
function mediaFactory(media){
    const { title, image, likes, date, price} = media;

    const photo = `assets/images/${media.photographerId}/${media.image}`;

    function getMediaDOM(){

        
    const mediaDOM = document.createElement('div');
      mediaDOM.classList.add('photograph-media');

       // picture
       const img = document.createElement( 'img' );
       img.setAttribute("src", photo);
       img.alt = media.title;
       img.setAttribute('mediaID', `${media.id}`)
       mediaDOM.appendChild(img);

      //title
      const h2 = document.createElement('h2');
      h2.textContent = title;
      mediaDOM.appendChild(h2);

     

      return mediaDOM
    }

    return  {
        title, photo, getMediaDOM
    }
}
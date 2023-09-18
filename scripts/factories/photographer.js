function photographerFactory(data) {
    const {name, portrait, city, country, tagline, price, id } = data;

    const picture = `assets/photographers/${portrait}`;

    //  Header Photographer's single page
    function getPhotographerBannerDOM() {
        const banner = document.createElement('div')
        banner.classList.add('banner');
        banner.innerHTML = `
        <div class="identityPhotographer" tabIndex="2">
            <h1 class="bannerName">${name}</h1>
            <h3 class="bannerLocation">${city}, ${country}</h3>
            <p class="bannerTagline">${tagline}</p>
        </div>
        <div class="bannerModal">
            <button class="contact_button" aria-haspopup="dialog"
            aria-controls="dialog" onclick="displayModal()" tabIndex="3">Contactez-moi</button>
        </div>
        <div class="bannerPicture">
            <img class="bannerPicture" src="${picture}" alt="${name}"></img>
        </div>
        `
        return banner
    } 
   
    function getUserCardDOM() {
        // article
        const article = document.createElement( 'article' );
        article.tabIndex = "3";

         // link for photographer page by id
         const linkUrl = document.createElement("a")
         linkUrl.classList.add("linkPage")
         linkUrl.href = `./photographer.html?id=${id}` 
		article.append(linkUrl); 
       

        // picture
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        img.alt = `Photo de ${name}`
        article.appendChild(img)
        linkUrl.appendChild(img);
       
        // name
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        article.appendChild(h2);
        linkUrl.appendChild(h2); // put <h2> into <a>

        // localisation
        const localisation = document.createElement( 'h3' );
        localisation.textContent = city + ', ' + country
        localisation.classList.add("photograph-localisation");
        article.appendChild(localisation);
 
        // paragraph
        const paragraph = document.createElement('h4')
        paragraph.textContent = tagline
        paragraph.classList.add("photograph-tagline")
        article.appendChild(paragraph)

        // price
        const pricing = document.createElement('span')
        pricing.textContent =  price + '€/jour'
        pricing.classList.add("photograph-price")
        article.appendChild(pricing)

        
      
        return (article);
    }
    return { picture,  getUserCardDOM, getPhotographerBannerDOM }
}
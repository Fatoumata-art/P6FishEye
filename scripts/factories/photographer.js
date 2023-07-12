function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price, id } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        // article
        const article = document.createElement( 'article' );

        // picture
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        article.appendChild(img);

        // name
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        article.appendChild(h2);


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

         // link for photographer page by id
         const linkUrl = document.createElement("a")
         linkUrl.href = `./photographer.html?id=${id}` 
		article.append(linkUrl); 
        linkUrl.appendChild(h2); // put <h2> into <a>
      



        return (article);
    }
    return { name, picture, getUserCardDOM }
}
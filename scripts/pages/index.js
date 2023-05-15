    async function getPhotographers() {
        

        try {
            let photographers = []
            const JSONFile = 'data/photographers.json'
    
            const res = await fetch(JSONFile)
            
            if (res.ok) {
                const data = await res.json()
                photographers = data.photographers
            }
            return photographers
        } catch (err) {
            console.log(err)
            return new Error(err)
        }

        
    
        
    }

    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    };

    async function init() {
        // pour utilisation de Promise //
        
        // Récupère les données des photographes
        const photographers = await getPhotographers()
        // Affiche les Photographes
        displayData(photographers);
    };
    
    init();
    

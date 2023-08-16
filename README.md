# Base de code du projet P6 - Parcours Front-end

## Démarrer le projet

Rien à installer ici, il suffit d'ouvrir le fichier `index.html`.

.lightbox {
    background: rgba(255, 255, 255, 0.9);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;
    display: none;
  }
  
  .lightbox-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .lightbox-content {
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
  }
  
  .lightbox-content img,
  .lightbox-content video {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
  }
  
  .close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 30px;
    color: white;
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    z-index: 9999;
  }
  
  .media-lightbox-container {
    display: flex;
  }
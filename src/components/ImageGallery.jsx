import css from "components/styles.module.css"

// import { Button } from "./Button"
import { ImageGalleryItem } from "./ImageGalleryItem"
// import { Loader } from "./Loader"

// import {getImage} from "./service/imgApi"

export function ImageGallery ({onClick,images}) {
 

        return (
         <ul className={css.ImageGallery}>
            {images.map(image =>
            (<ImageGalleryItem
              key={image.id}
              image={image}
              onClick={onClick}
            />))
            }
      
            </ul>)
     
          }
  
    
  


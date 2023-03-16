import css from "components/styles.module.css"


export const ImageGalleryItem = ({ image ,onClick } ) => {
    
    return (
       
            <li key={image.id}
              onClick={() => onClick(image.largeImageURL)}  
            className={css.ImageGalleryItem}>
                <img className={css.ImageGalleryItem_image}   src={image.webformatURL} alt="" />
            </li>)
            
      
       
    
}
import { useState } from "react"
import { Searchbar } from "./Searchbar"
import css from "components/styles.module.css"
import { ImageGallery } from "./ImageGallery"
import { ToastContainer } from 'react-toastify';
import { Modal } from "./Modal";




export function App () {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [nameChange, setNameChange] = useState('');


 const formSubmit = imgName => {
    setNameChange(imgName)
    
  }
 
 const toggleModal = evt => {
    setIsOpenModal(!isOpenModal)
  };

 const openModal = largeImage => {
   setCurrentImage(largeImage);  
   setIsOpenModal(true)
   
  };

 
  return(
    <div
      className={css.App}
     
    >
      <Searchbar onSubmit={formSubmit} />
      <ImageGallery
      imgName={nameChange} 
      onClick={openModal}  
      
      />
        

      {isOpenModal && (
          <Modal
         onClose={toggleModal} currentImage={currentImage}
          />
        )}
      <ToastContainer autoClose={3000}/>
    </div>
  )
}


import { useState,useEffect } from "react"
import { Searchbar } from "./Searchbar"
import {getImage} from "./service/imgApi"
import css from "components/styles.module.css"
import { ImageGallery } from "./ImageGallery"
import { ToastContainer } from 'react-toastify';
import { Modal } from "./Modal";
import { Loader } from "./Loader"
import { Button } from "./Button"




export function App() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [nameChange, setNameChange] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
   const [isLoading, setIsLoading] = useState(false);
  
  
  

  const formSubmit = imgName => {
    
    setImages([])
    setPage(1)
    setNameChange(imgName)
  }

  // useEffect(() => {
  //   if (nameChange) {
  //     setPage(1)
  //   }
  // }, [nameChange])
 
  
  useEffect(() => {
    
    if (!nameChange) {
      return
    }
     
      
    async function getData() {
      try {
        setIsLoading(true)
        const newData = await getImage(nameChange, page);
        
          setImages(prevState => [...prevState, ...newData])

        
        
      } catch(error) {
       console.log(error);
      }finally {
                setIsLoading(false);
            }
    }
      
    getData()
     
  }
    
   
  
    , [nameChange, page])
 
  const toggleModal = evt => {
    setIsOpenModal(!isOpenModal)
  };

  const openModal = largeImage => {
    setCurrentImage(largeImage);
    setIsOpenModal(true)
   
  };

  const handleLoadMore = () => {
   
    setPage(page + 1);
  
  }

 
  
    
  
    
  
    
  
    
 const isImages = images.length > 0;
  return (
    <div className={css.App}>
      
      <Searchbar onSubmit={formSubmit} />
      {isImages && (
      <ImageGallery
          images={images}
         
          onClick={openModal}
   
        />)}
        
        {isImages && isLoading === false && (
          <Button onClick={handleLoadMore} />)}
    
         {isLoading && <Loader />}
   
      
       
     
      
        
       
        {isOpenModal && (
          <Modal
            onClose={toggleModal} currentImage={currentImage}
          />
        )}
        <ToastContainer autoClose={3000} />
      </div>
    )
  }


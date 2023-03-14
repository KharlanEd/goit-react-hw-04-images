// import css from "components/styles.module.css"
import { useState,useEffect } from "react"
import { Button } from "./Button"
import { ImageGalleryItem } from "./ImageGalleryItem"
import { Loader } from "./Loader"

import {getImage} from "./service/imgApi"

export function ImageGallery ({onClick,imgName}) {
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [status,setStatus]= useState('init')
 
  // state = {
  //   page: 1,
  //   images: [],
  //   status: 'id',
  // };


  
  useEffect(() => {
    if (!imgName) {
      return
    }
    
    async function getData() {
       try {  
        const newData = await getImage(imgName);
         setImages(newData);
         setStatus('resolved') 
      } catch {
        setStatus('error')
      }
    }
  getData()
  },[imgName])
  
  useEffect(() => {
    if (page > 1) {
      async function getPage() {
        const newPage = await getImage(imgName, page);
        setImages(prevState => [...prevState, ...newPage])
      }
      getPage()
    }
    
  },[imgName,page])

    
       
const  handleLoadMore = () => {
    setPage(prevState => (prevState + 1) );
  };

  

 
      
    if (status === 'pending') {
      return <Loader/>
    }
    
    if (status === 'rejected') {
      return (<h2>Ничего не найденно</h2>)
    }
    
    if (status === 'resolved') {
        return (
       <>
        <ImageGalleryItem
              nameImg={images}
              onClick={onClick}
        />
        
        {images.length >= 12 &&
          <Button onClick={handleLoadMore} />}
       
       </>         
          
            
    )
     }
   
    
  }


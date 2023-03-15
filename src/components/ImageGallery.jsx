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
    if (imgName) {
      setPage(1)
    }
  },[imgName])
 
  
  useEffect(() => {
    
    if (!imgName) {
      return
    }
     
      
       async function getData() {
      try { 
         setStatus('pending')
        const newData = await getImage(imgName, page);
        
        setImages(newData);
        
        setStatus('resolved') 
        if (page > 1) {
          setImages(prevState => [...prevState, ...newData])

        }
        
      } catch {
        setStatus('error')
      }
      }
      
      getData()
     
    }
    
   
  
  ,[imgName, page])
  
  // useEffect(() => {
  
    
  //   if (page < 1) {
      
  //     async function getPage() {
  //       const newPage = await getImage(imgName, page);
        
  //       setImages(prevState => [...prevState, ...newPage])
        
  //     }
  //     getPage()
     
      
      
  //   }
  //   return
    
  // },[imgName, page])

   
       
  const handleLoadMore = () => {
   
    setPage( page + 1);
  
  }

  

 
      
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


import {useEffect } from 'react';
import css from "components/styles.module.css"



export function Modal ({onClose,currentImage}) {
 useEffect(() => {
    const handleKeyModalClose = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyModalClose);
    return () => {
      window.removeEventListener('keydown', handleKeyModalClose);
    };
  }, [onClose]);

  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };
 
    return (
      <div className={css.Overlay} onClick={handleBackdropClick}>
        <div className={css.Modal}>
          <img src={currentImage} alt="" />
        </div>
      </div>
    );
  }


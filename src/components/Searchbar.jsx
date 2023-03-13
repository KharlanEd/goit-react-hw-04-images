import { useState } from "react";
import css from "components/styles.module.css"

import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export function Searchbar ({onSubmit}) {
    const [imgName, setImgName] = useState('');
   
   

  const  nameChange = e => {
      setImgName(e.currentTarget.value.toLowerCase());

        
    }

  const  nameSabmit = e => {
        e.preventDefault();

        if (imgName.trim() === '') {
            toast.error('Ведіть значення')
            return
        }
        
       onSubmit(imgName)

        setImgName('')
        
    }

    

    
        return (
    <header className={css.Searchbar}>
        <form className={css.SearchForm}
            onSubmit={nameSabmit}
                >
        <button type="submit" className={css.SearchForm_button}>
            <span className={css.button_label}>Search</span>
        </button>

        <input
         className={css.SearchForm_input}
         type="text"
         value={imgName}
        placeholder="Search images and photos"
        onChange={nameChange}                
    />
  </form>
</header>
        )
    }

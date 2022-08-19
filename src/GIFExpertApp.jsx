import { useState } from 'react';
import { AddCategory, GifGrid } from "./components";


export const GIFExpertApp = () => {


    const [ categories, setCategories ] = useState( ['Dragon Ball'] );

    const onAddCategory = (newCategory) => {

        if( categories.includes(newCategory) ) return;
        setCategories([newCategory,...categories]);
    }


  return (
    <>

    <h1>GIFExpertApp</h1>

    <AddCategory
    onNewCategory = { onAddCategory }

    />

    {/* Listado de categorias */}

        {
        categories.map(category => 
           (
            <GifGrid 
            key={ category }
            category = { category } 
            />
           )
         )
        }


    </>
  )
}

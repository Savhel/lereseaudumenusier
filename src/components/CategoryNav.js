import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../api/supabaseClient';
  
const CategoryNav = () => {
  
  const [categories, setCategories] = useState(null);
  const [isLoading, setIsLoading] = useState(true);


useEffect(() => {
  fetchCategories();
}, []);

 async function fetchCategories () {
    try {
      const { data, error } = await supabase
          .from('categories')
          .select('*')

        if(error) throw error;

        if (data != null) {
        //  console.log("data",data);
          setCategories(data);
        }
    } catch (error) {
      alert(error.message);
    } finally {
      setIsLoading(false);
    }
  };


 // console.log(categories) 


  return(
    <aside className='hidden xl:flex'>
      <div className='bg-primary flex flex-col w-[286px] h-[500px] rounded-[8px] overflow-hidden'>
        <div className='bg-accent py-4 text-primary font-semibold uppercase flex items-center justify-center'>Catégories</div>
        <div className='flex flex-col gap-y-6 p-6 overflow-y-auto h-[70vh]'>
          {categories?.map((categorie) => {
           // console.log(categorie.nom);
            return <Link to={`/products/${categorie.id}`} className='cursor-pointer uppercase' key={categorie.id}>{categorie.nom}</Link>;
          })}
        </div>
      </div>
    </aside>
  );
};

export default CategoryNav;

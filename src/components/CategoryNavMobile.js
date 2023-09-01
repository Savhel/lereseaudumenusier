import React, { useEffect, useState } from 'react';

import { FiX } from 'react-icons/fi'
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { supabase } from '../api/supabaseClient';


const CategoryNavMobile = ({ setMenu }) => {


  //recuperer les categories
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

  return (
    <div className='w-full h-full bg-primary p-8'>
      {/* close icon */}
      <div className='flex justify-end'>
        <FiX
          onClick={() => setMenu(false)}
          className='cursor-pointer text-3xl' />
      </div>
      <div className='flex flex-col gap-y-8'>
        {categories?.map((categorie) => {
          return <Link to={`products/${categorie.id}`} onClick={() => setMenu(false)} className='uppercase font-medium ' key={categorie.id}>{categorie.nom}</Link>
        })}
      </div>
    </div>
  );
};

export default CategoryNavMobile;

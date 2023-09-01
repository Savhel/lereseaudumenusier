import React, { useEffect, useState } from 'react';

import { useLocation } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import CategoryNav from '../components/CategoryNav';
import Product from '../components/Product';
import { supabase } from '../api/supabaseClient';


const Search = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get('query'); 
  //console.log(searchTerm);
  //recuperer les produits en fonctions de la recherche
 
  
   //recuperer les categories
   const [produits, setProduits] = useState(null);
   const [isLoading, setIsLoading] = useState(true);
 
 
 useEffect(() => {
   fetchCategories();
 }, []);
 
  async function fetchCategories () {
     try {
       const { data, error } = await supabase
           .from('produits')
           .select(`*,
           categories (
            nom
           )`)
           .like('titre', `%${searchTerm}%`)
           
 
         if(error) throw error;
 
         if (data != null) {
          // console.log("data",data);
           setProduits(data);
         }
     } catch (error) {
       alert(error.message);
     } finally {
       setIsLoading(false);
     }
   };
 
 
   // console.log(produits)
  
  
return(
    <div className='mb-16 pt-40 lg:pt-0'>
    <div className='container mx-auto'>
      <div className='gap-x-[30px]'>
        <CategoryNav />
        <main>
          <div className='py-3 text-xl uppercase text-center lg:text-left'>{produits?.length > 0 ? `${produits.length} résultat pour la recherche de  ${searchTerm}` : `Aucune données ne correspond à ${searchTerm}`}</div>
          <div className=' grid  md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-[15px] md:gap-[30px] sm:grid-cols-1 '>
            {produits?.map((product) => {
              return (
                <Product product={product} key={product.id}/>
              );
            })}
          </div>
        </main>
      </div>
    </div>
  </div>
  );
};

export default Search;

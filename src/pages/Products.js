import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import CategoryNav from '../components/CategoryNav';
import Product from '../components/Product';
import { supabase } from '../api/supabaseClient';


const Products = () => {
  const { id } = useParams();

  //recuperer les profuits en fonction de leurs categories
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
             *
           )`)
           .eq('categorie_id',`${id}`)
           
 
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
 
 
   //console.log(produits)

  const [titre, setTitre] = useState(null);
  useEffect(() => {
    if (produits) {
      setTitre(produits[0].categories.nom)
    }
  },[produits])
  return <div className='mb-16 pt-40 lg:pt-0'> 
    <div className='container mx-auto'>
      <div className='gap-x-[30px]'>
        <CategoryNav />
        <main>
          <div className='py-3 text-xl uppercase text-center lg:text-left'>{titre}</div>
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
  </div>;
};

export default Products;

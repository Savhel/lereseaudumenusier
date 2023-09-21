import React, { useEffect, useState } from 'react';
import ProductSlider from './ProductSlider';
import { supabase } from '../api/supabaseClient';



const RelatedProducts = ({ categorieId, produitId }) => {
  

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
            .eq('categorie_id',`${categorieId}`)
            .neq('id',`${produitId}`)
            
  
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


  if (produits === null) {
    return <div className="container mx-auto">Chargement des données...</div>;
  }
  if (produits[0]) {
    return <div className="container mx-auto">Chargement des données...</div>;
  }
  return <div className='mb-16'>
    <div className='container mx-auto'>
      <h2 className='h2 mb-6 text-center xl:text-left'>Produits de la même categorie</h2>
      {produits[0] ? <ProductSlider data = {produits}/> : <h2 className='h4 mb-6 text-center xl:text-left'>Le produits ci-dessus est le seul de cette catégorie</h2>}
      
    </div>
  </div>
};

export default RelatedProducts;

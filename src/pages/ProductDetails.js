import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import RelatedProducts from "../components/RelatedProducts";
import { CartContext } from "../context/CartContext";
import { supabase } from '../api/supabaseClient';
import PropagateLoader from "react-spinners/PropagateLoader";


const ProductDetails = () => {
  const { addToCart } = useContext(CartContext);
  const { id } = useParams();

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
           .eq('id',`${id}`)
           
 
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

  if (!produits) {
    return <div className="container mx-auto text-center"><PropagateLoader color={"#f8a100"} /></div>;
  }else{

  const categorieId = produits[0].categories.id;
  const produitId = produits[0].id;
  

  return (
    <div className="mb-16 pt-44 lg:pt-[30px] xl:pt-0">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-[30px] mb-[30px]">
          <div className="flex-1 lg:max-w-[40%] lg:h-[540px] bg-white border-accent rounded-lg flex justify-center items-center">
            <img
              src={`${produits[0].image}`}
              alt=""
              className="w-full max-w-[65%]"
            />
          </div>
          <div className="flex-1 bg-primary p-12 xl:p-20 rounded-lg flex flex-col justify-center">
            <div className="uppercase text-accent text-lg font-medium mb-2">
              {produits[0].categories.nom}
            </div>
            <h2 className="h2 mb-4">{produits[0].titre}</h2>
            <p className="mb-12">
              {produits[0].description}
            </p>
            <div className="flex items-center gap-x-8">
              <div className="text-3xl text-accent font-semibold">{produits[0].prix} Fcfa</div>
              <button onClick={() => addToCart(produits, id)} className="btn btn-accent p-2">Ajouter au panier</button>
            </div>
          </div>
        </div>
        <RelatedProducts categorieId={categorieId} produitId={produitId}/>
      </div>
    </div>
  );
  }

};

export default ProductDetails;

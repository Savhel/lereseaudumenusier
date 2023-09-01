import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PropagateLoader from "react-spinners/PropagateLoader";
import CategoryNav from "../components/CategoryNav";
import Product from "../components/Product";
import { supabase } from '../api/supabaseClient';


const AllProducts = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

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

  if (error) {
    return <div className="container mx-auto text-center">Une erreur est survenue... Veillez réessayer plus tard ! </div>;
  }

  const ProductMemo = React.memo(Product);

  return (
    <div className="mb-16 pt-40 lg:pt-0">
      <div className="container mx-auto">
        <div className="gap-x-[30px]">
          <CategoryNav />
          <main>
            <div className="justify-items-center justify-center text-center">
              {isLoading && <PropagateLoader color={"#f8a100"} />}
              {!produits && <PropagateLoader color={"#f8a100"} />}
            </div>
            <div className="grid md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-[15px] md:gap-[30px] sm:grid-cols-1">
              {produits?.map((product) => (
                <ProductMemo product={product} key={product.id} />
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;

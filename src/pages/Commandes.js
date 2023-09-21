import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Benefits from "../components/Benefits";
import { supabase } from '../api/supabaseClient';
import PropagateLoader from "react-spinners/PropagateLoader";


const Commandes = () => {


 const { id } = useParams();
 const [produits, setProduits] = useState(null);
 
 //console.log(id)
  useEffect(() => {
  

 },[fetchCategories]);
 
  async function fetchCategories () {
     try {
       const { data, error } = await supabase
           .from('commandes')
           .select("*")
           .eq('id',`${id}`)
           
      console.log(data);

         if(error) throw error;
 
         if (data != null) {
          // console.log("data",data);
           setProduits(data);
         }
     } catch (error) {
       alert(error.message);
     }
   };
 
 
  // console.log(produits)

 if (!produits) {
   return <div className="justify-items-center justify-center text-center"> 
              <PropagateLoader color={"#f8a100"} />
          </div>;
 }
  



  return (
    <div className="sm:w-full h-ful px-4 text-white bottom-7 mt-[10em] justify-center my-auto mx-auto">
      <div className=" mx-auto">
        <div className="mx-auto md:w-[50em] lg:w-[50em] xl:w-[50em]">
          <h2 className="text-center text-2xl">
            Commandes N°- {produits[0].id}
          </h2>
          <h3 className="text-center text-lg text-accent mb-3 ">
            Besoin de ces outils à <u className="text-white">{produits[0].adresse}</u>  pour
            plus d'information par rapport contact le client au <u className="text-white">+237-{produits[0].telephone}</u>
          </h3>
          <hr></hr>
        </div>
        <div className="flex flex-col gap-y-10 px-2 mx-auto mt-3 justify-center items-center">
          {produits[0].panier.map((item) => {
            return <Benefits item={item} key={item.id} />;
          })}
        </div>
      </div>
      {/*sous total et total */}
      <div className="px-6 py-10 flex flex-col">
        {/*Total*/}
        <div className="flex justify-between text-xl mx-auto md:w-[50em] lg:w-[50em] xl:w-[50em]">
          <div className="text-[20px] my-auto">Total : </div>
          <div className="bg-accent p-3 rounded-lg text-black">
            {produits[0].total} Fcfa
          </div>
        </div>
      </div>
    </div>
  );
};

export default Commandes;

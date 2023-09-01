import React from 'react';
import {Link } from 'react-router-dom'
const Product = ({ product }) => {
  //console.log(product);
  //console.log(product.attributes.isNew);
  //console.log(product.attributes.categories);
   if (!product) {
     return <div className="container mx-auto">Chargement des données...</div>;
   }
  return (
   // console.log(product);
    <Link to={`/product/${product.id}`}>
      <div className="bg-white w-[100%] h-[362px] rounded-[8px] overflow-hidden relative group text-center ">
        {/* contenu */}
        {product.isNew ? (
          <div className="absolute bg-accent text-primary text-[12px] font-extrabold uppercase top-4 right-4 px-2 rounded-full z-10">
            Nouveaux
          </div>
        ) : (
          ""
        )}
        {/*images */}
        <div className="w-full h-[200px] flex items-center justify-center relative">
          <img
            className="w-[160px] h-[160px] group-hover:scale-90 transition-all"
            src={`${product.image}`}
            alt=""
          />
        </div>
        {/* texte */}
        <div className="px-6 pb-8 flex-col">
          {/*titre de sa categorie */}
          <div className="text-[15px] font-bold text-accent mb-2">
            {product.categories.length >= 1 &&
              product.categories.nom}
          </div>
          {/*titre du produit */}
          <div className="text-[20px] text-black capitalize mb-2 lg:mb-5">
            {product.titre.substring(0, 15)}...
          </div>
          {/*Prix */}
          <div className="text-[20px] font-extrabold text-black">
            {product.prix} Fcfa
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Product;

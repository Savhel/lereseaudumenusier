import React from 'react';
import ProductSlider from './ProductSlider';
import useFetch from '../hooks/useFetch';
import AllProducts from '../pages/AllProducts';

const LatestProducts = () => {

  //recuperer les nouveau produits
    const { data } = useFetch('/products?populate=*&filters[isNew]=true'); 
    
  return (
        <div className='mb-16'>
            <div className='container mx-auto'>
                <h2 className='h2 mb-6 text-center xl:text-left'>Nos variétés de produits en stock</h2>
            </div>
            {/* <ProductSlider data={data} /> */}
            <AllProducts />
        </div>
    );
};

export default LatestProducts;

import React from 'react';
import AllProducts from '../pages/AllProducts';

const LatestProducts = () => {

    
  return (
        <div className='mb-16'>
            <div className='container mx-auto'>
                <h2 className='h2 mb-6 text-center xl:text-left'>Nos variétés de produits en stock</h2>
            </div>
            <AllProducts />
        </div>
    );
};

export default LatestProducts;

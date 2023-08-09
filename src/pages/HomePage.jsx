import React, { useEffect, useState } from 'react';
import Layout from '../layout/Layout';
import ProductList from '../components/ProductList';
import fetchProducts from '../APIRequests/fetchProducts';


const HomePage = () => {

    const[products,setProducts]=useState([])
    const[error,setError]=useState("")

    useEffect(()=>{

        fetchProducts()
        .then(

          (data)=> setProducts(data)

        )
        .catch(

            (err)=>setError(err)
        )

     

    },[]);
    //decide what to render

    let output;

    if(error){
        output= <div>There Was an error</div>
    }
    else if(products?.length>0){
        output= products.map(product=><ProductList/>)
    }
    else{
        <div>Product Not Found</div>
    }
    return (
        <div>
            <Layout>
                <div className='container z-10 mx-auto my-12 p-9'>
                    <div className='grid grid-cols-1 mt-2 md:grid-cols-2 lg:grid-cols-4'>
                        {output}
                    </div>
                </div>
              
            </Layout>
           
            
        </div>
    );
};

export default HomePage;
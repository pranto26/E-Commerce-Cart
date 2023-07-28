import React from 'react';
import Layout from '../layout/Layout';
import ProductList from '../components/ProductList';

const HomePage = () => {
    return (
        <div>
            <Layout>
                <ProductList/>
            </Layout>
            
        </div>
    );
};

export default HomePage;
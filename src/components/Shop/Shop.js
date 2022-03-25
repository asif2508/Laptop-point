import React, { useEffect } from 'react';
import { useState } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(response => response.json())
        .then(data => setProducts(data))
    },[])
    
    return (
        <div className='shop-conatiner'>
           <Container>
               <h1 className='mb-4'>Available Items</h1>
           <Row>
                <Col xs={12} md={8} lg={8}>
                    <Row xs={1} md={3} className="g-4">
                        {
                            products.map(product => <Product
                            key={product.id}
                            product = {product}
                            ></Product>)
                        }
                    </Row>
                </Col>

            <Col  xs={12} md={4} lg={4}>
            
            </Col>
        </Row> 
        </Container>
        </div>
    );
};

export default Shop;
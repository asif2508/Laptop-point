import React, { useEffect } from 'react';
import { useState } from 'react';
import {Row, Col} from 'react-bootstrap';

const Shop = () => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(response => response.json())
        .then(data => setProducts(data))
    },[])
    
    return (
        <div>
           <Row>
                <Col xs={12} md={8}>
                    {
                        products.map(product => <h1>{product.name}</h1>)
                    }
                </Col>
                <Col xs={6} md={4}>
                xs=6 md=4
                </Col>
            </Row> 
        </div>
    );
};

export default Shop;
import React, { useEffect } from 'react';
import { useState } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import Items from '../Items/Items';
import Product from '../Product/Product';
import './Shop.css';
import Item from '../Item/Item';


const Shop = () => {
    // getting the products
    const [products, setProducts] = useState([])
    const [selected, setSelected] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(response => response.json())
        .then(data => setProducts(data))
    },[])
    
    // adding to cart
    const AddToCart = selectedProduct =>{
        let newSelected = [];
        newSelected = [...selected, selectedProduct];
        setSelected(newSelected);    
    }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {
        if(selected.length === 0){
            return null;
        }
        setShow(true)
    };
    const removeItem =()=>{
        const removeItems = [];
        setSelected(removeItems);
    }
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
                            AddToCart = {AddToCart}
                            ></Product>)
                        }
                    </Row>
                </Col>

            <Col  xs={12} md={4} lg={4}>
                <div className='selected-item'>
                        <h3 className='pt-5'>Selected Products</h3>
                        <h5>Products Quantity: {selected.length}</h5>
                        {
                            selected.map(item => <Items name={item.name}></Items>)
                        }
                        <div className='d-flex justify-content-center align-items-center flex-column'>
                        <button onClick={handleShow} className='button-choose'>Choose Randomly</button>
                        
                        <button onClick={removeItem} className='button-remove'>Choose again
                        </button>
                        </div>
                        <Item selected={selected} show={show} handleClose={handleClose}></Item>
                </div>
            
            </Col>
        </Row> 
        </Container>
        </div>
    );
};

export default Shop;
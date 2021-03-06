import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Product.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const {name, img, seller, price, stock} = props.product;
    const {AddToCart, product} = props;
    return (
        <div>
            <Col>
            <Card className='card-style'>
                <Card.Img variant="top" src={img} height="150px" width="200px"/>
                <Card.Body>
                <Card.Title>{name}</Card.Title>
                <div className='mt-3'> 
                <Card.Text>
                    <p>Brand: {seller}</p>
                    <p>Price: ${price}</p>
                    <p>Stock: {stock}</p>
                </Card.Text>
                </div>
                <button onClick={()=>AddToCart(product)} className='btn-Cart'>Add to Cart <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon></button>
                
                </Card.Body>
            </Card>
            </Col>
        </div>
    );
};

export default Product;
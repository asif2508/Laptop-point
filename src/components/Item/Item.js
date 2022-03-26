import React from 'react';
import {Modal, Button} from 'react-bootstrap';
const Item = ({selected, show, handleClose}) => {
    
    if(selected.length === 0){
        return null;
    }
    const randomItem = selected[Math.floor(Math.random()*selected.length)];
    return (
        <div>
            <Modal show={show} onHide={handleClose} size="md">
                    <Modal.Header closeButton>
                    <Modal.Title>Your Random Product</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='d-flex align-items-center justify-content-center flex-column'>
                    <img src={randomItem?.img} alt="" height="200px" width="270px"/>  
                    <h3>Name: {randomItem?.name}</h3>
                    <h5>Brand: {randomItem?.seller}</h5>
                    <h5>Price: ${randomItem?.price}</h5>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Buy
                    </Button>
        </Modal.Footer>
      </Modal>
        </div>
    );
};

export default Item;
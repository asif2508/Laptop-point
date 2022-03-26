import React from 'react';
import './Items.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrash } from '@fortawesome/free-solid-svg-icons';
const Items = ({name}) => {
    return (
        <div className='item-section'>
            <div className='d-flex item-name justify-content-around align-items-center pt-3'>
                <p>
                {name}
                </p> 
                <p>
                <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                </p>
                </div>
            
        </div>
    );
};

export default Items;
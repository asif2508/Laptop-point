import React from 'react';
import './Items.css';

const Items = ({name}) => {
    return (
        <div className='item-section'>
            <p className='item-name'>{name}</p>
        </div>
    );
};

export default Items;
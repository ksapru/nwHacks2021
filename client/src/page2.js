import { Card } from '@material-ui/core';
import React from 'react';
import Product from './Product';

export default function page2() {
    return (
        <div className="page2">
            <h1> Here are your top 5: </h1>
            <div className='cards_container'>
                <div className='cards_wrapper'>
                    <ul className='cards_items'>
                        <CardItem
                        src='/images/vancouver.jpeg'
                        text='test'
                        label='test'

                        />

                    </ul>
                    </div>


            </div>
      
    
        </div>
    );
}

import React from "react";
import "./App.css";
import "./App.js";
import {Link} from 'react-router-dom';



function Product(props) {
    return ( 

        <li className= "Product">
            <Link className='cards_item_link' to={props.path}>
                <figure className='cards_item_pic-wrap' data-category={props.label}>
                    <img 
                    src={props.src}
                    alt="Travel image"
                    className='Product'
                    />

                </figure>
                <div className='card_item_info'>
                    <h5 className='cards_item_text'>{props.text}</h5>
                </div>
            </Link>
        </li>

       
    );
}
 

export default Product;
import React from "react";
import "./App.css";
import "./App.js";
import {Link} from 'react-router-dom';





function Product(props) {
    return ( 

        <div className= "Product">
            <div className="prod">
   

            <p>#1</p>
            <p> {props.name} </p>
            <p>  <img src={props.chosenicon} alt="" width="150px" height="100px"/> </p>
            <p> {props.message} </p> 
            <p> {props.price} </p>
            <h4> Rating: </h4> <p></p>
            <h4> Safety: </h4>


            <p>#2</p>
            <p> {props.name} </p>
            <p>  <img src={props.chosenicon} alt="" width="150px" height="100px"/> </p>
            <p> {props.message} </p> 
            <p> {props.price} </p>
            <h4> Rating: </h4> <p></p>
            <h4> Safety: </h4>


            <p>#3</p>
            <p> {props.name} </p>
            <p>  <img src={props.chosenicon} alt="" width="150px" height="100px"/> </p>
            <p> {props.message} </p> 
            <p> {props.price} </p>
            <h4> Rating: </h4> <p></p>
            <h4> Safety: </h4>


            <p>#4</p>
            <p> {props.name} </p>
            <p>  <img src={props.chosenicon} alt="" width="150px" height="100px"/> </p>
            <p> {props.message} </p> 
            <p> {props.price} </p>
            <h4> Rating: </h4> <p></p>
            <h4> Safety: </h4>


            <p>#5</p>
            <p> {props.name} </p>
            <p>  <img src={props.chosenicon} alt="" width="150px" height="100px"/> </p>
            <p> {props.message} </p> 
            <p> {props.price} </p>
            <h4> Rating: </h4> <p></p>
            <h4> Safety: </h4>


            
            

          
            
            </div>
        </div>
    
       
    );
}
 

export default Product;

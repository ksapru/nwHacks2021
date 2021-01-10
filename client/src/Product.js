import React from "react";
import "./App.css";
import "./App.js";
import {Link} from 'react-router-dom';





function Product(props) {
    return (
        <div className= "Product">
            <div className="prod">
                <a href="../"><img id="logo-2-3" src="/images/logo.png" alt="Find my Neighbourhood"></img></a>

                <h2>Top 5 Neighbourhoods for you</h2>
   
                <div className="result">
                    <p class="orderNum">#1</p>
                    <div className="result-block">
                        <div className="result-img">
                            <img src="images/vancouver.jpeg" alt={props.name}/>
                        </div>
                        <div className="result-text">
                            <h5> University Endowment Lands </h5>
                            
                            <p> {props.message} </p> 
                            <p> {props.price} </p>
                            <p> Safety: </p>
                            <p> Transit: </p>
                            <p> Food: </p>
                        </div>
                    </div>
                </div>

                <div className="result">
                    <p class="orderNum">#2</p>
                    <div className="result-block">
                        <div className="result-img">
                            <img src={props.chosenicon} alt={props.name} width="150px" height="100px"/>
                        </div>
                        <div className="result-text">
                            <h5> {props.name} </h5>
                            
                            <p> {props.message} </p> 
                            <p> {props.price} </p>
                            <p> Safety: </p>
                            <p> Transit: </p>
                            <p> Food: </p>
                        </div>
                    </div>
                </div>

                <div className="result">
                    <p class="orderNum">#3</p>
                    <div className="result-block">
                        <div className="result-img">
                            <img src={props.chosenicon} alt={props.name} width="150px" height="100px"/>
                        </div>
                        <div className="result-text">
                            <h5> {props.name} </h5>
                            
                            <p> {props.message} </p> 
                            <p> {props.price} </p>
                            <p> Safety: </p>
                            <p> Transit: </p>
                            <p> Food: </p>
                        </div>
                    </div>
                </div>

                <div className="result">
                    <p class="orderNum">#4</p>
                    <div className="result-block">
                        <div className="result-img">
                            <img src={props.chosenicon} alt={props.name} width="150px" height="100px"/>
                        </div>
                        <div className="result-text">
                            <h5> {props.name} </h5>
                            
                            <p> {props.message} </p> 
                            <p> {props.price} </p>
                            <p> Safety: </p>
                            <p> Transit: </p>
                            <p> Food: </p>
                        </div>
                    </div>
                </div>

                <div className="result">
                    <p class="orderNum">#5</p>
                    <div className="result-block">
                        <div className="result-img">
                            <img src={props.chosenicon} alt={props.name} width="150px" height="100px"/>
                        </div>
                        <div className="result-text">
                            <h5> {props.name} </h5>
                            
                            <p> {props.message} </p> 
                            <p> {props.price} </p>
                            <p> Safety: </p>
                            <p> Transit: </p>
                            <p> Food: </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    
       
    );
}
 

export default Product;
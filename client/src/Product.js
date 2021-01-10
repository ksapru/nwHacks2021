import React from "react";
import "./App.css";
import "./App.js";
import {Link} from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function Product(props) {
    const location = useLocation();
    const responseArray = location.state.responseArray
    console.log("response array in Product.js",responseArray)

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
                            <h5> {responseArray[0].neighbourhood} </h5>
                            <p> Safety: <strong>{responseArray[0].safety}</strong></p>
                            <p> Transit: <strong>{responseArray[0].transit}</strong></p>
                            <p> Food: <strong>{responseArray[0].food}</strong></p>
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
                            <h5> {responseArray[1].neighbourhood} </h5>
                            <p> Safety: <strong>{responseArray[1].safety}</strong></p>
                            <p> Transit: <strong>{responseArray[1].transit}</strong></p>
                            <p> Food: <strong>{responseArray[1].food}</strong></p>
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
                            <h5> {responseArray[2].neighbourhood} </h5>
                            <p> Safety: <strong>{responseArray[2].safety}</strong></p>
                            <p> Transit: <strong>{responseArray[2].transit}</strong></p>
                            <p> Food: <strong>{responseArray[2].food}</strong></p>
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
                            <h5> {responseArray[3].neighbourhood} </h5>
                            <p> Safety: <strong>{responseArray[3].safety}</strong></p>
                            <p> Transit: <strong>{responseArray[3].transit}</strong></p>
                            <p> Food: <strong>{responseArray[3].food}</strong></p>
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
                            <h5> {responseArray[4].neighbourhood} </h5>
                            <p> Safety: <strong>{responseArray[4].safety}</strong></p>
                            <p> Transit: <strong>{responseArray[4].transit}</strong></p>
                            <p> Food: <strong>{responseArray[4].food}</strong></p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
 

export default Product;
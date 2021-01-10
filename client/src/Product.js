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
                            <p> Safety: {responseArray[0].safety}</p>
                            <p> Transit:{responseArray[0].transit} </p>
                            <p> Food: {responseArray[0].food}</p>
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
                            <p> Safety: {responseArray[1].safety}</p>
                            <p> Transit:{responseArray[1].transit} </p>
                            <p> Food: {responseArray[1].food}</p>
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
                            <p> Safety: {responseArray[2].safety}</p>
                            <p> Transit:{responseArray[2].transit} </p>
                            <p> Food: {responseArray[2].food}</p>
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
                            <p> Safety: {responseArray[3].safety}</p>
                            <p> Transit:{responseArray[3].transit} </p>
                            <p> Food: {responseArray[3].food}</p>
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
                            <p> Safety: {responseArray[4].safety}</p>
                            <p> Transit:{responseArray[4].transit} </p>
                            <p> Food: {responseArray[4].food}</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
 

export default Product;
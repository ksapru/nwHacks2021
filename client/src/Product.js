import React from "react";
import "./App.css";
import "./App.js";
import {Link} from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function numberToColor(i) {
    var rgb = [255- 255 * (i/100), 255*(i/100), 0]
    return 'rgb(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ')'; 
}

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
                            <img src="images/vancouver.jpeg" alt={responseArray[0].neighbourhood}/>
                        </div>
                        <div className="result-text">
                            <h4> {responseArray[0].neighbourhood} <strong style={{color: numberToColor(responseArray[0].match)}}>({responseArray[0].match}%)</strong></h4>
                            <p> Safety: <strong style={{color: numberToColor(responseArray[0].safety*10)}}>{responseArray[0].safety}</strong></p>
                            <p> Transit: <strong style={{color: numberToColor(responseArray[0].transit*10)}}>{responseArray[0].transit}</strong></p>
                            <p> Food: <strong style={{color: numberToColor(responseArray[0].food*10)}}>{responseArray[0].food}</strong></p>
                        </div>
                    </div>
                </div>

                <div className="result">
                    <p class="orderNum">#2</p>
                    <div className="result-block">
                        <div className="result-img">
                            <img src={props.chosenicon} alt={responseArray[1].neighbourhood} width="150px" height="100px"/>
                        </div>
                        <div className="result-text">
                            <h4> {responseArray[1].neighbourhood} <strong style={{color: numberToColor(responseArray[1].match)}}>({responseArray[1].match}%)</strong></h4>
                            <p> Safety: <strong style={{color: numberToColor(responseArray[1].safety*10)}}>{responseArray[1].safety}</strong></p>
                            <p> Transit: <strong style={{color: numberToColor(responseArray[1].transit*10)}}>{responseArray[1].transit}</strong></p>
                            <p> Food: <strong style={{color: numberToColor(responseArray[1].food*10)}}>{responseArray[1].food}</strong></p>
                        </div>
                    </div>
                </div>

                <div className="result">
                    <p class="orderNum">#3</p>
                    <div className="result-block">
                        <div className="result-img">
                            <img src={props.chosenicon} alt={responseArray[2].neighbourhood} width="150px" height="100px"/>
                        </div>
                        <div className="result-text">
                            <h4> {responseArray[2].neighbourhood} <strong style={{color: numberToColor(responseArray[2].match)}}>({responseArray[2].match}%)</strong></h4>
                            <p> Safety: <strong style={{color: numberToColor(responseArray[2].safety*10)}}>{responseArray[2].safety}</strong></p>
                            <p> Transit: <strong style={{color: numberToColor(responseArray[2].transit*10)}}>{responseArray[2].transit}</strong></p>
                            <p> Food: <strong style={{color: numberToColor(responseArray[2].food*10)}}>{responseArray[2].food}</strong></p>
                        </div>
                    </div>
                </div>

                <div className="result">
                    <p class="orderNum">#4</p>
                    <div className="result-block">
                        <div className="result-img">
                            <img src={props.chosenicon} alt={responseArray[3].neighbourhood} width="150px" height="100px"/>
                        </div>
                        <div className="result-text">
                            <h4> {responseArray[3].neighbourhood} <strong style={{color: numberToColor(responseArray[3].match)}}>({responseArray[3].match}%)</strong></h4>
                            <p> Safety: <strong style={{color: numberToColor(responseArray[3].safety*10)}}>{responseArray[3].safety}</strong></p>
                            <p> Transit: <strong style={{color: numberToColor(responseArray[3].transit*10)}}>{responseArray[3].transit}</strong></p>
                            <p> Food: <strong style={{color: numberToColor(responseArray[3].food*10)}}>{responseArray[3].food}</strong></p>
                        </div>
                    </div>
                </div>

                <div className="result">
                    <p class="orderNum">#5</p>
                    <div className="result-block">
                        <div className="result-img">
                            <img src={props.chosenicon} alt={responseArray[4].neighbourhood} width="150px" height="100px"/>
                        </div>
                        <div className="result-text">
                            <h4> {responseArray[4].neighbourhood} <strong style={{color: numberToColor(responseArray[4].match)}}>({responseArray[4].match}%)</strong></h4>
                            <p> Safety: <strong style={{color: numberToColor(responseArray[4].safety*10)}}>{responseArray[4].safety}</strong></p>
                            <p> Transit: <strong style={{color: numberToColor(responseArray[4].transit*10)}}>{responseArray[4].transit}</strong></p>
                            <p> Food: <strong style={{color: numberToColor(responseArray[4].food*10)}}>{responseArray[4].food}</strong></p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
 

export default Product;
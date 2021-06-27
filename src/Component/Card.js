import React,{useState,useEffect} from 'react';
import "../css/card.css";
import {motion} from "framer-motion";
import PropTypes from 'prop-types';
import Basket from "./Basket";
import db from "../db.json"

const Card = ({title, price,img,hoverImg,sale,category}) => {
    let arr = JSON.parse(localStorage.getItem("allEntries"))|| [];
    const [x,SetX] = useState();
    useEffect(() => {
        console.log(x);
    },[arr,x]);
    function setData()
    {

        var arr = JSON.parse(localStorage.getItem("allEntries"))|| [];
        localStorage.setItem("count",parseFloat("0"));
        let object =
            {
                "Title":title,
                "Price":parseInt(price),
                "Img":img,
            };
        JSON.parse(localStorage.getItem('key_name'));
        let val = parseFloat(localStorage.getItem('count'));
        val+=1;
        arr.push(object);
        console.log(val);
        localStorage.setItem("allEntries",JSON.stringify(arr) );
    }
console.log(category);
    return (


        <div className="col-12 col-md-6 col-lg-4 col-xl-3">
            <div className="card">
                {sale == true ?  <div className="card-sale">&#128293;Hot sales!&#128293;</div>: null}
                <div className="card-img-wrapper">
                    {"hoverImg" in db  ? <motion.div className="card-img-top" style={{backgroundImage:"url(" +  img  + ")"}}/> :
                        <motion.div className="card-img-top" whileHover={{backgroundImage:"url(" +  hoverImg  + ")",backgroundColor:"#FFFAFA",}} style={{backgroundImage:"url(" +  img  + ")",transition:".7s"}}/>}

                </div>
                <div className="card-body justify-content-between">
                    <div className="card-price">{price} &#8381;</div>
                    <h5 className="card-title">{title}</h5>
                    <button className="btn btn-primary" onClick={event => {
                        setData();window.location.reload()}
                    }>В корзину</button>
                </div>
            </div>
        </div>

    );
};

Card.propTypes = {
price:PropTypes.number
};

export default Card;
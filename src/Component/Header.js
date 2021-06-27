import React,{useState,useEffect} from 'react';
import "../css/card.css";
import Basket from "./Basket";
import Main from "./Main";
import {motion} from "framer-motion";

const Header = ({onChange,placeholder,count}) => {
    const [render,setRender] = useState("none");
    const [summer,setSummer] = useState(0);
    let sum = 0;
    let arr = JSON.parse(localStorage.getItem("allEntries"))|| [];
    let val = parseFloat(localStorage.getItem("count"));
    let care =
        arr.map(item=>
        {
            let x = item.Price !=null ? 1:0;
            val +=x;
            sum += x;
        });
    console.log(arr);

    useEffect(()=>
    {
        setSummer(val);
        console.log(summer)
    },[count])



    return (
        <div>
            <nav>
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <a className="logo" href="./index.html"></a>
                        <div className="one">
                            <ul className="topmenu">
                                <li><a href="#" className="fa"><span className="catalog-button_burger"></span>Каталог</a>
                                    <ul className="submenu">
                                        <li><a href={'/console'}>Игровая приставка</a></li>
                                        <li><a href={'/peref'}>Периферия для ПК</a></li>
                                        <li><a href={'/soft'}>Игры и софт</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="search">
                            <div className="search-wrapper">
                                <input className="search-wrapper_input" type="text" onChange={onChange} placeholder={placeholder}/>
                            </div>
                            <div className="search-btn">
                                <button onClick={event => localStorage.clear()}></button>
                            </div>
                        </div>
                        <Basket onClick={render}/>
                    </div>
                </div>
            </nav>
        </div>
    );
};



export default Header;

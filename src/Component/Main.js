import React,{useState,useEffect} from 'react';
import "../css/card.css"
import Card from "./Card";
import db from "../db.json"
import Header from "./Header";
import Fuse from "fuse.js";
import Basket from "./Basket";
import {BrowserRouter,Switch,Router,Route} from "react-router-dom";

const Main = props => {
    let arr = JSON.parse(localStorage.getItem("allEntries"))|| [];
    const [data, setData] = useState(db);
    const [money,setMoney] = useState(false);
    const [maxMoney,setMoneyMax] = useState(false);
    const [x, setX] = useState(false);
    const [text,setText] = useState(false)
    console.log(x);
    const searchData = (pattern) => {
        if (!pattern) {
            setData(db);
            return;
        }

        const fuse = new Fuse(data, {
            keys: ["title","price"],
        });



        const result = fuse.search(pattern);
        const matches = [];
        const arrayFlagData = [];
        console.log(result)
        if (!result.length) {
            setData([])
        } else {
            {result.forEach(({item}) => {
                if(item.title.toLowerCase().trim().includes(pattern.toLowerCase()))
                matches.push(item);
            });}


            setData(matches);
        }
    };
    return (
        <div> <Header placeholder="Search"
                      onChange={(e) => searchData(e.target.value)}/>
            <div className="container">
                <div className="row">
                    <div className="col-3 col-xl-2 d-none d-lg-block">
                        <div className="filter">
                            <div className="filter-title">
                                <h5>Фильтр</h5>
                            </div>
                            <div className="filter-price">
                                <div className="filter-price_title">
                                    Цена
                                </div>
                                <form>
                                    <div className="filter-price_range">
                                        <div className="filter-price_input-wrapper">
                                            <label htmlFor="min" className="filter-price_label">От</label>
                                            <input id="min" className="filter-price_input" onChange={(e)=>setMoney(e.target.value)} />
                                        </div>
                                        <div className="filter-price_input-wrapper">
                                            <label htmlFor="max" className="filter-price_label">До</label>
                                            <input id="max" className="filter-price_input" onChange={(e)=>setMoneyMax(e.target.value)} /></div>
                                    </div>
                                </form>
                            </div>
                            <div className="filter-check">
                                <label className="filter-check_label">
                                    <input type="checkbox" checked={x} onChange={() => setX(!x)}/>
                                    <span className="filter-check_checkmark"></span>
                                    <span className="filter-check_label-text">Акция</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-9 col-xl-10">
                        <div className="container">
                            <div className="row no-gutters goods">



                                {data.map(item => {
                                    if(x == true) {
                                               if ((maxMoney == false && money < item.price) && item.sale === x)
                                            return <Card {...item} key={item.price}/>
                                        if ((money == false && maxMoney > item.price)&& item.sale === x)
                                            return <Card {...item} key={item.price}/>
                                        if ((money < item.price && maxMoney > item.price)&& item.sale === x)
                                            return <Card {...item} key={item.price}/>
                                    }

                                    else
                                    {
                                        if (maxMoney == false && money < item.price)
                                            return <Card {...item} key={item.price}/>
                                        if (money == false && maxMoney > item.price)
                                            return <Card {...item} key={item.price}/>
                                        if (money < item.price && maxMoney > item.price)
                                            return <Card {...item} key={item.price}/>
                                    }
                                }) }

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>


    );
};



export default Main;
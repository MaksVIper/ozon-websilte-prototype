import React,{useState,useEffect} from 'react';
import "../css/card.css";
import Card from "./Card";
const Basket = (close,onClick) => {
    let value = parseFloat(localStorage.getItem("count"));
    const [basketClose,setClose] = useState(true);
    const [basket,setBasket] = useState("none");
    const [summer,setSummer]= useState(0);
    let arr = JSON.parse(localStorage.getItem("allEntries"))|| [];
    let sum = 0;
    let count =
        arr.map(item=>
    {
        let x = item.Price !=null ? parseFloat(item.Price): 0;
        sum += x;
        if(item.Title !=null)
            value +=1;
    });


    useEffect(() => {
        setSummer(value);
console.log("перезапись");
    },[arr,summer]);

    function DeleteElement(reg) {
        let str = localStorage.getItem("allEntries")
        let obj = JSON.parse(str);
        for (let i = 0;i<obj.length;i++)
        {
            for (var key in obj[i]) {
                if(obj[i][key] == reg)
                {
                    for (var j in obj[i])
                    {
                        delete obj[i][j];
                    }
                }
            }
        }
        str = JSON.stringify(obj)
        localStorage.setItem("allEntries", str);
    }

        return (
            <div>
                <a href="#" id="cart" >
                    <span className="counter">{summer}</span>
                    <span className="icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
								<path fill="currentColor" fill-rule="nonzero"
                                      d="M6 6a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2h5.133L21.82 18.496A4 4 0 0 1 17.85 22H6.149a4 4 0 0 1-3.969-3.504L.867 8H6V6zm6 2a1 1 0 0 1 0 2H3.133l1.03 8.248A2 2 0 0 0 6.149 20h11.704a2 2 0 0 0 1.984-1.752L20.867 10H16V6a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2h4z">
								</path>
							</svg></span>
                    <span className="desc" onClick={event => {setBasket("block")}}>Корзина</span>
                </a>

                <div className="cart" style={{display:basket}}>
                    <div className="cart-body">
                        <div className="cart-title">Корзина с товарами</div>
                        <div className="cart-total">Итоговая сумма: <span>{sum}</span> &#8381;</div>
                        <div className="cart-wrapper">
                            <div >
                                {arr.map(item =>{
                                if(item.Title != null)
                                {
                                   return <div className="tovar"><img src={item.Img}  alt="" style={{padding:"10%",height:"100%",width:"100%"}}/>
                                       <p className={"text-center"}>{item.Title}</p><p price className={"text-center"}>{item.Price} рублей.</p>
                                       <button className={"btn-danger pl-lg-5 pr-lg-5 text-center m-3"} onClick={event => {DeleteElement(item.Title); setClose(!basketClose)}}>Удалить</button></div>
                                }
                                if(basketClose == true)
                                {
                                    {arr.map(item =>{
                                            if(item.Title != null)
                                            {
                                                return <div className="tovar"><img class="rounded mx-auto d-block" src={item.Img} alt="" className={"tovar-img"}/>
                                                    <p className={"tovar-title"}>{item.Title}</p><p price className={"tovar-price"}>{item.Price}</p>
                                                    <button className={"btn-danger mx-auto"} onClick={event => {DeleteElement(item.Title);}}>Удалить</button></div>
                                            }
                                        }
                                    )}
                                }
                                }
                                )}
                            </div>
                        </div>
                        <a href={'/order'}><button className="btn btn-primary cart-confirm">Оформить заказ</button></a>
                        <div className="cart-close" onClick={event => setBasket("none")}>
                        </div>
                    </div>
                </div>
            </div>
        );
};

export default Basket;
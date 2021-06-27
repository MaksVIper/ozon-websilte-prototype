import React,{useState} from 'react';
import Header from "./Header";
import {db,database} from "../backend/firebase";
const Orders = () => {
    let arr = JSON.parse(localStorage.getItem("allEntries"))|| [];
    let val = localStorage.getItem('test');
    let sum = 0;
    let id = getRandomIntInclusive(1000000000,9999999999);
    let count =
        arr.map(item=>
        {
            let x = item.Price !=null ? parseFloat(item.Price): 0;
            sum += x;
        });

    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
    }
    const [number,setNumber] = useState(8);
    const [email,setEmail] = useState("");
    const [adress,setAdress] = useState("");
    const [cvc,setCVC] = useState("");
    const [bank,setBank] = useState("");
    const handleSubmit = (e)=>
    {
        e.preventDefault();
        if(sum>0) {
            db.collection("orders").add(
                {
                    orderIndex: id,
                    number: number,
                    email: email,
                    adress: adress,
                    cost: sum,
                }
            ).then(() => {
                alert("Ваш заказ с номером: " + id + "")

            }).catch((error) => alert(error.message))
            setNumber(8);
            setEmail("");
            setAdress("");
            localStorage.clear();
        }
        else
        {
            alert("Корзина пуста!");
        }
    }



    return (
        <div>
            <Header/>
            <form className="pl-5 pr-5" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Телефон</label>
                    <input type="number" className="form-control" maxLength="11"
                           value={number}
                           placeholder="Телефон"  onChange={event =>
                    {
                        setNumber(event.target.value);
                        if(event.target.value.length >11)
                            alert('Много цифр! Проверьте номер.')
                    }}/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
                            else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Email</label>
                    <input type="email" className="form-control"  placeholder="Email" value={email} onChange={event => setEmail(event.target.value)}/>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Адрес</label>
                    <input type="text" className="form-control"  placeholder="Адрес" value={adress} onChange={event => setAdress(event.target.value)}/>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Номер Банковской Карты</label>
                    <input id="ccn"  className="form-control" type="num" inputMode="numeric" autoComplete="cc-number" value={bank}
                           maxLength="16" placeholder="xxxx xxxx xxxx xxxx" onChange={event =>
                    {
                        setBank(event.target.value);
                        if(event.target.value.length >16)
                            alert('Много цифр! Проверьте номер карты.')
                    }}/>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">CVC</label>
                    <input type="password" className="form-control"  placeholder="CVC" value={cvc} maxLength="3"
                           onChange={event =>
                           {
                               setCVC(event.target.value)
                               if(event.target.value.length >3)
                                   alert('Много цифр! Должно быть 3 .')
                           }}/>
                </div>
                <p className="text-left"><h4>Сумма к оплате:</h4> <span><h3 style={{color:"green"}}>{sum}</h3></span></p>
                <button type="submit text-center btn-sx" className="btn btn-primary p-3"><h5>Оплатить заказ</h5></button>

            </form>
        </div>
    );
};

export default Orders;
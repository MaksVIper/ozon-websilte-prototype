import React from 'react';
import Header from "./Component/Header";
import db from "./db.json"
import Main from "./Component/Main";
import "./css/card.css"
import {BrowserRouter,Switch,Router,Route,Redirect} from "react-router-dom";
import Console from "./Component/Console";
import Soft from "./Component/Soft";
import Peref from "./Component/Peref";
import Orders from "./Component/Orders";
const App = () => {
  return (

      <div>
          <BrowserRouter>
          <div>
              <Switch>
                  <Route  path='/home' component={Main} />
                  <Route  exact path='/console' component={Console} />
                  <Route  exact path='/soft' component={Soft} />
                  <Route  exact path='/peref' component={Peref} />
                  <Route  exact path='/order' component={Orders} />
                  <Redirect from='/' to='/home'/>
              </Switch>
          </div>
      </BrowserRouter>
      </div>
  );
};

export default App;

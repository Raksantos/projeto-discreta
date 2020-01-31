import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Index from "./Index";
import Criptografar from "./Criptografar";
import Descriptografar from "./Descriptografar";
import * as serviceWorker from './serviceWorker';
import GerarChave from "./GerarChave";

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path={"/"} component={Index}></Route>
            <Route path={"/gerarchave"} component={GerarChave}></Route>
            <Route path={"/criptografar"} component={Criptografar}></Route>
            <Route path={"/descriptografar"} component={Descriptografar}></Route>
            <Redirect to={"/"}></Redirect>
        </Switch>
    </BrowserRouter>
    , document.getElementById('root'));

serviceWorker.unregister();

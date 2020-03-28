import React from 'react';
import { FC } from 'react';

import {
  Switch,
  Route
} from "react-router-dom";


import './index.css'

import Layout from './components/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Bookmarks from './components/Bookmarks';
import Checkout from './containers/Checkout';
import Orders from './containers/Orders';

const App: FC = () => {
  
  return (
        <Layout>
          <Switch>
            <Route path="/orders" exact component={Orders} />
            <Route path="/bookmarks" exact component={Bookmarks}/>
            <Route path="/checkout" component={Checkout} />
            <Route path="/checkout-order" component={Checkout} />
            <Route path="/" component={BurgerBuilder}/>
          </Switch>
        </Layout>
  );
}

export default App;

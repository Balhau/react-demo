import React from 'react';
import { FC } from 'react';
import './index.css'

import Layout from './components/Layout';
import Bookmarks from './components/Bookmarks';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

const App: FC = () => {
  //<BurguerBuilder />
  return (
    <div>
      <Layout>
        <BurgerBuilder/>
      </Layout>
    </div>
  );
}

export default App;

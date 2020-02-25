import React from 'react';
import { FC } from 'react';
import './index.css'

import Layout from './components/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

const App: FC = () => {
  return (
    <div>
      <Layout>
        <BurgerBuilder/>
      </Layout>
    </div>
  );
}

export default App;

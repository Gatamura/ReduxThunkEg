import React from 'react';
import { Provider } from 'react-redux';

import store from './store';

import TestRedux from './components/TestRedux';

const App = () =>  (
    <Provider store={store}>
      <TestRedux/>
    </Provider>
    );

export default App;

import React from 'react';
import { Provider } from 'react-redux';
import reducer from './app/redux/reducer';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import AppContainer from './src/navigator';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));


const App = () => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}

export default App
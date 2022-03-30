// import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from './store';
// import OLMapFragment from './components/OLMapFragment'

ReactDOM.render(
  <Provider store={store}>
  {/* <Provider store={createStore(rootReducer)}> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  </Provider>,
  document.getElementById('root')
);
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducer } from './reducer';
import { addComment } from './actions';





const store = createStore(reducer);
store.subscribe(() => console.log(store.getState()));
var unsubscibe = store.subscribe(() => console.log('zmiana w stanie'));


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);



store.dispatch(addComment('pierwszy komentarz'));
store.dispatch(addComment('drugi komentarz'));
store.dispatch(addComment('trzeci komentarz'));
store.dispatch(addComment('czwarty komentarz'));
store.dispatch(addComment('piąty komentarz'));
store.dispatch(addComment('szusty komentarz'));
store.dispatch(addComment('siudmy komentarz'));
store.dispatch(addComment('ósmy komentarz'));

import React from 'react';
import './App.css';
import ListContainer from './CommentsListContainer';

const App = () => {
  return (
    <div className="App">
      <h1>Tu jest lista komentarzy!</h1>
      <ListContainer />
    </div>
  );
};

export default App;



import React from 'react';
import './App.css';
import Header from './Header'
import Store from './Store'
import products from './products'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="container">
        <Store products={products}></Store>
      </div>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import './App.css';
import Product from './components/Product';

function App() {

  const [name, setName] = useState('');

  function productClicked(name) {
    setName(name);
    console.log(name, 'clicked');
  }

  return (
    <div className="d-flex flex-column container">
      {/* <Comp abc="divisiva" age="234"/>
      <Comp abc="shankarn" />
      <Comp abc="vishnu"/> */}
      <div className="border my-3">
        parent box {name}
      </div>
      <Product imageUrl="images/apple.jpg" name="Apple" desc="This is mysore apple." addButtonClick={productClicked}  />
      <Product imageUrl="images/orange.jpg" name="Orange" desc="This is orange from kandachiipuram." addButtonClick={productClicked}/>
      <Product imageUrl="images/grapes.jpg" name="Grape" desc="This is grap from pavanthur." addButtonClick={productClicked} />
      
    </div>
  );
}

export default App;

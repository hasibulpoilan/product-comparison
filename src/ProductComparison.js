  import React, { useState } from 'react';
  import './ProductComparison.css';
  
  const ProductComparison = () => {
    const products = [
        {
            id: 1,
            name: ' Watch 1',
            imageUrl: 'https://images.augustman.com/wp-content/uploads/sites/3/2022/10/11191124/pexels-antony-trivet-9978785.jpg',
            price: 2000,
          },
          {
            id: 2,
            name: ' Watch 2',
            imageUrl: 'https://www.swisswatchexpo.com/thewatchclub/wp-content/uploads/2024/07/Best-Womens-Watches-Rolex-Lady-Datejust-1200x900-1.jpg',
            price: 150,
          },
          {
            id: 3,
            name: 'Designer Handbag 1',
            imageUrl: 'https://img.joomcdn.net/a23610ab155edefe973c4dffda4c6aa7dd52d438_original.jpeg',
            price: 1500,
          },
          {
            id: 4,
            name: 'Designer Handbag 2',
            imageUrl: 'https://rukminim2.flixcart.com/image/828/828/xif0q/shopsy-bag/2/u/l/35-stylish-canvas-simple-trendy-tote-bag-with-dual-pocket-24-sq-original-imagshu5bzzytwru.jpeg?q=60&crop=false',
            price: 50,
          },
    ];
  
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isMostExpensive, setIsMostExpensive] = useState(null);
    const [score, setScore] = useState(0);
  
    const handleChoose = (id) => {
      const selected = products.find(product => product.id === id);
      setSelectedProduct(selected);
  
      const isExpensive = products.every(product => selected.price >= product.price);
      setIsMostExpensive(isExpensive);
  
      if (isExpensive) {
        setScore(prevScore => prevScore + 1);
      }
    };
  
    const handleReset = () => {
      setSelectedProduct(null);
      setIsMostExpensive(null);
      setScore(0);
    };
  
    return (
           <div className='all'>
            <h1>Product Comparison</h1>
      <div className="product-comparison">
        <div className="product-list">
          {products.map((product) => (
            <div key={product.id} className="product">
              <img src={product.imageUrl} alt={product.name} />
              <h3>{product.name}</h3>
              <button className='chose' onClick={() => handleChoose(product.id)}>Choose</button>
            </div>
          ))}
        </div>
        <div className="control-panel">
          <h2>Score: {score}</h2>
          {selectedProduct !== null && (
            <div className={`result ${isMostExpensive ? 'win' : 'lose'}`}>
              {isMostExpensive ? 'Correct! This is the most expensive product 🎉.' : 'Incorrect! This is not the most expensive product 👎.'}
            </div>
          )}
          <button onClick={handleReset} className="reset-button">Reset Game</button>
        </div>
      </div>
      </div>
    );
  };
  
  export default ProductComparison;
  
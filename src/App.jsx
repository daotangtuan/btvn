import React from 'react';
import Header from './Header';

function CartPage() {
  const carts = [
    { id: 1, name: 'Cart 1', price: 10 },
    { id: 2, name: 'Cart 2', price: 20 },
    { id: 3, name: 'Cart 3', price: 30 },
    { id: 4, name: 'Cart 4', price: 40 }
  ];

  return (
    <div style={{ backgroundColor: '#f0f0f0', padding: '20px', width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Header />
      <div style={{ width: '100%', marginBottom: '20px' }}>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1200px-Black_flag.svg.png' alt="Banner"  />
      </div>
      <h1 style={{ color: '#333', textAlign: 'center' }}>Cart Payment </h1>
      <div style={{ flex: 1, display: 'flex', width: '100%', justifyContent: 'center' }}>
        {carts.map((cart, index) => (
          <div key={cart.id} style={{ width: '25%', padding: '10px', border: '1px solid black', borderRadius: '8px', textAlign: 'center', margin: index === carts.length - 1 ? '0' : '0 10px', backgroundColor: '#fff' }}>
            <h3>{cart.name}</h3>
            <p>Price: ${cart.price}</p>
            {/* Add additional cart information or functionality here */}
            <button style={{ backgroundColor: '#42854', color: '#fff', borderRadius: '4px', padding: '8px' }}>Add to Cart</button>
          </div>
        ))}
      </div>
      <button style={{ backgroundColor: '#4CAF50', color: '#fff', borderRadius: '4px', padding: '8px', marginTop: '20px' }}>Checkout</button>
    </div>
  );
}

export default CartPage;

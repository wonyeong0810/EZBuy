import React from 'react';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import './components/Footer.css';
import './components/ProductItem.css';
import './components/ProductList.css';

const products = [
    { id: 1, name: 'Product 1', price: 1000, image: 'https://via.placeholder.com/60' },
    { id: 2, name: 'Product 2', price: 2000, image: 'https://via.placeholder.com/60' },
    { id: 3, name: 'Product 3', price: 3000, image: 'https://via.placeholder.com/60' },
    { id: 4, name: 'Product 4', price: 4000, image: 'https://via.placeholder.com/60' },
];

function App() {
    return (
        <div className="App">
            <header className="header">
                <h1>장바구니</h1>
            </header>
            <ProductList products={products} />
            <footer className="footer">
                <div className="total-price">₩810,000</div>
                <button className="checkout-button">결제하기</button>
            </footer>
            <Footer />
        </div>
    );
}

export default App;
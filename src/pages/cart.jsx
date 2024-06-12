import Item from './item';
import { useState, useEffect } from 'react';
import './no.css'
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';



function Cart() {
    const location = useLocation();
    const navigate = useNavigate();

    const items = [
        { id: '12345678910', name: '상품 이름 1', price: 1000, imageUrl: 'item1.jpg' },
        { id: '20080810119', name: '상품 이름 2', price: 2000, imageUrl: 'item2.jpg' },
        { id: '20080404119', name: '상품 이름 3', price: 3000, imageUrl: 'item3.jpg' },
        { id: '10987654321', name: '상품 이름 4', price: 4000, imageUrl: 'item4.jpg' },
    ];

    const [filteredItems, setFilteredItems] = useState(() => {
        const savedItems = localStorage.getItem('filteredItems');
        return savedItems ? JSON.parse(savedItems) : [];
    });
    const [counts, setCounts] = useState(() => {
        const savedCounts = localStorage.getItem('counts');
        return savedCounts ? JSON.parse(savedCounts) : [];
    });
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        if (location.state && location.state.barcode) {
            const barcode = location.state.barcode;
            const itemExists = filteredItems.some(item => item.id === barcode);
            if (!itemExists) {
                const filtered = items.filter(item => item.id === barcode);
                if (filtered.length > 0) {
                    const newFilteredItems = [...filteredItems, ...filtered];
                    const newCounts = [...counts, 1];
                    setFilteredItems(newFilteredItems);
                    setCounts(newCounts);
                    localStorage.setItem('filteredItems', JSON.stringify(newFilteredItems));
                    localStorage.setItem('counts', JSON.stringify(newCounts));
                }
            }
        }
    }, [location.state, filteredItems, items, counts]);

    const handleIncrement = index => {
        const newCounts = [...counts];
        newCounts[index] += 1;
        setCounts(newCounts);
    };

    const handleDecrement = index => {
        const newCounts = [...counts];
        if (newCounts[index] > 1) {
            newCounts[index] -= 1;
            setCounts(newCounts);
        }
    };

    useEffect(() => {
        const newTotalPrice = counts.reduce((sum, count, index) => sum + count * (filteredItems[index]?.price || 0), 0);
        setTotalPrice(newTotalPrice);
        navigate('/cart', { state: { counts, totalPrice } });
    }, [counts, filteredItems, totalPrice]);

    return (
        <>
            <Items>
                {filteredItems.map((item, index) => (
                    <Item 
                        key={item.id}
                        name={item.name}
                        price={`₩${item.price}`}
                        imageUrl={item.imageUrl}
                        count={counts[index]}
                        onIncrement={() => handleIncrement(index)}
                        onDecrement={() => handleDecrement(index)}
                    />
                ))}
            </Items>
        </>
    );
}

const Items = styled.div` 
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: white;

`

export default Cart;
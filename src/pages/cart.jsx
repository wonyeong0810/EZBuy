import React, { useState, useEffect } from 'react';
import Item from './item';
import Footer from './Footer';
import './no.css'
import styled from 'styled-components';



function Cart() {
    const items = [
        { id: 1, name: '상품 이름 1', price: 1000, imageUrl: 'item1.jpg' },
        { id: 2, name: '상품 이름 2', price: 2000, imageUrl: 'item2.jpg' },
        { id: 3, name: '상품 이름 3', price: 3000, imageUrl: 'item3.jpg' },
        { id: 4, name: '상품 이름 4', price: 4000, imageUrl: 'item4.jpg' },
    ];


    const [counts, setCounts] = useState(items.map(() => 1));
    const [totalPrice, setTotalPrice] = useState(0);

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
        const newTotalPrice = counts.reduce((sum, count, index) => sum + count * items[index].price, 0);
        setTotalPrice(newTotalPrice);
    }, [counts]);
    return (
        <>
            <Items>
                {items.map((item, index) => (
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
                <TotalPrice>총 가격: ₩{totalPrice}</TotalPrice>
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
const TotalPrice = styled.div`
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    margin: 20px;
    color: black;
`;

export default Cart;
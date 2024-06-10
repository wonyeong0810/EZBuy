import React from 'react';
import Item from './item';
import './no.css'
import styled from 'styled-components';



function Cart() {
    const products = [
        { id: 1, name: 'Product 1', price: 1000, image: '../assets/item1.jpeg' },
        { id: 2, name: 'Product 2', price: 2000, image: '../assets/item2.jpeg' },
        { id: 3, name: 'Product 3', price: 3000, image: '../assets/item3.jpeg' },
        { id: 4, name: 'Product 4', price: 4000, image: '../assets/item4.jpeg' },
    ];
    return (
        <>
            <Items>
                <Item
                    name="상품 이름" 
                    price="₩1,000" 
                    imageUrl="item1.jpg" // 여기에 이미지 URL을 입력하세요
                />
                <Item
                    name="상품 이름" 
                    price="₩1,000" 
                    imageUrl="item1.jpg" // 여기에 이미지 URL을 입력하세요
                />
                <Item
                    name="상품 이름" 
                    price="₩1,000" 
                    imageUrl="item1.jpg" // 여기에 이미지 URL을 입력하세요
                />
                <Item
                    name="상품 이름" 
                    price="₩1,000" 
                    imageUrl="item1.jpg" // 여기에 이미지 URL을 입력하세요
                />
                <Item
                    name="상품 이름" 
                    price="₩1,000" 
                    imageUrl="item1.jpg" // 여기에 이미지 URL을 입력하세요
                />
                <Item
                    name="상품 이름" 
                    price="₩1,000" 
                    imageUrl="item1.jpg" // 여기에 이미지 URL을 입력하세요
                />
                <Item
                    name="상품 이름" 
                    price="₩1,000" 
                    imageUrl="item1.jpg" // 여기에 이미지 URL을 입력하세요
                />

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
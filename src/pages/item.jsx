import styled from 'styled-components';
import React, { useState } from 'react';
import './no.css'

function Item({name, price, imageUrl, count, onIncrement, onDecrement}) {


    return (
        <>
           <StyledCard>
                <Image src={imageUrl} alt={name} />
                <TextContent>
                    <Name>{name}</Name>
                    <Price>{price}</Price>
                </TextContent>
                <ButtonContainer>
                    <Button onClick={onDecrement}>-</Button>
                    <Count>{count}</Count>
                    <Button onClick={onIncrement}>+</Button>
                </ButtonContainer>
            </StyledCard>
        </>
    );
}

const StyledCard = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
    background-color: #edf3f8;
    border-radius: 10px;
    width: 100%;  /* 화면 너비 가득 차게 */
    max-width: 600px;  /* 원하는 최대 너비 설정 */
    margin: 10px auto;  /* 가운데 정렬 */
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    margin-bottom: 20px;
`;

const Image = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 10px;
    object-fit: cover;
`;

const TextContent = styled.div`
    margin-left: 15px;
`;

const Name = styled.div`
    font-size: 18px;
    font-weight: bold;
    color: black;
`;

const Price = styled.div`
    margin-top: 5px;
    font-size: 16px;
    color: #000;
`;
const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: #28a745;
    border-radius: 20px;
    padding: 5px 10px;
    margin-left: auto; /* 오른쪽 끝으로 이동 */
`;

const Button = styled.button`
    background: none;
    border: none;
    color: white;
    font-size: 14px; /* 글꼴 크기를 더 작게 조정 */
    cursor: pointer;
    padding: 5px; /* 버튼 패딩을 조정 */
    &:focus {
        outline: none; /* 포커스 시 테두리 효과 없애기 */
    }

`;

const Count = styled.span`
    color: white;
    font-size: 14px; /* 글꼴 크기를 더 작게 조정 */
    margin: 0 5px; /* 마진을 조정 */
`;


export default Item;
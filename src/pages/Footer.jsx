import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const FooterContainer = styled.footer`
    position: fixed;
    bottom: 0px;
    height: 80px;
    left: 0px;
    right: 0px;
    background-color: #e0e0e0;
    
    padding: 10px 0;
`;

const StyledImage = styled.img`
  width: 45px;
  height: 45px;
`;

const Button = styled.button`
    background-color: #D9D9D9;
    color: black; 
    position: absolute;
    top: -20%; 
    left: 50%; 
    transform: translate(-50%, -25%); 
    padding: 30px;
    border-radius: 50%; 
    cursor: pointer;
    border: none; 
    font-size: 12px; 
    display: flex;
    justify-content: center;
    align-items: center;
`;
function Footer() {
  const navigate = useNavigate();

  return (
    <FooterContainer>
      <Button onClick={() => { navigate('/') }}>
      <StyledImage src="/public/main.svg" alt="" />              
      </Button>
    </FooterContainer>
  );
}

export default Footer;
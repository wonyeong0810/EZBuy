import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation} from 'react-router-dom';
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

const PurchaseButton = styled.button`
    background-color: #4CAF50;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    position: absolute; 
    top: 50%;  
    right: 10%;  
    transform: translateY(-50%);
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
  const location = useLocation();
  const [imageSrc, setImageSrc] = useState('/public/main.svg');
  const [totalPrice, setTotalPrice] = useState(location.state?.totalPrice);
  const [total, setTotal] = useState(0);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    setTotalPrice(location.state?.totalPrice);
  },[location.state?.totalPrice]);

  useEffect(() => {
    setTotal(totalPrice)
  }, [totalPrice]);
  
  useEffect(() => {
    const currentPath = window.location.pathname;
    if (currentPath === '/cart') {
        setImageSrc('/public/main.svg');  
        setFlag(true);
    } else if (currentPath === '/') {
        setImageSrc('/public/basket.svg');  
        setFlag(false);
    }
  }, [window.location.pathname, flag]);




  const handleNavigate = () => {
    const currentPath = window.location.pathname;

    if (currentPath === '/cart') {
        navigate('/');
    } else if (currentPath === '/') {
        navigate('/cart');
    } else {
      navigate('/');
    }

    
  };
  return (
    <FooterContainer>
      {flag && <div 
      style={{
        position: 'absolute',
        top: '10px',
        left: '12px',
        fontSize: '20px',
        color: 'black',
        fontWeight: 'bold',


      }}>총 가격: {total}</div>}
      <Button onClick={handleNavigate}>
      <StyledImage src={imageSrc} alt="" />
      
      </Button>
      {flag && <PurchaseButton onClick={() => { navigate('/purchase') }}>
        구매하기
      </PurchaseButton>}
    </FooterContainer>
  );
}

export default Footer;
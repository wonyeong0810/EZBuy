import styled from "styled-components";
import React from 'react';
import { useLocation } from 'react-router-dom';

function TestSend() {
    const location = useLocation();
    const { barcode } = location.state || {};  // 전달된 상태에서 barcode 값을 가져옴

    return (
        <>
            <h1>Barcode Result</h1>
            <p>Received Barcode: {barcode}</p>  {/* 바코드 값 표시 */}
        </>
    );
}



export default TestSend;
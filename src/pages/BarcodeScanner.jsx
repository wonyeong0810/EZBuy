import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import './no.css'

function BarcodeScanner() {
    const navigate = useNavigate();
    const videoRef = useRef(null);
    const [barcode, setBarcode] = useState(null);

    useEffect(() => {
        if (!('BarcodeDetector' in window)) {
            console.error('Barcode Detection API not supported.');
            return;
        }

        const barcodeDetector = new BarcodeDetector({ formats: ['ean_13', 'code_128'] });

        const startVideo = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                    videoRef.current.play();
                }
            } catch (error) {
                console.error('Error accessing the camera', error);
            }
        };

        const detectBarcodes = async () => {
            if (videoRef.current && videoRef.current.readyState === 4) {
                try {
                    const barcodes = await barcodeDetector.detect(videoRef.current);
                    if (barcodes.length > 0) {
                        setBarcode(barcodes[0].rawValue);
                    }
                } catch (error) {
                    console.error('Barcode detection failed', error);
                }
            }
            requestAnimationFrame(detectBarcodes);
        };

        startVideo();
        detectBarcodes();

        return () => {
            if (videoRef.current && videoRef.current.srcObject) {
                const stream = videoRef.current.srcObject;
                const tracks = stream.getTracks();
                tracks.forEach(track => track.stop());
            }
        };
    }, []);

    const handleSendClick = () => {
        navigate('/test', { state: { barcode } });  // 다른 페이지로 이동하면서 상태 전달
    };

    return (
        <>
            <Page>
                <Qr ref={videoRef}></Qr>
                {barcode && <Test>Detected Barcode: {barcode}</Test>}
                <button onClick={handleSendClick}>보내기</button>
            </Page>
        </>
    );
}

const Page = styled.div` 
    width: 100%;
    height: 100%;
    overflow: hidden;
`
const Qr = styled.video`
    width: 100%; 
    height: 70dvh; 
    object-fit: cover; 
`

const Test = styled.p`
    color: white;
`

export default BarcodeScanner;
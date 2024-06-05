import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

function BarcodeScanner() {

    const videoRef = useRef(null);
    const [barcode, setBarcode] = useState(null);

    useEffect(() => {
        if (!('BarcodeDetector' in window)) {
            console.error('Barcode Detection API not supported.');
            return;
        }

        const barcodeDetector = new BarcodeDetector({ formats: ['qr_code', 'ean_13', 'code_128'] });

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

    return (
        <>
            <Page>
                <Qr ref={videoRef} width="600" height="400"/>
                {barcode && <Test>Detected Barcode: {barcode}</Test>}
            </Page>
        </>
    );
}

const Page = styled.div`
    position: relative; 
    width: 100vw;
    height: 100vh;
    overflow: hidden;
`
const Qr = styled.video`
    position: absolute;
    top: 0; 
    left: 0; 
    width: 100%; 
    height: 100%; 
    object-fit: cover; 
`

const Test = styled.p`
    color: white;
    position: absolute; 
    top: 10; 
    left: 10;
`

export default BarcodeScanner;
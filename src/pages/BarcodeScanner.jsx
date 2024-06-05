import React, { useEffect, useRef, useState } from 'react';

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
        <div>
            <h1>Barcode Scanner</h1>
            <video ref={videoRef} width="600" height="400" style={{ border: '1px solid black' }} />
            {barcode && <p>Detected Barcode: {barcode}</p>}
        </div>
    );
}

export default BarcodeScanner;
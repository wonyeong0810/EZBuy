import React, { useState, useEffect } from 'react';
import QRCode2 from 'qrcode';
import { useLocation } from 'react-router-dom';

function Purchase() {
    const location = useLocation();
    const [qrCodeUrl, setQrCodeUrl] = useState('');

    useEffect(() => {
        const totalPrice = location.state?.totalPrice;
        if (totalPrice) {
            const qrData = `Total Price: ₩${totalPrice}`;
            QRCode2.toDataURL(qrData, (err, url) => {
                if (!err) {
                    setQrCodeUrl(url);
                }
            });
        }
    }, [location.state?.totalPrice]);

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            {qrCodeUrl ? (
                <img src={qrCodeUrl} alt="QR Code" />
            ) : (
                <p>Qr생성중.,</p>
            )}
        </div>
    );
}

export default Purchase;

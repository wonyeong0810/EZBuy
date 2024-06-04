// // src/BarcodeScanner.js
// import React, { useState, useEffect } from 'react';
// import BarcodeScanner from 'react-barcode-scanner';
// import styled from 'styled-components';

// const BarcodeScan = () => {
//   const [data, setData] = useState('No result');
//   const [cameraAccessGranted, setCameraAccessGranted] = useState(false);

//   useEffect(() => {
//     requestCameraAccess();
//   }, []);

//   const requestCameraAccess = async () => {
//     try {
//       const stream = await navigator.mediaDevices.getUserMedia({ video: true });
//       stream.getTracks().forEach(track => track.stop());
//       setCameraAccessGranted(true);
//     } catch (error) {
//       console.error('Error accessing camera:', error);
//     }
//   };

//   const handleScan = (result) => {
//     if (result) {
//       setData(result.text);
//     }
//   };

//   const handleError = (err) => {
//     console.error(err);
//   };

//   return (
//     <>
//       {cameraAccessGranted ? (
//         <BarcodeScanner
//           onDetected={handleScan}
//           onError={handleError}
//           style={{ 
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//             width: '100%',
//             height: '400px',
//           }}
//         />
//       ) : (
//         <p>Access to camera is not granted.</p>
//       )}
//       <p>{data}</p>
//     </>
//   );
// };
// export default BarcodeScan;

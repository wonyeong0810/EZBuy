import './App.css'
import styled from 'styled-components'
import BarcodeScanner from './pages/BarcodeScanner'

function App() {

  return (
    <>
        <BarcodeScanner></BarcodeScanner>
    </>
  )
}

const Layout = styled.div`
  width: 100%;
  height:100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Box1 = styled.div`
  width  : 400px;
  height : 300px;
  background-color: yellow;
  font-size: 20px;
  color: black;
`

export default App

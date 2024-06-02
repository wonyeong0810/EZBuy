import './App.css'
import styled from 'styled-components'

function App() {

  return (
    <>
    <Layout>
      dldldlldldldl
      <Box1>
        hello world wonyeong
      </Box1>
    </Layout>
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

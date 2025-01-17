
import {Routes , Route} from "react-router-dom";
import './App.css'
import CaptureComponent from './Components/CaptureComponent';
import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Container, Row } from 'react-bootstrap';
import Header from "./assets/banner.jpg";
import HomePage from './Pages/HomePage';
import home from "./assets/home.jpg";
import CardsPage from './Pages/CardsPage';
import ImageEditor from './Components/ImageEditor';
function App() {

  return (
  <Container fluid className='justify-content-center align-items-center'>
    <Row className='justify-content-center align-items-center mb-2'>
      <img src={Header} className='img-fluid w-100 mx-auto '/>
    </Row>
    <Row>
    <a href='https://betaqa.waqfg.com/' className='mx-auto  w-75'> 
    <img src={home} className='img-fluid '/>
    </a>
    </Row>
    <Container >


    <Routes>
      <Route
      path='/'
      element={<HomePage />}
      />
      <Route
      path='/:id'
      element={<CardsPage/>}
      />
    <Route
    path='/card/:id'
    element={<ImageEditor/>}
    />
    </Routes>
    </Container>
  </Container>
  )
}

export default App

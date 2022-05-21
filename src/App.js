import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import DetailsPage from './Components/DetailsPage';
import LoginPage from './Components/LoginPage';
import MainPage from './Components/MainPage';
import NavBar from './Components/NavBar';

function App() {
  return (
    <div >
       <BrowserRouter>
      <NavBar/>
      <Routes>
     
       <Route path="/" element={ <LoginPage/>}/>

      <Route path="Home" element={<MainPage/>}/>
      <Route path="/:Dataid" element={<DetailsPage />} />

      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

import './App.css';
import Home from './Home';
import Add from './Add';
import View from './View';
import Update from './Update';
import Delete from './Delete';
import NavBar from './NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <BrowserRouter>
        {window.location.pathname !== '/' && <NavBar />}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/add' element={<Add />} />
          <Route path='/view' element={<View />} />
          <Route path='/update' element={<Update />} />
          <Route path='/delete' element={<Delete />} />
          <Route path='*' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

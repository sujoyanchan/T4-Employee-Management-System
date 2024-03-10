import './App.css';
import Home from './Home';
import Add from './Add';
import View from './View';
import Update from './Update';
import Delete from './Delete';
import NavBar from './NavBar';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/add' element={<Add />} />
          <Route path='/view' element={<View />} />
          <Route path='/update' element={<Update />} />
          <Route path='/delete' element={<Delete />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

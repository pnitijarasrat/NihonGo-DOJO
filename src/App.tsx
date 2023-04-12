import React from 'react';
import NavBar from './Component/NavBar/NavBar';
import LevelPage from './Component/LevelPage/LevelPage';
import HomePage from './Component/HomePage/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { hiraganaArray } from './Component/Data/Hiragana';
import { katakana } from './Component/Data/Katakana';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/hiragana' element={<LevelPage level={hiraganaArray} />} />
        <Route path='/katakana' element={<LevelPage level={katakana} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
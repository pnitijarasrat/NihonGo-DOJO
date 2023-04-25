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
        <Route path='/NihonGo-DOJO' element={<HomePage />} />
        <Route path='/NihonGo-DOJO/hiragana' element={<LevelPage header={"Hiragana"} level={hiraganaArray} />} />
        <Route path='/NihonGo-DOJO/katakana' element={<LevelPage header={"Katakana"} level={katakana} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
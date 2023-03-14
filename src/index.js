import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Home } from './pages/Home/Home';
import { Contact } from './pages/Contact/Contact';
import { PageNotFound } from './pages/PageNotFound/PageNotFound';
import { Massage } from './pages/Massage/Massage';
import { DryNeedling } from './pages/DryNeedling/DryNeedling';
import { Cupping } from './pages/Cupping/Cupping';
import { Douleurs } from './pages/Douleurs/Douleurs';
import { TroublesEquilibre } from './pages/TroublesEquilibre/TroublesEquilibre';
import { Formation } from './pages/Formation/Formation';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}>
          
          <Route path='/' element={<Home/>}/>
          <Route path='/massage' element={<Massage/>}/>
          <Route path='/dryNeedling' element={<DryNeedling/>}/>
          <Route path='/cupping' element={<Cupping/>}/>
          <Route path='/douleursChroniques' element={<Douleurs/>}/>
          <Route path='/troublesEquilibre' element={<TroublesEquilibre/>}/>
          <Route path='/formation' element={<Formation/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Route>
        <Route path='*' element={<PageNotFound/>} />
      </Routes>
    </BrowserRouter>
);

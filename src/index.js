import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Home } from './pages/Home/Home';
import { Contact } from './pages/Contact/Contact';
import { PageNotFound } from './pages/PageNotFound/PageNotFound';
import { MoreInformation } from './pages/MoreInformation/MoreInformation';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}>
          
          <Route path='/' element={<Home/>}/>
          <Route path='/informations' element={<MoreInformation/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Route>
        <Route path='*' element={<PageNotFound/>} />
      </Routes>
    </BrowserRouter>
);

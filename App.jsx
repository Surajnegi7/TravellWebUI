import './App.css';
import './external.css';
import React from 'react';
import { Header } from './Header';
import {Carding} from './Carding';
import { Optionvalues } from './Optionvalues';
import { Slides } from './Slides';
import { Route1 } from './Route1';
import { Route2 } from './Route2';
import { Explore } from './Explore';
import { Advice } from './Advice';
import { Bestplaces } from './Bestplaces';
import { Subscribe } from './Subscribe';
import { Footer } from './Footer';
export function App() {
  return (
    <div>
      <Header/>
      <Optionvalues/>
    <Carding/>
    <Slides/>
    <Route1/>
    <Route2/>
    <Explore/>
    <Advice/>
    <Bestplaces/>
    <Subscribe/>
    <Footer/>
    </div>
    
  );
}

export default App;
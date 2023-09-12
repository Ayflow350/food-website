import React from 'react';
import Navbbar from './components/Navbbar';
import Hero from './components/Hero';
import HeadLineCards from './components/HeadLineCards';
import Food from './components/Food';
import Category from './components/Category';

function App() {
  return (
    <div>
    <Navbbar/>
    <Hero/>
    <HeadLineCards/>
    <Food/>
    <Category/>
    </div>
  );
}

export default App;

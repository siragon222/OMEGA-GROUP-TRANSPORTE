import React from 'react';
import Landin_Page from './LANDIN_PAGE/Landin_Page';
import './App.css';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton';
import Header from './LANDIN_PAGE/Header/Header';

function App() {
  return (
    <div>
      <Header />
      <Landin_Page />
      <WhatsAppButton />
    </div>
  );
}

export default App;

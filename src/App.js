import React from 'react';
import './App.scss';
import { MainContextProvider } from './context/MainContext';
import RouterPage from './RouterPage';

var cors = require('cors')
cors();

function App() {

  return (
    <MainContextProvider>
      <RouterPage />
    </MainContextProvider>
  );
}

export default App;

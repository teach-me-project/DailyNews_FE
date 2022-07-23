import React from "react";
import { Provider  } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './Redux/Store'
import MainNavigation from "./mainNavigation";
// import './App.css';

const App=()=> {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainNavigation/>
      </PersistGate>
    </Provider>
    
  )
}

export default App;

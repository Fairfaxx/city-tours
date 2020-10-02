import React, { Fragment } from 'react';
import './App.scss';
import Nabvar from './components/Navbar/Nabvar';
import TourList from './components/TourList';

function App() {
  return (
    <Fragment>
      <Nabvar />
      <TourList />
    </Fragment>
  );
}

export default App;

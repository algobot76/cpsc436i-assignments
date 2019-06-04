import React from 'react';
import Footer from './Footer';
import AddItem from '../containers/AddItem';
import VisibleItemList from '../containers/VisibleItemList';

const App = () => (
  <div>
    <AddItem />
    <VisibleItemList />
    <Footer />
  </div>
);

export default App;

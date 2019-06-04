import React from 'react';
import Footer from './Footer';
import AddItem from './AddItem';
import VisibleItemList from './VisibleItemList';

const App = () => (
  <div>
    <AddItem />
    <VisibleItemList />
    <Footer />
  </div>
);

export default App;

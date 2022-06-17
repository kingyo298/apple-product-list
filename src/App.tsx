import React from 'react';

import ItemPage from './components/ItemPage';
const App: React.VFC = () => {
  return (
    <div>
      <h1>Product List</h1>
      <div>
        <ItemPage />
      </div>
    </div>
  );
};

export default App;

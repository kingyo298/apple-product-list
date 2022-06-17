import React from 'react';

import ItemPage from './components/ItemPage';
const App: React.VFC = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-center font-bold text-5xl py-12">Product List</h1>
      <div>
        <ItemPage />
      </div>
    </div>
  );
};

export default App;

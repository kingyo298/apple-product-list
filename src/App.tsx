import React from 'react';

import ItemPage from './components/ItemPage';
const App: React.VFC = () => {
  return (
    <div className="container mx-auto">
      <h1 className="py-12 text-center text-5xl font-bold">Product List</h1>
      <div>
        <ItemPage />
      </div>
    </div>
  );
};

export default App;

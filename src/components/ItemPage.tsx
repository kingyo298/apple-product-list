import React from 'react';

import itemList from '../itemlist';
import Category from './Category';

const ItemPage: React.VFC = () => {
  return (
    <div className="mb-36 grid grid-rows-3 gap-24">
      {Object.keys(itemList).map((category, index) => (
        <Category category={category} items={itemList[category]} key={index} />
      ))}
    </div>
  );
};
export default ItemPage;

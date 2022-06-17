import React from 'react';

import itemList from '../itemlist';
import Category from './Category';

const ItemPage: React.VFC = () => {
  return (
    <div>
      {Object.keys(itemList).map((category, index) => (
        <Category category={category} items={itemList[category]} key={index} />
      ))}
    </div>
  );
};
export default ItemPage;

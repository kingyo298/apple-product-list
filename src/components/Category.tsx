import React from 'react';

import Item from './Item';
interface item {
  title: string;
  imgUrl: string;
  price: number;
}
interface category {
  category: string;
  items: item[];
}
const Category: React.VFC<category> = (props) => {
  return (
    <div className="rounded-xl border border-2 p-16 shadow-lg">
      <p className="mb-8 text-2xl">{props.category}</p>
      <div className="flex w-full snap-x scroll-px-6 gap-8 overflow-x-auto py-20">
        {props.items.map((item, index) => (
          <Item item={item} key={index} />
        ))}
      </div>
    </div>
  );
};
export default Category;

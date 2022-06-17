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
    <>
      <p>{props.category}</p>
      {props.items.map((item, index) => (
        <Item item={item} key={index} />
      ))}
    </>
  );
};
export default Category;

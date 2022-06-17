import React from 'react';
interface item {
  item: {
    title: string;
    imgUrl: string;
    price: number;
  };
}
const Item: React.VFC<item> = (props) => {
  return (
    <div>
      <p>{props.item.title}</p>
      <img src={props.item.imgUrl} alt="" />
      <p>{props.item.price}円~</p>
    </div>
  );
};
export default Item;

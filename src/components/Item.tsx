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
    <div className="snap-start shrink-0 border border-2 w-[calc((100%-7rem)/3)] h-[300px] rounded-lg p-6 snap-start first:ml-6 last:mr-6 cursor-pointer hover:scale-110 hover:border-4 transition-all ease-out h-full shadow-lg hover:shadow-xl">
      <div className="w-100 h-full flex flex-col justify-between">
        <img src={props.item.imgUrl} alt="" className="mx-auto h-3/4" />
        <div>
          <p className="font-bold mb-1">{props.item.title}</p>
          <p className="text-right">{props.item.price}円~</p>
        </div>
      </div>
    </div>
  );
};
export default Item;

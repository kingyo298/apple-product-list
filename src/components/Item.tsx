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
    <div className="h-[300px] w-[calc((100%-7rem)/3)] shrink-0 cursor-pointer snap-start snap-start rounded-lg border border-2 p-6 shadow-lg transition-all ease-out first:ml-6 last:mr-6 hover:scale-110 hover:border-4 hover:shadow-xl">
      <div className="w-100 flex h-full flex-col justify-between">
        <img src={props.item.imgUrl} alt="" className="mx-auto h-3/4" />
        <div>
          <p className="mb-1 font-bold">{props.item.title}</p>
          <p className="text-right">{props.item.price}円~</p>
        </div>
      </div>
    </div>
  );
};
export default Item;

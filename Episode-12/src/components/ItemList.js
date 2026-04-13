import { json } from "react-router-dom";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const ItemList = ({ items }) => {
  if (!items) return <div>Loading...</div>;

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    //Dispatch an action
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.id}
          className="p-2 m-2 flex text-left justify-between border-b-2 border-gray-200"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span className="text-gray-800 text-lg">{item.title}</span>
              <h3 className="font-bold"> ${item.price}</h3>
              <span>⭐{item.rating}/5</span>
            </div>
            <p className="text-xs">{item.description}</p>
          </div>
          <div className="bg-emerald-100 w-3/12 p-4 rounded-2xl">
            <div className="absolute">
              <button
                className="rounded-lg mx-16 p-2 bg-black text-white shadow-lg hover:cursor-pointer"
                onClick={()=>handleAddItem(item)}
              >
                Add +
              </button>
            </div>
            <img src={item.thumbnail} alt="item-img" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;

import { useContext } from "react";
import { dataContext } from "../App";
import Item from "./Item";

const ItemList = () => {
  const data = useContext(dataContext);
  return (
    <div className="ItemList">
      {data.map((it) => (
        <Item key={it.id} {...it} />
      ))}
    </div>
  );
};

export default ItemList;

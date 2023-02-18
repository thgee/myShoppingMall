const Item = ({ id, name, price, img }) => {
  return (
    <div className="Item">
      <img src={img} />
      <h3>{name}</h3>
      <div>{price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} $</div>
    </div>
  );
};

export default Item;

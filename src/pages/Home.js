import { useEffect, useState } from "react";
import Header from "../components/Header";
import ItemList from "../components/ItemList";

const Home = () => {
  return (
    <div className="Home">
      <Header />
      <img src={`${process.env.PUBLIC_URL}/assets/bg.png`} />
      <ItemList />
    </div>
  );
};
export default Home;

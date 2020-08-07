import React, { useEffect, useState, useContext } from "react";
import { AppContext } from "../../Context/AppContext";
import axios from "axios";
import "./Home.css";
import FoodCard from "../../components/foodCard";

export default function Home() {
  const [number, setNum] = useState(10);
  const [listData, setList] = useState("");
  const url = `https://api.spoonacular.com/recipes/search?number=${number}&apiKey=ccac008ad54e44a29a8380e5d14f753c`;
  const { setData, data } = useContext(AppContext);

  const fetchData = async () => {
    axios
      .get(url)
      .then((res) => {
        console.log(res);
        setData(Array.from(res.data.results));
        setList(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, [number]);

  return (
    <div className="Home_container">
      {console.log(Array.isArray(data))}
      {data &&
        data.map((item, index) => {
          return <FoodCard id={item.id} title={item.title} />;
        })}
    </div>
  );
}

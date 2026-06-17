import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import CountryList from "./components/CountryList";
import Loader from "./components/Loader";
import Header from "./components/Header";
import CountryDetail from "./components/CountryDetail";
import Like from "./components/Like"

function App() {
  const savedDataString = localStorage.getItem("my-cart") || "{}";
  const savedData = JSON.parse(savedDataString);

  const [countries, setCountries] = useState([]);

  const [cart, setCart] = useState(savedData);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/restcountries/restcountries/master/src/main/resources/countriesV3.1.json",
    )
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
      })
  }, []);

  if (countries.length === 0) {
    return <Loader />;
  }

 function onAddLike(code) {
    const oldCount =  0;
    const newCart = { ...cart, [code]: oldCount + 1 };
    setCart(newCart);
    const cartString = JSON.stringify(newCart);
    localStorage.setItem("my-cart", cartString);
  }

  const totalCount = Object.keys(cart).reduce(function (previous, current) {
    return previous + cart[current];
  }, 0);

  console.log(totalCount)
  console.log("cart in home",cart)

  return (
    <>
      <Header totalCount={totalCount} />
      <Routes>
        <Route path="" element={<CountryList countries={countries} />}></Route>
        <Route
          path="/country/:code"
          element={<CountryDetail onAddLike={onAddLike} />}
        ></Route>
        <Route
          path="/like/country"
          element={<Like cart={cart} countries={countries} />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;


import axios from "axios";
import { useState, createContext, useContext } from "react";

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  // Fetching all products from DummyJSON API
  const fetchAllProducts = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/products?limit=150");
      console.log(res);
      const productsData = res.data.products
      setData(productsData);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  
  const getUniqueCategory = (data, property) => {
    let newVal = data?.slice(0 ,60).map((curElem) => {
        return curElem[property]
    })
     newVal = ["All",...new Set(newVal)]
     return newVal
}

const categoryOnlyData = getUniqueCategory(data, "category")

const brandOnlyData = getUniqueCategory(data, "brand")

  return (
    <DataContext.Provider value={{ data, setData, fetchAllProducts, categoryOnlyData, brandOnlyData }}>
      {children}
    </DataContext.Provider>
  );
};


export const getData = () => useContext(DataContext)

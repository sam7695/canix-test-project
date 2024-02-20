import React, { useEffect, useState } from "react";
import ApiService from "./services/ApiService";
import UploadForm from "./components/UploadForm";
import ProductList from "./components/ProductList";
import CategorySummary from "./components/CategorySummary";
import StartDate from "./components/StartDate";
import { Toaster, toast} from 'sonner';
import "./styles.css";

const App = () => {
  const [products, setProducts] = useState([]);

  const handleUpload = async (files) => {
    await ApiService.uploadData(files);
    const productList = await ApiService.getProductList();
    setProducts(productList);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productList = await ApiService.getProductList();
        setProducts(productList);
      } catch (error) {
        toast.error("Error Getting Product List");
      }
    };

    fetchData();
  }, []);

  return (
    <>
    <Toaster richColors />
    <div className="bg-gray-100 h-screen p-8">
      <h1 className="text-3xl font-bold text-indigo-600">
        CANIX CODE EXERCISE
      </h1>

      <div className="mt-8 grid grid-cols-1 gap-6">
        <UploadForm onUpload={handleUpload} />
        <ProductList products={products} />
        <CategorySummary products={products} />
        <StartDate products={products} />
      </div>
    </div>
    </>
  );
};

export default App;
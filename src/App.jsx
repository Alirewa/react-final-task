import AppLayout from "./Features/body/AppLayout";
import Footer from "./Features/footer/Footer";
import Header from "./Features/header/Header";
import { DarkModeProvider } from "./context/DarkModeContext";
import React, { useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [options, setOptions] = useState([]);
  console.log(products);
  console.log(options);

  return (
    <DarkModeProvider>
      <div className="h-screen w-full">
        <div className="flex flex-col h-full justify-between items-center bg-secondary-800 rounded-md">
          <Header products={products} setProducts={setProducts} />
          <AppLayout
            setProducts={setProducts}
            products={products}
            options={options}
            setOptions={setOptions}
          />
          <Footer />
        </div>
      </div>
    </DarkModeProvider>
  );
}

export default App;

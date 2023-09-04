import React from "react";
import EmailSubscribe from "./components/EmailSubscribe";
import PricingCard from "./components/PricingCard";
import ProductModal from "./components/ProductModal";

const App = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center space-y-10 bg-zinc-700 md:h-screen">
      <EmailSubscribe />
      <PricingCard />
      <ProductModal />
    </div>
  );
};

export default App;

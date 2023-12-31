import React from "react";
import EmailSubscribe from "./components/EmailSubscribe";
import PricingCard from "./components/PricingCard";
import ProductModal from "./components/ProductModal";
import ImageGallery from "./components/ImageGallery";
import LoginModal from "./components/LoginModal";

const App = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center space-y-10 bg-zinc-700 py-14">
      <EmailSubscribe />
      <PricingCard />
      <ProductModal />
      <ImageGallery />
      <LoginModal />
    </div>
  );
};

export default App;

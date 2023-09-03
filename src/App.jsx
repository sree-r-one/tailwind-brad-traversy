import React from "react";
import EmailSubscribe from "./components/EmailSubscribe";
import PricingCard from "./components/PricingCard";

const App = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-zinc-700">
      <EmailSubscribe />
      <PricingCard />
    </div>
  );
};

export default App;

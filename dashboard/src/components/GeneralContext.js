import React, { useState } from "react";

import BuyActionWindow from "./BuyActionWindow";
import SellActionWindow from "./SellActionWindow";

const GeneralContext = React.createContext({
  openBuyWindow: (uid) => {},
  closeBuyWindow: () => {},

  openSellWindow: (uid) => {},
  closeSellWindow: () => {},
});

export const GeneralContextProvider = (props) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);

  const [isSellWindowOpen, setIsSellWindowOpen] = useState(false);

  const [selectedStockUID, setSelectedStockUID] = useState("");

  const handleOpenBuyWindow = (uid) => {
    setIsBuyWindowOpen(true);
    setSelectedStockUID(uid);
  };

  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
  };

   // OPEN SELL WINDOW
  const handleOpenSellWindow = (uid) => {
    setIsSellWindowOpen(true);
    setSelectedStockUID(uid);
  };

  // CLOSE SELL WINDOW
  const handleCloseSellWindow = () => {
    setIsSellWindowOpen(false);
    setSelectedStockUID("");
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,

        // SELL
        openSellWindow: handleOpenSellWindow,
        closeSellWindow: handleCloseSellWindow,

      }}
    >
      {props.children}
      {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />}

      {/* SELL WINDOW */}
      {isSellWindowOpen && (
        <SellActionWindow uid={selectedStockUID} />
      )}
      
    </GeneralContext.Provider>
  );
};

export default GeneralContext;
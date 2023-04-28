import React from "react";
import Purchases from "../Molecules/TransactionDetails/Purchases";

export default function PurchaseDetails() {
  return (
    <>
      <h2 className="fw-bold text-xl color-palette-1 mb-20">
        Purchase Details
      </h2>
      <Purchases label="ID Game" value="nostalgicnafcillin" />
      <Purchases label="Order ID" value="#GG001" />
      <Purchases label="Item" value="250 Diamonds" />
      <Purchases label="Price" value={150000} />
      <Purchases label="Tax (10%)" value={15000} />
      <Purchases label="Total" value={165000} className="color-palette-4" />
    </>
  );
}

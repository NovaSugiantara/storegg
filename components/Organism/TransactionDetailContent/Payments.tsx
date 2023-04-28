import React from "react";
import PaymentsInfo from "../../Molecules/TransactionDetails/PaymentsInfo";

export default function Payments() {
  return (
    <>
      <h2 className="fw-bold text-xl color-palette-1 mb-20">
        Payment Informations
      </h2>
      <PaymentsInfo label="Account Name" value="Nova Sugiantara" />
      <PaymentsInfo label="Type" value="Worldwide Transfer" />
      <PaymentsInfo label="Bank Name" value="BCA" />
      <PaymentsInfo label="Bank Account Name" value="PT Store GG Indonesia" />
      <PaymentsInfo label="Bank Number" value={5426433412500280} />
    </>
  );
}

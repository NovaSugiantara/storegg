interface PurchaseDetails {
  label: string;
  value: string | number;
}

export default function PaymentsInfo(props: PurchaseDetails) {
  const { label, value } = props;

  // Fungsi untuk mengubah format menjadi format kartu kredit
  const formatCreditCard = (creditCardNumber: string) => {
    const formattedNumber = creditCardNumber
      .replace(/(\d{4})/g, "$1 ")
      .replace(/(^\s+|\s+$)/, "");
    return formattedNumber;
  };

  let formattedValue = value;

  // Cek apakah label adalah credit card
  if (label === "Bank Number" && typeof value === "number") {
    // Ubah format menjadi format kartu kredit
    formattedValue = formatCreditCard(value.toString());
  }

  return (
    <>
      <p className="text-lg color-palette-1 mb-20">
        {label} <span className={`purchase-details`}>{formattedValue}</span>
      </p>
    </>
  );
}

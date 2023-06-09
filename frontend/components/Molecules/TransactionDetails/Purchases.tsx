interface PurchaseDetails {
  label: string;
  value: string | number;
  className?: string;
}
export default function Purchases(props: Partial<PurchaseDetails>) {
  const { label, value, className } = props;
  // Fungsi untuk mengubah format menjadi IDR
  const formatIDR = (amount: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(amount);
  };

  let formattedValue = value;

  // Cek apakah label adalah price, tax atau total
  if (label === "Price" || label === "Tax" || label === "Total") {
    // Ubah format menjadi IDR
    formattedValue = formatIDR(Number(value));
  }
  return (
    <>
      <p className="text-lg color-palette-1 mb-20">
        {label}{" "}
        <span className={`purchase-details ${className}`}>
          {formattedValue}
        </span>
      </p>
    </>
  );
}

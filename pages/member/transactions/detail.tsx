import Link from "next/link";
import Sidebar from "../../../components/Organism/Sidebar/sidebar";
import TransactionDetailsContent from "../../../components/TransactionDetailContent";

export default function TransactionsDetails() {
  return (
    <>
      <section className="transactions-detail overflow-auto">
        {/* sidebar */}
        <Sidebar />
        {/* sidebar */}
        <TransactionDetailsContent />
      </section>
    </>
  );
}

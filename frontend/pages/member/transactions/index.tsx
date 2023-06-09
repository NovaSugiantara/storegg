import TranscactionContent from "../../../components/Organism/TransactionContent";
import Sidebar from "../../../components/Organism/Sidebar/sidebar";

export default function index() {
  return (
    <>
      <section className="transactions overflow-auto">
        {/* sidebar */}
        <Sidebar />
        {/* sidebar */}
        <TranscactionContent />
      </section>
    </>
  );
}

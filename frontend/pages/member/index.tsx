import Sidebar from "../../components/Organism/Sidebar/sidebar";
import OverviewContent from "../../components/Organism/OverviewContent";

export default function overview() {
  return (
    <>
      <section className="overview overflow-auto">
        {/* sidebar */}
        <Sidebar />
        {/* content */}
        <OverviewContent />
      </section>
    </>
  );
}

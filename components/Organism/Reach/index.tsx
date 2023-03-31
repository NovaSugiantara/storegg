import StatItem from "../../Molecules/ReachItem/StatItem";
import VerticalLine from "../../Molecules/ReachItem/VerticalLine";
import HorizontalLine from "../../Molecules/ReachItem/HorizontalLine";

export default function index() {
  return (
    <section className="reached pt-50 pb-50">
      <div className="container-fluid">
        <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-lg-0 gap-4">
          <StatItem number="290M+" description="Players Top Up" />
          <HorizontalLine />
          <VerticalLine />
          <HorizontalLine />
          <StatItem number="12.500" description="Games Available" />
          <HorizontalLine />
          <VerticalLine />
          <StatItem number="99,9%" description="Happy Players" />
          <HorizontalLine />
          <VerticalLine />
          <StatItem number="4.7" description="Rating Worldwide" />
        </div>
      </div>
    </section>
  );
}

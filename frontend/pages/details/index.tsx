// import { useRouter } from "next/router";
import FormCheckout from "../../components/Organism/DetailsGame/FormCheckout";
import TopUpItem from "../../components/Organism/DetailsGame/TopUpItem";
import Navbar from "../../components/Organism/Navbar";
import Footer from "../../components/Organism/Footer";

export default function Detail() {
  //  const router = useRouter();
  //  const { slug } = router.query;
  return (
    <>
      <Navbar />
      {/* Detail Content */}
      <section className="detail pt-lg-60 pb-50">
        <div className="container-xxl container-fluid">
          <div className="detail-header pb-50">
            <h2 className="text-4xl fw-bold color-palette-1 text-start mb-10">
              Top Up
            </h2>
            <p className="text-lg color-palette-1 mb-0">
              Perkuat akun dan jadilah pemenang
            </p>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-5 pb-30 pb-md-0 pe-md-25 text-md-start">
              <TopUpItem type="mobile" />
            </div>
            <div className="col-xl-9 col-lg-8 col-md-7 ps-md-25">
              <TopUpItem type="desktop" />
              <hr />
              <FormCheckout />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

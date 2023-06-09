import Image from "next/image";
import CheckoutItem from "../components/Organism/Checkout";
import CheckoutDetail from "../components/Organism/Checkout/CheckoutDetail";
import CheckoutConfirm from "../components/Organism/Checkout/CheckoutConfirm";
import Link from "next/link";

export default function checkout() {
  return (
    <>
      <section className="checkout mx-auto pt-md-100 pb-md-145 pt-30 pb-30">
        <div className="container-fluid bg-blur">
          <div className="logo text-md-center text-start pb-50">
            <Link className="" href="#">
              <Image src="/icon/logo.svg" alt="logo" height={60} width={60} />
            </Link>
          </div>
          <div className="title-text pt-md-50 pt-0">
            <h2 className="text-4xl fw-bold color-palette-1 mb-10">Checkout</h2>
            <p className="text-lg color-palette-1 mb-0">
              Waktunya meningkatkan cara bermain
            </p>
          </div>
          <CheckoutItem />
          <hr />
          <CheckoutDetail />
          <CheckoutConfirm />
        </div>
      </section>
    </>
  );
}

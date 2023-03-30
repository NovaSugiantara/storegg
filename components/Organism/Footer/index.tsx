import Link from "next/link";
import FooterItem from "../../Molecules/FooterItem";
import FooterItemConnect from "../../Molecules/FooterItem/index_connect";

export default function index() {
  return (
    <section className="footer pt-50">
      <footer>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 text-lg-start text-center">
              <Link href="" className="mb-30">
                <img src="/icon/logo.svg" alt="logo" width={60} height={60} />
              </Link>
              <p className="mt-30 text-lg color-palette-1 mb-30">
                StoreGG membantu gamers
                <br /> untuk menjadi pemenang sejati
              </p>
              <p className="mt-30 text-lg color-palette-1 mb-30">
                Copyright 2021. All Rights Reserved.
              </p>
            </div>
            <div className="col-lg-8 mt-lg-0 mt-20">
              <div className="row gap-sm-0">
                <FooterItem
                  title="Company"
                  name={["About Us", "Terms Of Use", "Privacy Policy"]}
                />
                <FooterItem
                  title="Support"
                  name={["Refund Policy", "Unlock Rewards", "Live Chatting"]}
                />
                <FooterItemConnect
                  title="Contact Us"
                  links={[
                    { label: "Email", value: "hello@storegg.com" },
                    { label: "Email", value: "team@storegg.com" },
                    { label: "Maps", value: "Jakarta Selatan, Indonesia" },
                    { label: "Phone", value: "+62218088293" },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}

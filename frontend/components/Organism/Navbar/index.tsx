import Image from "next/image";

import Menu from "./menu";
import Auth from "./auth";
import ToggleMenu from "./ToggleMenu";
import Link from "next/link";

export default function index() {
  return (
    <>
      <section>
        <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white pt-lg-40 pb-lg-40 pt-30 pb-50">
          <div className="container-fluid">
            <Link className="navbar-brand" href="/#">
              <Image alt="logo" src="/icon/logo.svg" width={60} height={60} />
            </Link>
            <ToggleMenu />
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto text-lg gap-lg-0 gap-2 no-underline">
                <Menu title="Home" active />
                <Menu title="Games" href="/games" />
                <Menu title="Rewards" href="/rewards" />
                <Menu title="Discover" href="/discovers" />
                <Menu title="Global Ranks" href="/global-ranks" />

                <Auth is_login />
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
}

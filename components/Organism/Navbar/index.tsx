import Image from "next/image";
import Auth from "./auth";
import Menus from "./menus";

export default function Navbar() {
  return (
      <>
        <section>
        <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white pt-lg-40 pb-lg-40 pt-30 pb-50">
            <div className="container-fluid">
                <a className="navbar-brand" href="/#">
                    <Image src="/icon/logo.svg" width={60} height={60} />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto text-lg gap-lg-0 gap-2">
                        <Menus title="Home" active />
                        <Menus title="Games" />
                        <Menus title="Rewards" />
                        <Menus title="Discover"  />
                        <Menus title="Global Ranks" />

                        <Auth />
                         <li className="nav-item my-auto dropdown d-flex">
                            <div className="vertical-line d-lg-block d-none"></div>
                            <div>
                                <a className="dropdown-toggle ms-lg-40" href="#" role="button" id="dropdownMenuLink"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src="/img/avatar-1.png" className="rounded-circle" width="40" height="40"
                                        alt="" />
                                </a>

                                <ul className="dropdown-menu border-0" aria-labelledby="dropdownMenuLink">
                                    <li><a className="dropdown-item text-lg color-palette-2" href="#">My Profile</a></li>
                                    <li><a className="dropdown-item text-lg color-palette-2" href="#">Wallet</a></li>
                                    <li><a className="dropdown-item text-lg color-palette-2" href="#">Account Settings</a>
                                    </li>
                                    <li><a className="dropdown-item text-lg color-palette-2" href="#">Log Out</a></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </section>
      < />
  );
}

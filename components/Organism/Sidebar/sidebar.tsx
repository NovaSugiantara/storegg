// import styles from './Sidebar.module.css';
import Link from "next/link";
import Profile from "./profile";
import SidebarFooter from "./sidebarFooter";
import MenuItem from "./MenuItem";

export default function sidebar() {
  return (
    <>
      <section className="sidebar">
        <div className="content pt-50 pb-30 ps-30">
          <Profile />
          <div className="menus">
            <MenuItem title="Overview" icon="ic-overview-menu" active />
            <MenuItem title="Transaction" icon="ic-transaction-menu" />
            <MenuItem title="Messages" icon="ic-messages-menu" />
            <MenuItem title="Card" icon="ic-card-menu" />
            <MenuItem title="Rewards" icon="ic-reward-menu" />
            <MenuItem title="Setting" icon="ic-setting-menu" />
            <MenuItem title="Logout" icon="ic-logout-menu" />
          </div>
          <SidebarFooter />
        </div>
      </section>
    </>
  );
}

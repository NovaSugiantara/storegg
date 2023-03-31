import Image from "next/image";
import Category from "./Category";
import TableRow from "./TableRow";

export default function index() {
  return (
    <>
      <main className="main-wrapper">
        <div className="ps-lg-0">
          <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
          <div className="top-up-categories mb-30">
            <p className="text-lg fw-medium color-palette-1 mb-14">
              Top Up Categories
            </p>
            <div className="main-content">
              <div className="row">
                <Category icon="ic-game-desktop" nominal={1800500}>
                  Game <br /> Desktop
                </Category>
                <Category icon="ic-game-mobile" nominal={8455000}>
                  Game <br /> Mobile
                </Category>
                <Category icon="ic-other-category" nominal={5000000}>
                  Other <br /> Category
                </Category>
              </div>
            </div>
          </div>
          <div className="latest-transaction">
            <p className="text-lg fw-medium color-palette-1 mb-14">
              Latest Transactions
            </p>
            <div className="main-content main-content-table overflow-auto">
              <table className="table table-borderless">
                <thead>
                  <tr className="color-palette-1">
                    <th className="text-start" scope="col">
                      Game
                    </th>
                    <th scope="col">Item</th>
                    <th scope="col">Price</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <TableRow
                    title="Mobile Legend: Bang Bang"
                    platform="Mobile"
                    image="overview-4"
                    item="200 Diamond"
                    price={150000}
                    status="Pending"
                  />
                  <TableRow
                    title="Clash Of Clans"
                    platform="Mobile"
                    image="overview-3"
                    item="400 Gems"
                    price={450000}
                    status="Success"
                  />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

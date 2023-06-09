import { useState } from "react";
import ButtonTab from "./ButtonTab";
import TableRow from "./TableRow";

export default function index() {
  const [activeFilter, setActiveFilter] = useState("*");

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
  };

  return (
    <>
      <main className="main-wrapper">
        <div className="ps-lg-0">
          <h2 className="text-4xl fw-bold color-palette-1 mb-30">
            My Transactions
          </h2>
          <div className="mb-30">
            <p className="text-lg color-palette-2 mb-12">You’ve spent</p>
            <h3 className="text-5xl fw-medium color-palette-1">
              Rp 4.518.000.500
            </h3>
          </div>
          <div className="row mt-30 mb-20">
            <div className="col-lg-12 col-12 main-content">
              <div id="list_status_title">
                <ButtonTab
                  title="All Trx"
                  active={activeFilter === "*"}
                  filter="*"
                  onFilterClick={handleFilterClick}
                />
                <ButtonTab
                  title="Success"
                  active={activeFilter === "success"}
                  filter="success"
                  onFilterClick={handleFilterClick}
                />
                <ButtonTab
                  title="Pending"
                  active={activeFilter === "pending"}
                  filter="pending"
                  onFilterClick={handleFilterClick}
                />
                <ButtonTab
                  title="Failed"
                  active={activeFilter === "failed"}
                  filter="failed"
                  onFilterClick={handleFilterClick}
                />
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
                    <th className="" scope="col">
                      Game
                    </th>
                    <th scope="col">Item</th>
                    <th scope="col">Price</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody id="list_status_item">
                  <TableRow
                    title="Mobile Legend: Bang Bang"
                    platform="Mobile"
                    image="overview-4"
                    item="200 Diamond"
                    price={150000}
                    status="Pending"
                  />
                  <TableRow
                    title="Mobile Legend: Bang Bang"
                    platform="Mobile"
                    image="overview-4"
                    item="150 Diamond"
                    price={75000}
                    status="Success"
                  />
                  <TableRow
                    title="Mobile Legend: Bang Bang"
                    platform="Mobile"
                    image="overview-4"
                    item="500 Diamond"
                    price={750000}
                    status="Failed"
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

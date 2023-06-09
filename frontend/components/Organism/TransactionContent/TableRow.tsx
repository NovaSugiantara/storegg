import Link from "next/link";
import classNames from "classnames";

interface TableProps {
  title: string;
  platform: string;
  item: string;
  price: number;
  status: "Pending" | "Success" | "Failed";
  image: string;
}

export default function TableRow(props: TableProps) {
  const { image, title, platform, item, price, status } = props;
  const formattedPrice = price.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
  });
  const cx = classNames({
    "float-start icon-status": true,
    pending: status === "Pending",
    success: status === "Success",
    failed: status === "Failed",
  });
  return (
    <>
      <tr data-category={status} className="align-middle">
        <th scope="row">
          <img
            className="float-start me-3 mb-lg-0 mb-3"
            src={`/img/${image}.png`}
            width="80"
            height="60"
            alt=""
          />
          <div className="game-title-header">
            <p className="game-title fw-medium text-start color-palette-1 m-0">
              {title}
            </p>
            <p className="text-xs fw-normal text-start color-palette-2 m-0">
              {platform}
            </p>
          </div>
        </th>
        <td>
          <p className="fw-medium color-palette-1 m-0">{item}</p>
        </td>
        <td>
          <p className="fw-medium color-palette-1 m-0">{formattedPrice}</p>
        </td>
        <td>
          <div>
            <span className={cx}></span>
            <p className="fw-medium text-start color-palette-1 m-0 position-relative">
              {status}
            </p>
          </div>
        </td>
        <td>
          <Link
            href="/member/transactions/detail"
            className="btn btn-status rounded-pill text-sm"
          >
            Details
          </Link>
        </td>
      </tr>
    </>
  );
}

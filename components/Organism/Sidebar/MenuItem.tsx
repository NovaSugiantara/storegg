import cx from "classnames";
import Image from "next/image";
import Link from "next/link";

interface OverviewMenuItem {
  title: string;
  icon:
    | "ic-overview-menu"
    | "ic-transaction-menu"
    | "ic-messages-menu"
    | "ic-card-menu"
    | "ic-reward-menu"
    | "ic-setting-menu"
    | "ic-logout-menu";
  active?: boolean;
}
export default function MenuItem(props: Partial<OverviewMenuItem>) {
  const { title, icon, active } = props;
  const classItem = cx({
    item: true,
    "mb-30": true,
    active: active,
  });
  return (
    <div className={classItem}>
      <Image
        src={`/icon/${icon}.svg`}
        alt="iconMenu"
        height={25}
        width={25}
        className="me-3"
      />
      <p className="item-title m-0">
        <Link href="" className="text-lg text-decoration-none">
          {title}
        </Link>
      </p>
    </div>
  );
}

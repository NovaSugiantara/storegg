import cx from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

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
}

export default function MenuItem(props: Partial<OverviewMenuItem>) {
  const { title, icon } = props;
  let linkTitle = title?.toLowerCase();
  if (title === "Setting") {
    linkTitle = "edit-profile";
  } else if (title === "Overview") {
    linkTitle = "";
  } else if (title === "Logout") {
    linkTitle = "logout";
  }

  const router = useRouter();

  const classItem = cx({
    item: true,
    "mb-30": true,
    active:
      (linkTitle === "" && router.asPath === "/member") ||
      (linkTitle !== "" && router.asPath === `/member/${linkTitle}`) ||
      (linkTitle !== "" && router.asPath === `/member/${linkTitle}/detail`),
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
        <Link
          href={title === "Logout" ? `/${linkTitle}` : `/member/${linkTitle}`}
          className="text-lg text-decoration-none"
        >
          {title}
        </Link>
      </p>
    </div>
  );
}

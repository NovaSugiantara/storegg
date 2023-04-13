import Link from "next/link";
import cx from "classnames";

interface Tab {
  title: string;
  active: boolean;
  filter: string;
  onFilterClick: (filter: string) => void;
}

export default function ButtonTab(props: Tab) {
  const { title, active, filter, onFilterClick } = props;
  const btnClass = cx({
    "btn btn-status rounded-pill text-sm me-3": true,
    "btn-active": active,
  });

  const handleClick = () => {
    onFilterClick(filter);
  };
  return (
    <>
      <Link
        data-filter={filter}
        href="#"
        className={btnClass}
        onClick={handleClick}
      >
        {title}
      </Link>
    </>
  );
}

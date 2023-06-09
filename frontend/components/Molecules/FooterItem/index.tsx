import Link from "next/link";
import slugify from "slugify";

interface FooterItemProps {
  title: string;
  name: string[];
}
export default function index(props: FooterItemProps) {
  const { title, name } = props;
  return (
    <div className="col-md-4 col-6 mb-lg-0 mb-25">
      <p className="text-lg fw-semibold color-palette-1 mb-12">{title}</p>
      <ul className="list-unstyled">
        <li className="mb-6 my-6">
          {name.map((item) => (
            <Link
              href={`/${slugify(item, { lower: true })}`}
              className="text-lg color-palette-1 text-decoration-none"
            >
              {item} <br />
            </Link>
          ))}
        </li>
      </ul>
    </div>
  );
}

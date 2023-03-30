import slugify from "slugify";

interface FooterItemProps {
  title: string;
  links: { label: string; value: string }[];
}

export default function FooterItem(props: FooterItemProps) {
  const { title, links } = props;

  return (
    <div className="col-md-4 col-12 mt-lg-0 mt-md-0 mt-25">
      <p className="text-lg fw-semibold color-palette-1 mb-12">{title}</p>
      <ul className="list-unstyled">
        {links.map((link) => {
          if (link.label === "Maps") {
            return (
              <li className="mb-6 my-6" key={link.label}>
                <a
                  href={`https://www.google.com/maps?q=${slugify(link.value, {
                    lower: true,
                  })}`}
                  className="text-lg color-palette-1 text-decoration-none"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.value} <br />
                </a>
              </li>
            );
          } else if (link.label === "Phone") {
            return (
              <li className="mb-6 my-6" key={link.label}>
                <a
                  href={`tel:${link.value}`}
                  className="text-lg color-palette-1 text-decoration-none"
                >
                  {link.value} <br />
                </a>
              </li>
            );
          } else {
            return (
              <li className="mb-6 my-6" key={link.label}>
                <a
                  href={`mailto:${link.value}`}
                  className="text-lg color-palette-1 text-decoration-none"
                >
                  {link.value} <br />
                </a>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}

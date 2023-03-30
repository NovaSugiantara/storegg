import Image from "next/image";
import Link from "next/link";
import slugify from "slugify";

interface GameItemProps {
  title: string;
  platform: string;
  thumbnail: string;
}
export default function index(props: GameItemProps) {
  const { title, platform, thumbnail } = props;
  return (
    <>
      <div className="featured-game-card position-relative">
        <Link
          href={`/details/${slugify(title, { lower: true })}`}
          as={`/details/${slugify(title, { lower: true })}`}
        >
          <div className="blur-sharp">
            <Image
              src={`/img/${thumbnail}.png`}
              width={205}
              height={270}
              alt="ThumbnailGame"
              className="thumbnail"
            />
          </div>
          <div className="cover position-absolute bottom-0 m-32">
            <div className="d-flex flex-column h-100 justify-content-between text-decoration-none">
              <div className="game-icon mx-auto">
                <img
                  src="/icon/console.svg"
                  width={54}
                  height={36}
                  alt="console"
                />
              </div>
              <div>
                <p className="fw-semibold text-white text-xl m-0">{title}</p>
                <p className="fw-light text-white m-0">{platform}</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

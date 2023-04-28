import Image from "next/image";
import Link from "next/link";
import slugify from "slugify";

function getSlug(title: string): string {
  if (!title || typeof title !== "string") {
    console.error("Invalid argument: title should be a string.");
    return "";
  }
  return slugify(title, { lower: true });
}

export interface GameItemProps {
  title: string;
  platform: string;
  thumbnail: string;
}
export default function FeaturedGame(props: GameItemProps) {
  const { title, platform, thumbnail } = props;
  const slug = getSlug(title);
  const thumbnails = `/img/${thumbnail}.png`;
  return (
    <>
      <div className="featured-game-card position-relative">
        <Link href={`/details/${slug}`} as={`/details/${slug}`}>
          <div className="blur-sharp">
            <Image
              src={thumbnail}
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

import GameCover from "../../Molecules/FeaturedGame";

export default function index() {
  return (
    <>
      <section className="featured-game pt-50 pb-50">
        <div className="container-fluid">
          <h2 className="text-4xl fw-bold color-palette-1 mb-30">
            Our Featured
            <br /> Games This Year
          </h2>
          <div
            className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4 no--x-scrollbar"
            data-aos="fade-up"
          >
            <GameCover
              title="PUBG Mobile"
              platform="Mobile"
              thumbnail="/img/Thumbnail-1.png"
            />
            <GameCover
              title="Call Of Duty Mobile"
              platform="Mobile"
              thumbnail="/img/Thumbnail-2.png"
            />
            <GameCover
              title="Mobile Legend Bang Bang"
              platform="Mobile"
              thumbnail="/img/Thumbnail-3.png"
            />
            <GameCover
              title="Clash Of Clans"
              platform="Mobile"
              thumbnail="/img/Thumbnail-4.png"
            />
            <GameCover
              title="Valorant"
              platform="PC"
              thumbnail="/img/Thumbnail-5.png"
            />
          </div>
        </div>
      </section>
    </>
  );
}

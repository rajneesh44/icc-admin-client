import Navbar from "./Navbar";

const videos: object[] = [
  {
    title:
      "Warne bowling to Ponting with Healy behind the stumps! | Wicket Keeping Masterclass | Part 2 🏏",
    src: "https://www.youtube.com/embed/V2sg7vF8xa0",
  },
  {
    title:
      "Virat Kohli: The Complete Batsman | Batting masterclass with Kohli &amp; Nasser Hussain",
    src: "https://www.youtube.com/embed/m8u-18Q0s7I",
  },
  {
    title:
      "What&#39;s it like to face a Murali spin delivery? | Muttiah Muralitharan Bowling Masterclass | Part 2",
    src: "https://www.youtube.com/embed/_86wgCOFi-c",
  },
  {
    title: "How the New Ball Swings | Wicket to Wicket | BYJU’S",
    src: "https://www.youtube.com/embed/ylu7kdmakTA",
  },
];
const LearningVideos = () => {
  return (
    <div>
      <Navbar />
      <div className="container" id="products-container">
        <div className="product-heading-parent">
          <div className="prodcuts-heading">
            <h2>Tutorials</h2>
          </div>
        </div>
        <div className="hl"></div>
        {videos.map((video: any) => {
          return (
            <iframe
              key={video.title}
              width="400"
              height="250"
              src={video.src}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          );
        })}
      </div>
    </div>
  );
};

export default LearningVideos;

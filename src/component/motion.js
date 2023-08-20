import "./Motion.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navwork from "./Navwork";
import Footer from "./Footer";

function Motion() {
  const motion = [
    //myQuest
    {
      id: 1,
      url: "https://cdn.discordapp.com/attachments/1141697331700432997/1141697407965474956/motion.jpg",
      title: "3D Layer",
      link: "https://youtu.be/1bqO8MMyq90",
    },
    {
      id: 2,
      url: "https://cdn.discordapp.com/attachments/1141697331700432997/1141697408200347680/motion2.jpg",
      title: "Lyric Music",
      link: "https://youtu.be/qOT8ISbqmFk",
    },
    {
      id: 3,
      url: "https://cdn.discordapp.com/attachments/1141697331700432997/1141697408556875817/motion3.jpg",
      title: "Puppet Zoo",
      link: "https://youtu.be/_4bkDSGxLt4",
    },
  ];

  return (
    <>
      <Navwork />

      <div className="container px-4" style={{ marginBottom: "5%" }}>
        {motion.map((item) => (
          <>
            <div
              style={{
                margin: "5% 0",
                textAlign: "center",
              }}
            >
              <h1 style={{ fontWeight: "bold" }}>{item.title}</h1>
            </div>
            <div
              className="row justify-content-center motion-hover"
              key={item.id}
              style={{ position: "relative" }}
            >
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <img className="img-fluid" src={item.url} alt="" />
                <div className="view-motion">
                  <button type="button" class="btn btn-outline-dark btn-lg">
                    View
                  </button>
                </div>
              </a>
            </div>
          </>
        ))}
      </div>

      <Footer />
    </>
  );
}

export default Motion;

import "./Visual.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navwork from "./Navwork";
import Footer from "./Footer";

function Visual() {
  const visual = [
    //myQuest
    {
      id: 1,
      title: "Visual Effects Showreel",
      url: "https://cdn.discordapp.com/attachments/1141753260001202297/1141753307329724426/visual4.jpg",
      link: "https://youtu.be/4qR-_j1CbCk",
    },
    {
      id: 2,
      title: "Compositing",
      url: "https://cdn.discordapp.com/attachments/1141753260001202297/1141753306386014258/visual.jpg",
      link: "https://youtu.be/z04UR2yHZlI",
    },
    {
      id: 3,
      title: "Keying",
      url: "https://cdn.discordapp.com/attachments/1141753260001202297/1141753306713161768/visual2.jpg",
      link: "https://youtu.be/xBuu2c59cKA",
    },
    {
      id: 4,
      title: "Object Tracking Hologram",
      url: "https://cdn.discordapp.com/attachments/1141753260001202297/1141753306981605456/visual3.jpg",
      link: "https://youtu.be/s3Eszkx7XD8",
    },
  ];

  return (
    <>
      <Navwork />

      <div className="container px-4" style={{ marginBottom: "5%" }}>
        {visual.map((item) => (
          <>
            <div style={{ margin: "5% 0", textAlign: "center" }}>
              <h1>{item.title}</h1>
            </div>
            <div
              className="row justify-content-center visual-hover"
              key={item.id}
              style={{ position: "relative" }}
            >
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <img className="img-fluid" src={item.url} alt="" />
                <div className="view-visual">
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

export default Visual;

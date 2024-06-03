import "../../style/visual.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavWork from "../../component/NavWork";
import Footer from "../../component/Footer";

function Visual() {
  const visual = [
    {
      id: 1,
      title: "Visual Effects Showreel",
      pic_url:
        "https://cdn.discordapp.com/attachments/1141753260001202297/1141753307329724426/visual4.jpg?ex=65fc5021&is=65e9db21&hm=7e765d6e42e80ed4f5f118af482f727d694f4f32b60f07519da2c37dca6988f6&",
      vdo_url: "https://youtu.be/4qR-_j1CbCk",
    },
    {
      id: 2,
      title: "Compositing",
      pic_url:
        "https://cdn.discordapp.com/attachments/1141753260001202297/1141753306386014258/visual.jpg?ex=65fc5020&is=65e9db20&hm=5972a2c4772bdd73da3ca9d8fa706c6814c8fa330b92da8e713fa3fe4963a389&",
      vdo_url: "https://youtu.be/z04UR2yHZlI",
    },
    {
      id: 3,
      title: "Keying",
      pic_url:
        "https://cdn.discordapp.com/attachments/1141753260001202297/1141753306713161768/visual2.jpg?ex=65fc5021&is=65e9db21&hm=40bafbe5e87b35878f2217fc1e3eda9ba4accd8dc53d96d19273fc7a96c6916a&",
      vdo_url: "https://youtu.be/xBuu2c59cKA",
    },
    {
      id: 4,
      title: "Object Tracking Hologram",
      pic_url:
        "https://cdn.discordapp.com/attachments/1141753260001202297/1141753306981605456/visual3.jpg?ex=65fc5021&is=65e9db21&hm=cdb7acbfa607d465e715ce85421b20ef6d5cd893122ee29dd5c1d8d9c2b37669&",
      vdo_url: "https://youtu.be/s3Eszkx7XD8",
    },
  ];

  return (
    <>
      <NavWork />

      <div className="container px-4" style={{ marginBottom: "5%" }}>
        {visual.map((item, index) => (
          <div key={index}>
            <div style={{ margin: "5% 0", textAlign: "center" }}>
              <h1>{item.title}</h1>
            </div>
            <div
              className="row justify-content-center visual-hover"
              key={item.id}
              style={{ position: "relative" }}
            >
              <a href={item.vdo_url} target="_blank" rel="noopener noreferrer">
                <img className="img-fluid" src={item.pic_url} alt="" />
                <div className="view-visual">
                  <button type="button" className="btn btn-outline-dark btn-lg">
                    View
                  </button>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
}

export default Visual;

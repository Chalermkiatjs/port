import "../../CSS/motion.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navwork from "../../component/Navwork";
import Footer from "../../component/Footer";

function Motion() {
  const motion = [
    //myQuest
    {
      id: 1,
      url: "https://cdn.discordapp.com/attachments/1141697331700432997/1141697407965474956/motion.jpg?ex=65fc1c11&is=65e9a711&hm=1b654fbfbd2ac7c177d2b8a6e4ecc9e48eb18fc52b20591a527fff2b52c56d54&",
      title: "3D Layer",
      link: "https://youtu.be/1bqO8MMyq90",
    },
    {
      id: 2,
      url: "https://cdn.discordapp.com/attachments/1141697331700432997/1141697408200347680/motion2.jpg?ex=65fc1c11&is=65e9a711&hm=073e01e4173d9fff789443c01e5ad2be79d600fb635b426991983e9284f329c8&",
      title: "Lyric Music",
      link: "https://youtu.be/qOT8ISbqmFk",
    },
    {
      id: 3,
      url: "https://cdn.discordapp.com/attachments/1141697331700432997/1141697408556875817/motion3.jpg?ex=65fc1c11&is=65e9a711&hm=9e6db6d792b993ad15044a0a53cf22ffd81f3a18081005c3c16ade5c71f69d52&",
      title: "Puppet Zoo",
      link: "https://youtu.be/_4bkDSGxLt4",
    },
  ];

  return (
    <>
      <Navwork />
      <div className="container px-4" style={{ marginBottom: "5%" }}>
        {motion.map((item) => (
          <div key={item.id}>
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

export default Motion;

import "../../CSS/coding.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navwork from "../../component/Navwork";
import Footer from "../../component/Footer";

function Coding() {
  const webProject = {
    url: "https://cdn.discordapp.com/attachments/1141414645656203284/1141414697040621598/webpg0.png?ex=65fb14c6&is=65e89fc6&hm=6939ece8b25824d713d90813995ee5a240a8c6d2e8ecfaa4c11a8fe1bd417f06&",
    link: "https://kj-website-70136.web.app/",
    text: "KJ Dreamboy is a web project developed as part of a Web Development course. The project aims to showcase the diverse works and talents of the 10 members within the group. It has been built using HTML, CSS, and JavaScript to create and present various content on the website.",
  };

  const inventor = {
    url: "https://cdn.discordapp.com/attachments/1141647816205271090/1141647884857659423/inventor1.png?ex=65fbedf2&is=65e978f2&hm=a83e8c2d3b246b59bc767e6f9b9797f143f9673d729dcf05251bea9d22284dda&",
    url2: "https://cdn.discordapp.com/attachments/1141647816205271090/1141647885398720603/inventor2.png?ex=65fbedf2&is=65e978f2&hm=fa5cf6e1057b029f589610e704ce8930101689429495fb86d32a1dfe180f3d6e&",
    url3: "https://cdn.discordapp.com/attachments/1141647816205271090/1141647885847506985/inventor3.png?ex=65fbedf2&is=65e978f2&hm=1f07dad38dab35b5a88f30900dd7d28226118f9766e21ebddede4ee7a6ac5925&",
    link: "https://cdn.discordapp.com/attachments/374447878510215169/1141036187784597585/discrete.apk",
    text: "The Vending Machine is an application designed for the Android operating system using MIT App Inventor. It allows users to interact with a virtual vending machine, offering various functions such as coin insertion, snack selection, change calculation, and the process of dispensing both change and selected snacks from the machine. The application's logic is built using visual programming blocks within the MIT App Inventor framework.",
  };

  return (
    <>
      <Navwork />
      <div className="container px-4">
        <div style={{ margin: "5% 0 ", textAlign: "center" }}>
          <h1>Project Website</h1>
        </div>
        <div className="row justify-content-center">
          <div className="col code-hover">
            <div
              style={{
                marginBottom: "3% ",
              }}
            >
              <a
                href={webProject.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="img-fluid" src={webProject.url} alt="" />
              </a>
            </div>
          </div>

          <div style={{ textAlign: "center", fontSize: "20px" }}>
            <h2 style={{ paddingBottom: "20px", fontWeight: "bold" }}>
              About the website
            </h2>
            <p>{webProject.text}</p>
            <a href={webProject.link} target="_blank" rel="noopener noreferrer">
              <button type="button" className="btn btn-outline-dark">
                View the page
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* App inventor */}

      <div className="container px-4" style={{ marginBottom: "5%" }}>
        <div style={{ margin: "5% 0 ", textAlign: "center" }}>
          <h1>Vending Machine Android App</h1>
        </div>
        <div className="row justify-content-center">
          <div className="col code-hover">
            <div
              style={{
                marginBottom: "3% ",
              }}
            >
              <a href={inventor.url}>
                <img className="img-fluid " src={inventor.url} alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col code-hover">
            <a href={inventor.url2} alt="">
              <img className="img-fluid" src={inventor.url2} alt="" />
            </a>
          </div>
          <div className="col code-hover">
            <a href={inventor.url3} alt="">
              <img className="img-fluid" src={inventor.url3} alt="" />
            </a>
          </div>
          <div style={{ textAlign: "center", fontSize: "20px" }}>
            <h2
              style={{
                paddingTop: "30px",
                paddingBottom: "20px",
                fontWeight: "bold",
              }}
            >
              About the application
            </h2>
            <p>{inventor.text}</p>
            <a href={inventor.link} target="_blank" rel="noopener noreferrer">
              <button type="button" className="btn btn-outline-dark">
                Download application (.apk file)
              </button>
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Coding;

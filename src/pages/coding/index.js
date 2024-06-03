import "../../style/coding.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavWork from "../../component/NavWork";
import Footer from "../../component/Footer";
import { CodingConfig } from "../../config/CodingConfig";

function Coding() {
  return (
    <>
      <NavWork />
      {CodingConfig.map((item) => (
        <div className="container px-4">
          <div style={{ margin: "5% 0 ", textAlign: "center" }}>
            <h1>{item.title}</h1>
          </div>
          <div className="row justify-content-center">
            {item.images.map((image) => (
              <div className="col code-hover">
                <div
                  style={{
                    marginBottom: "3% ",
                  }}
                >
                  <a
                    href={image.path}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="img-fluid"
                      src={image.path}
                      alt={image.alt}
                    />
                  </a>
                </div>
              </div>
            ))}
            <div style={{ textAlign: "center", fontSize: "20px" }}>
              <h2 style={{ paddingBottom: "20px", fontWeight: "bold" }}>
                {item.subtitle}
              </h2>
              <p>{item.description}</p>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <button type="button" className="btn btn-outline-dark">
                  View the page
                </button>
              </a>
            </div>
          </div>
        </div>
      ))}
      <Footer />
    </>
  );
}

export default Coding;

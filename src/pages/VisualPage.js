import "../style/visual.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { VisualConfig } from "../config/VisualConfig";

const VisualPage = () => {
  return (
    <>
      <div className="container px-4" style={{ marginBottom: "5%" }}>
        {VisualConfig.map((item) => (
          <div key={item.name}>
            <div style={{ margin: "5% 0", textAlign: "center" }}>
              <h1>{item.title}</h1>
            </div>
            {item.images.map((image) => (
              <div
                key={image.alt}
                className="row justify-content-center visual-hover"
                style={{ position: "relative" }}
              >
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <img className="img-fluid" src={image.path} alt={image.alt} />
                  <div className="view-visual">
                    <button
                      type="button"
                      className="btn btn-outline-dark btn-lg"
                    >
                      View
                    </button>
                  </div>
                </a>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};
export default VisualPage;

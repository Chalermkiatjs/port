import "style/coding.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { CodingConfig } from "config/CodingConfig";
const CodingPage = () => {
  return (
    <>
      {CodingConfig.map((item) => (
        <div key={item.name} className="container px-4">
          <div style={{ margin: "5% 0 ", textAlign: "center" }}>
            <h1>{item.title}</h1>
          </div>
          <div className="row justify-content-center">
            {item.images.map((image) => (
              <div key={image.alt} className="col code-hover">
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
              <a
                href={item.link}
                target={item.type === "download" ? "_self" : "_blank"}
                rel="noopener noreferrer"
              >
                <button type="button" className="btn btn-outline-dark">
                  {item.type === "download" ? "Download" : "View the page"}
                </button>
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
export default CodingPage;

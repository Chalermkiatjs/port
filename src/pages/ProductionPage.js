import "style/production.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ProductionConfig } from "config/ProductionConfig";

const ProductionPage = () => {
  return (
    <>
      {ProductionConfig.map((item) => (
        <div className="container px-4" key={item.name}>
          <div style={{ margin: "5% 0", textAlign: "center" }}>
            <h1>{item.title}</h1>
          </div>
          {["myQuest", "amarinTV"].includes(item.name) ? (
            <div className="row gx-5 row-cols-1 row-cols-lg-3 g-2 g-lg-3">
              {item.images.map((image) => (
                <div className="col product-hover" key={image.alt}>
                  <a href={image.link} target="_blank" rel="noreferrer">
                    <div
                      className="product-box-shadow"
                      style={{
                        marginBottom: "5% ",
                        position: "relative",
                      }}
                    >
                      <img
                        className="img-fluid"
                        src={image.path}
                        alt={image.alt}
                      />
                      <div className="view-product">
                        <button
                          type="button"
                          className="btn btn-outline-dark btn-lg"
                        >
                          View
                        </button>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          ) : (
            <div className="row gx-5 g-2 g-lg-3">
              {item.images.map((image) => (
                <div
                  className="col product-hover "
                  key={image.alt}
                  style={{ position: "relative" }}
                >
                  <div>
                    <a
                      href={image.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="img-fluid"
                        src={image.path}
                        alt={image.alt}
                      />
                      <div className="view-product">
                        <button
                          type="button"
                          className="btn btn-outline-dark btn-lg"
                        >
                          View
                        </button>
                      </div>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </>
  );
};
export default ProductionPage;

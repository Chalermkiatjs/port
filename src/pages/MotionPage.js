import "style/motion.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { MotionConfig } from "config/MotionConfig";

const MotionPage = () => {
  return (
    <>
      <div className="container px-4" style={{ marginBottom: "5%" }}>
        {MotionConfig.map((item) => (
          <div key={item.name}>
            <div
              style={{
                margin: "5% 0",
                textAlign: "center",
              }}
            >
              <h1 style={{ fontWeight: "bold" }}>{item.title}</h1>
            </div>
            {item.images.map((image) => (
              <div
                key={image.alt}
                className="row justify-content-center motion-hover"
                style={{ position: "relative" }}
              >
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <img className="img-fluid" src={image.path} alt={image.alt} />
                  <div className="view-motion">
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
export default MotionPage;

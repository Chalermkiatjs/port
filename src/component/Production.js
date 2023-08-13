import "./Production.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductionItems from "./ProductionItems";
import videos from "../data/productionData";
import Navbar from "./Navbar";

function Production() {
  const videoElements = videos.map((thumbnail, index) => {
    return <ProductionItems key={index} thumbnail={thumbnail} />;
  });
  return (
    <>
      <Navbar />
      <div className="container">
        {/* MyQuest */}
        <div style={{ paddingTop: "10%", textAlign: "center" }}>
          <h1>MyQuest OFFICIAL</h1>
        </div>
        <div className="row gx-5 mt-5">
          <div className="col p-0 pb-4">
            <div>{videoElements[0]}</div>
          </div>
          <div className="col p-0 pb-4">
            <div>{videoElements[1]}</div>
          </div>
          <div className="col p-0 pb-4">
            <div>{videoElements[2]}</div>
          </div>
          <div className="col p-0 pb-4">
            <div>{videoElements[3]}</div>
          </div>
          <div className="col p-0 pb-4">
            <div>{videoElements[4]}</div>
          </div>
          <div className="col p-0 pb-4">
            <div>{videoElements[5]}</div>
          </div>
          <div className="col p-0 pb-4">
            <div>{videoElements[6]}</div>
          </div>
        </div>
        {/* MyQuest End */}

        {/* Amarin */}
        <div style={{ paddingTop: "5%", textAlign: "center" }}>
          <h1>AmarinTV</h1>
        </div>
        <div className="row gx-5 mt-5">
          <div className="col p-0 pb-4">
            <div>{videoElements[0]}</div>
          </div>
          <div className="col p-0 pb-4">
            <div>{videoElements[1]}</div>
          </div>
          <div className="col p-0 pb-4">
            <div>{videoElements[2]}</div>
          </div>
          <div className="col p-0 pb-4">
            <div>{videoElements[3]}</div>
          </div>
          <div className="col p-0 pb-4">
            <div>{videoElements[4]}</div>
          </div>
          <div className="col p-0 pb-4">
            <div>{videoElements[5]}</div>
          </div>
          <div className="col p-0 pb-4">
            <div>{videoElements[6]}</div>
          </div>
        </div>
        {/* Amarin End */}
      </div>
    </>
  );
}

export default Production;

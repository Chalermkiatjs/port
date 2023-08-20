import "./Production.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navwork from "./Navwork";
import Footer from "./Footer";

function Production() {
  // const videoElements = videos.map((thumbnail, index) => {
  //   return <ProductionItems key={index} thumbnail={thumbnail} />;
  // });

  const myQuest = [
    //myQuest
    {
      id: 1,
      url: "https://cdn.discordapp.com/attachments/1140167029836492860/1140167089840201778/myQuest-01.jpg",
      vdo: "https://youtu.be/Etbri4SQ2OA",
    },
    {
      id: 2,
      url: "https://cdn.discordapp.com/attachments/1140167029836492860/1140167090234470410/myQuest-02.jpg",
      vdo: "https://youtu.be/8dtSby5kls0",
    },
    {
      id: 3,
      url: "https://cdn.discordapp.com/attachments/1140167029836492860/1140167090469339178/myQuest-03.jpg",
      vdo: "https://youtu.be/_7j9ek3dIPs",
    },
    {
      id: 4,
      url: "https://cdn.discordapp.com/attachments/1140167029836492860/1140167090687451198/myQuest-04.jpg",
      vdo: "https://youtu.be/J6Faw0Goqko",
    },
    {
      id: 5,
      url: "https://cdn.discordapp.com/attachments/1140167029836492860/1140167090964267068/myQuest-05.jpg",
      vdo: "https://youtu.be/JphIizTxgoo",
    },
    {
      id: 6,
      url: "https://cdn.discordapp.com/attachments/1140167029836492860/1140167091278848061/myQuest-06.jpg",
      vdo: "https://youtu.be/7EyHDhRLx78",
    },
    {
      id: 7,
      url: "https://cdn.discordapp.com/attachments/1140167029836492860/1140167091601813534/myQuest-07.jpg",
      vdo: "https://youtu.be/JuG3j-P0izE",
    },
  ];

  const amarinTV = [
    {
      id: 1,
      url: "https://cdn.discordapp.com/attachments/1141307095615029298/1141307141823664128/amarin_thumbnail.png",
      vdo: "https://youtu.be/7dDuVK-fL5U",
    },
    {
      id: 2,
      url: "https://cdn.discordapp.com/attachments/1141307095615029298/1141307142129852477/amarin_thumbnail2.png",
      vdo: "https://youtu.be/D59H5Tp15iY",
    },
    {
      id: 3,
      url: "https://cdn.discordapp.com/attachments/1141307095615029298/1141307142473789470/amarin_thumbnail3.png",
      vdo: "https://youtu.be/hpMR-IMMdyk",
    },
    {
      id: 4,
      url: "https://cdn.discordapp.com/attachments/1141307095615029298/1141363558341419029/amarin_thumbnail4.png",
      vdo: "https://youtu.be/MJkvFsAJVto",
    },
    {
      id: 5,
      url: "https://cdn.discordapp.com/attachments/1141307095615029298/1141363558635012106/amarin_thumbnail5.png",
      vdo: "https://youtu.be/VBFEOxz0mUQ",
    },
    {
      id: 6,
      url: "https://cdn.discordapp.com/attachments/1141307095615029298/1141363558953799832/amarin_thumbnail6.png",
      vdo: "https://youtu.be/DqfDFnGOKbI",
    },
    {
      id: 7,
      url: "https://cdn.discordapp.com/attachments/1141307095615029298/1141392206339518475/amarin_thumbnail7.png",
      vdo: "https://youtu.be/lAWM5wFG3x8",
    },
    {
      id: 8,
      url: "https://cdn.discordapp.com/attachments/1141307095615029298/1141392206754750556/amarin_thumbnail8.png",
      vdo: "https://youtu.be/fOfXnsBYn1M",
    },
    {
      id: 9,
      url: "https://cdn.discordapp.com/attachments/1141307095615029298/1141392207107076187/amarin_thumbnail9.png",
      vdo: "https://youtu.be/4sbnxVfyABY",
    },
    {
      id: 10,
      url: "https://cdn.discordapp.com/attachments/1141307095615029298/1141392241051582484/amarin_thumbnail10.png",
      vdo: "https://youtu.be/9qdmDalOx_I",
    },
    {
      id: 11,
      url: "https://cdn.discordapp.com/attachments/1141307095615029298/1141392241328398336/amarin_thumbnail11.png",
      vdo: "https://youtu.be/UNwXoj8pvSc",
    },
    {
      id: 12,
      url: "https://cdn.discordapp.com/attachments/1141307095615029298/1141392241592631346/amarin_thumbnail12.png",
      vdo: "https://youtu.be/n9eB-VSBDDo",
    },
  ];

  const mvSF = [
    {
      id: 1,
      url: "https://cdn.discordapp.com/attachments/1140167029836492860/1140268299674996887/DestinyHero.jpg",
      vdo: "https://youtu.be/l7cfGtqQdzM",
    },
    {
      id: 2,
      url: "https://cdn.discordapp.com/attachments/1140167029836492860/1140268299930832936/MV.jpg",
      vdo: "https://youtu.be/wSRP9V-UDHw",
    },
  ];

  return (
    <>
      <Navwork />

      {/* MyQuest */}
      <div className="container px-4">
        <div style={{ margin: "5% 0", textAlign: "center" }}>
          <h1>MyQuest OFFICIAL</h1>
        </div>
        <div className="row gx-5 row-cols-1 row-cols-lg-3 g-2 g-lg-3">
          {myQuest.map((item) => (
            <div className="col product-hover" key={item.id}>
              <a href={item.vdo} target="_blank">
                <div
                  style={{
                    marginBottom: "5% ",
                    position: "relative",
                  }}
                >
                  <img className="img-fluid" src={item.url} alt="" />
                  <div className="view-product">
                    <button type="button" class="btn btn-outline-dark btn-lg">
                      View
                    </button>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
      {/* MyQuest End*/}

      {/* AmarinTV */}
      <div className="container px-4">
        <div style={{ margin: "5% 0 ", textAlign: "center" }}>
          <h1>AmarinTV</h1>
        </div>
        <div className="row gx-5 row-cols-1 row-cols-lg-3 g-2 g-lg-3">
          {amarinTV.map((item) => (
            <div className="col product-hover" key={item.id}>
              <div style={{ marginBottom: "5% ", position: "relative" }}>
                <a href={item.vdo} target="_blank">
                  <img
                    className="img-fluid"
                    src={item.url}
                    style={{ border: "3px solid black", borderRadius: "5px" }}
                    alt=""
                  />
                  <div className="view-product">
                    <button type="button" class="btn btn-outline-dark btn-lg">
                      View
                    </button>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* AmarinTV End*/}

      {/* MV&SF */}
      <div className="container px-4" style={{ marginBottom: "5%" }}>
        <div style={{ margin: "5% 0", textAlign: "center" }}>
          <h1>Music Video & Short Film</h1>
        </div>
        <div className="row gx-5 g-2 g-lg-3">
          {mvSF.map((item) => (
            <div
              className="col product-hover"
              key={item.id}
              style={{ position: "relative" }}
            >
              <div>
                <a href={item.vdo} target="_blank" rel="noopener noreferrer">
                  <img className="img-fluid" src={item.url} alt="" />
                  <div className="view-product">
                    <button type="button" class="btn btn-outline-dark btn-lg">
                      View
                    </button>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* MV&SF End*/}

      {/* <Contact /> */}
      <Footer />
    </>
  );
}

export default Production;

import "../../CSS/production.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navwork from "../../component/Navwork";
import Footer from "../../component/Footer";

function Production() {
  const myQuest = [
    {
      id: 1,
      pic_url: "https://cdn.discordapp.com/attachments/1140167029836492860/1140167089840201778/myQuest-01.jpg?ex=65ffc559&is=65ed5059&hm=c90dc9a289d81a632bb45a0020deb39a965e8b97f4cb3709640f5cc39e92125e&",
      vdo_url: "https://youtu.be/Etbri4SQ2OA",
    },
    {
      id: 2,
      pic_url: "https://cdn.discordapp.com/attachments/1140167029836492860/1140167090234470410/myQuest-02.jpg?ex=65ffc559&is=65ed5059&hm=c7e4cdea95e7204c5465bce1a54121e0ffe6a79f5224f0007a5785b915757a59&",
      vdo_url: "https://youtu.be/8dtSby5kls0",
    },
    {
      id: 3,
      pic_url: "https://cdn.discordapp.com/attachments/1140167029836492860/1140167090469339178/myQuest-03.jpg?ex=65ffc559&is=65ed5059&hm=8faed4f420900132bf9d577c844a69800ca1b14661474bcf3dc28920a7f4a5b0&",
      vdo_url: "https://youtu.be/_7j9ek3dIPs",
    },
    {
      id: 4,
      pic_url: "https://cdn.discordapp.com/attachments/1140167029836492860/1140167090687451198/myQuest-04.jpg?ex=65ffc559&is=65ed5059&hm=ac996d1d5bcfc69042742897258add2bdb49840a3bf8e075a8aa7a57689f679f&",
      vdo_url: "https://youtu.be/J6Faw0Goqko",
    },
    {
      id: 5,
      pic_url: "https://cdn.discordapp.com/attachments/1140167029836492860/1140167090964267068/myQuest-05.jpg?ex=65ffc559&is=65ed5059&hm=ad5356f2f509aa3bb74458c08917efc657ff088c11f47b4032dd7349b956a8bf&",
      vdo_url: "https://youtu.be/JphIizTxgoo",
    },
    {
      id: 6,
      pic_url: "https://cdn.discordapp.com/attachments/1140167029836492860/1140167091278848061/myQuest-06.jpg?ex=65ffc559&is=65ed5059&hm=285af26675ec699176c81959b92bbc11ae1c749b58e64fcfea0822b988cd5330&",
      vdo_url: "https://youtu.be/7EyHDhRLx78",
    },
    {
      id: 7,
      pic_url: "https://cdn.discordapp.com/attachments/1140167029836492860/1140167091601813534/myQuest-07.jpg?ex=65ffc559&is=65ed5059&hm=4c72a8a83c15552dd8c9e30ef52a73db8ca5ed9368d88e0ecf4664c446762e54&",
      vdo_url: "https://youtu.be/JuG3j-P0izE",
    },
  ];

  const amarinTV = [
    {
      id: 1,
      pic_url: "https://cdn.discordapp.com/attachments/1141307095615029298/1141307141823664128/amarin_thumbnail.png?ex=6603eb1b&is=65f1761b&hm=9e9891ef86d69ead480cc411a60951f4c163a381b9ce0ffa038259cd751ffc9e&",
      vdo_url: "https://youtu.be/7dDuVK-fL5U",
    },
    {
      id: 2,
      pic_url: "https://cdn.discordapp.com/attachments/1141307095615029298/1141307142129852477/amarin_thumbnail2.png?ex=6603eb1b&is=65f1761b&hm=a2954fad0a1f917905c31a0e59f3761adc64ac07bfe3d8960694d7c0a57e41d5&",
      vdo_url: "https://youtu.be/D59H5Tp15iY",
    },
    {
      id: 3,
      pic_url: "https://cdn.discordapp.com/attachments/1141307095615029298/1141307142473789470/amarin_thumbnail3.png?ex=6603eb1b&is=65f1761b&hm=627195d7dbfaa0f42361917e16a9c507b189195239bfa230ccec5071d2b04b53&",
      vdo_url: "https://youtu.be/hpMR-IMMdyk",
    },
    {
      id: 4,
      pic_url: "https://cdn.discordapp.com/attachments/1141307095615029298/1141363558341419029/amarin_thumbnail4.png?ex=66041fa5&is=65f1aaa5&hm=eaf155e82846b308c2eaebdc4a2facbc5603f349e78bf7952cd8dd31306f9f5c&",
      vdo_url: "https://youtu.be/MJkvFsAJVto",
    },
    {
      id: 5,
      pic_url: "https://cdn.discordapp.com/attachments/1141307095615029298/1141363558635012106/amarin_thumbnail5.png?ex=66041fa5&is=65f1aaa5&hm=71ae34a436df49b7c228efec02234104227de926e1d385647e8407725ac75445&",
      vdo_url: "https://youtu.be/VBFEOxz0mUQ",
    },
    {
      id: 6,
      pic_url: "https://cdn.discordapp.com/attachments/1141307095615029298/1141363558953799832/amarin_thumbnail6.png?ex=66041fa5&is=65f1aaa5&hm=e747a83fc6474ddf0362382c671ef8a84a92c5c1b2ddc17df98603a75543d008&",
      vdo_url: "https://youtu.be/DqfDFnGOKbI",
    },
    {
      id: 7,
      pic_url: "https://cdn.discordapp.com/attachments/1141307095615029298/1141392206339518475/amarin_thumbnail7.png?ex=65faffd4&is=65e88ad4&hm=7ed2ac34be0eb3b0bf078d5ddf20bfccea3593b151c3d8a94ac7484762fa79e7&",
      vdo_url: "https://youtu.be/lAWM5wFG3x8",
    },
    {
      id: 8,
      pic_url: "https://cdn.discordapp.com/attachments/1141307095615029298/1141392206754750556/amarin_thumbnail8.png?ex=65faffd4&is=65e88ad4&hm=a335dc08b20fd87fddaa3e31d6280bdb8e0de85ef8d9e50f2ec867056988c98a&",
      vdo_url: "https://youtu.be/fOfXnsBYn1M",
    },
    {
      id: 9,
      pic_url: "https://cdn.discordapp.com/attachments/1141307095615029298/1141392207107076187/amarin_thumbnail9.png?ex=65faffd4&is=65e88ad4&hm=00fea3e0d887446ceec55badd023432142ec7464eb48af8f80c4adf533c233d6&",
      vdo_url: "https://youtu.be/4sbnxVfyABY",
    },
    {
      id: 10,
      pic_url: "https://cdn.discordapp.com/attachments/1141307095615029298/1141392241051582484/amarin_thumbnail10.png?ex=65faffdc&is=65e88adc&hm=b899f739e53e80a10aed1eb487b89b5078c219eb71623971e6b12a16e2d5d240&",
      vdo_url: "https://youtu.be/9qdmDalOx_I",
    },
    {
      id: 11,
      pic_url: "https://cdn.discordapp.com/attachments/1141307095615029298/1141392241328398336/amarin_thumbnail11.png?ex=65faffdc&is=65e88adc&hm=2e25f25d7af91bb9b7231bce5aeba82f130a18e38c641f29099600460ee8a446&",
      vdo_url: "https://youtu.be/UNwXoj8pvSc",
    },
    {
      id: 12,
      pic_url: "https://cdn.discordapp.com/attachments/1141307095615029298/1141392241592631346/amarin_thumbnail12.png?ex=65faffdc&is=65e88adc&hm=27449d595a866ed8c15ed48b86204081fafa1a540c1c1da22a44f5b50fc66843&",
      vdo_url: "https://youtu.be/n9eB-VSBDDo",
    },
  ];

  const mvSF = [
    {
      id: 1,
      pic_url: "https://cdn.discordapp.com/attachments/1140167029836492860/1140268299674996887/DestinyHero.jpg?ex=6600239b&is=65edae9b&hm=dacc33dc6d21ce9f0f1fd6afb3a238467fa68becd56a9518084d3813c3d7dd26&",
      vdo_url: "https://youtu.be/l7cfGtqQdzM",
    },
    {
      id: 2,
      pic_url: "https://cdn.discordapp.com/attachments/1140167029836492860/1140268299930832936/MV.jpg?ex=6600239b&is=65edae9b&hm=b56fde2e7ba671aac2560c944162e4c00670cbd718adf2ef93acdc9128d1f2ed&",
      vdo_url: "https://youtu.be/wSRP9V-UDHw",
    },
  ];

  return (
    <>
      <Navwork />
      <div className="container px-4">
        <div style={{ margin: "5% 0", textAlign: "center" }}>
          <h1>MyQuest OFFICIAL</h1>
        </div>
        <div className="row gx-5 row-cols-1 row-cols-lg-3 g-2 g-lg-3">
          {myQuest.map((item) => (
            <div className="col product-hover" key={item.id}>
              <a href={item.vdo_url} target="_blank" rel="noreferrer">
                <div
                  style={{
                    marginBottom: "5% ",
                    position: "relative",
                  }}
                >
                  <img className="img-fluid" src={item.pic_url} alt="" />
                  <div className="view-product">
                    <button type="button" className="btn btn-outline-dark btn-lg">
                      View
                    </button>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="container px-4">
        <div style={{ margin: "5% 0 ", textAlign: "center" }}>
          <h1>AmarinTV</h1>
        </div>
        <div className="row gx-5 row-cols-1 row-cols-lg-3 g-2 g-lg-3">
          {amarinTV.map((item) => (
            <div className="col product-hover" key={item.id}>
              <div style={{ marginBottom: "5% ", position: "relative" }}>
                <a href={item.vdo_url} target="_blank"  rel="noreferrer">
                  <img
                    className="img-fluid"
                    src={item.pic_url}
                    style={{ border: "3px solid black", borderRadius: "5px" }}
                    alt=""
                  />
                  <div className="view-product">
                    <button type="button" className="btn btn-outline-dark btn-lg">
                      View
                    </button>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
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
                <a href={item.vdo_url} target="_blank" rel="noopener noreferrer">
                  <img className="img-fluid" src={item.pic_url} alt="" />
                  <div className="view-product">
                    <button type="button" className="btn btn-outline-dark btn-lg">
                      View
                    </button>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Production;

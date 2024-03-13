import "../../CSS/home.css";

const textData = {
  title: "ABOUT THIS WEBSITE",
  about:
    "This website has been created to showcase the work of Chalermkiat Jaisuk. Additionally, it has been developed to enhance my skills in the field of web development. Through this project, I have utilized languages such as HTML, CSS, JavaScript, Bootstrap, and the React framework to further my abilities as a web developer.",
};

function Home() {
  return (
    <section>
      <div className="background" id="main">
        <div className="overlay"></div>
        <div className="container-home">
          <div className="text-box">
            <h1>{textData.title}</h1>
            <p>{textData.about}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;

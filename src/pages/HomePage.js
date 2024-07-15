import "style/home.css";
import "style/work.css";
import "style/about.css";
import {
  HiCodeBracket,
  HiFilm,
  HiRectangleGroup,
  HiFire,
} from "react-icons/hi2";
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <section>
      <div className="background" id="main">
        <div className="overlay"></div>
        <div className="container-home">
          <div className="text-box">
            <h1>ABOUT THIS WEBSITE</h1>
            <p>
              This website has been created to showcase the work of Chalermkiat
              Jaisuk. Additionally, it has been developed to enhance my skills
              in the field of web development. Through this project, I have
              utilized languages such as HTML, CSS, JavaScript, Bootstrap, and
              the React framework to further my abilities as a web developer.
            </p>
          </div>
        </div>
      </div>
      <div className="container-about" id="about">
        <div className="grid-container-about">
          <div className="grid-items-about">
            <img src="/images/me/me.jpg" alt="Me" className="img-responsive" />
          </div>
          <div className="grid-items-about">
            <h1 style={{ fontSize: 50, marginBottom:24 }}>About me</h1>
            <p>
              Hello, my name is <strong>Chalermkiat Jaisuk</strong> I'm 23 years old and
              graduated from King Mongkut’s University of Technology Thonburi
              with a major in Applied Computer Science-Multimedia.
            </p>
            <p>
              I am a <strong>Front-End Developer</strong> with experience in building a web
              applications for the digital financial company. Proficient in
              Javascript frameworks like Next.js and component libraries such as
              a Material UI, and eager to develop my skills to become a
              Full-Stack Developer.
            </p>
            {/* <a
              href="https://cdn.discordapp.com/attachments/1217507447510401064/1217507853779075172/CV.png?ex=6604478c&is=65f1d28c&hm=abf02aa6ba4eaa0434bc784f88a083272fb49d37b0d4084c61f872fc60a88cac&"
              className="press"
              rel="noopener noreferrer"
              target="_blank"
            >
              CV
            </a> */}
          </div>
        </div>
      </div>
      <div className="container-work" id="work">
        <div className="container-header">
          <h1>MY WORK</h1>
        </div>
        <div className="top-container-work">
          <Link to="/coding">
            <div className="flex-items-work">
              <div>
                <HiCodeBracket />
              </div>
              <h1>Coding</h1>
            </div>
          </Link>
          <Link to="/production">
            <div className="flex-items-work">
              <div>
                <HiFilm />
              </div>
              <h1>Production</h1>
            </div>
          </Link>
        </div>

        <div className="bottom-container-work">
          <Link to="/motion">
            <div className="flex-items-work">
              <div>
                <HiRectangleGroup />
              </div>
              <h1>Motion Graphics</h1>
            </div>
          </Link>
          <Link to="/visual">
            <div className="flex-items-work">
              <div>
                <HiFire />
              </div>
              <h1>Visual Effects</h1>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default HomePage;

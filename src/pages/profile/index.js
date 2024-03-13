import "../../CSS/about.css";

const aboutData = {
  title: "About me",
  detail1:
    "Hello, my name is Chalermkiat Jaisuk I'm 23 years old and graduated from King Mongkut’s University of Technology Thonburi with a major in Applied Computer Science-Multimedia.",
  detail2:
    "I am interested in working as a Frontend Developer with skills in HTML, CSS, JavaScript, React.js and Next.js. ",
};

function Profile() {
  return (
    <section>
      <div className="container-about" id="about">
        <div className="grid-container-about">
          <div className="grid-items-about">
            <img
              src="https://cdn.discordapp.com/attachments/1137658268920061954/1137658298066276422/me.jpg?ex=65ffdf5a&is=65ed6a5a&hm=cda638884f1b03aa4a92555f4b9027f70145eac919c6e891ebe678b21594247d&"
              alt="Me"
              className="img-responsive"
            />
          </div>
          <div className="grid-items-about">
            <h1 style={{ fontSize: 50 }}>{aboutData.title}</h1>
            <p>{aboutData.detail1}</p>
            <p>{aboutData.detail2}</p>
            <a
              href="https://cdn.discordapp.com/attachments/1217507447510401064/1217507853779075172/CV.png?ex=6604478c&is=65f1d28c&hm=abf02aa6ba4eaa0434bc784f88a083272fb49d37b0d4084c61f872fc60a88cac&"
              className="press"
              rel="noopener noreferrer"
              target="_blank"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;

import "./About.css";

const aboutData = {
  title: "About me",
  detail1:
    "Hello, my name is Chalermkiat Jaisuk I'm 23 years old and recently graduated from King Mongkut’s University of Technology Thonburi with a major in Applied Computer Science-Multimedia.",
  detail2:
    "I am interested in working as a Frontend Developer with skills in HTML, CSS, JavaScript, and React. As a result, I have created this portfolio website to showcase my work.",
};

function Profile() {
  return (
    <section>
      <div className="container-about" id="about">
        <div className="grid-container-about">
          <div className="grid-items-about">
            <img
              src="https://cdn.discordapp.com/attachments/1137658268920061954/1137658298066276422/me.jpg"
              alt="Me"
              className="img-responsive"
            />
          </div>
          <div className="grid-items-about">
            <h1 style={{ fontSize: 50 }}>{aboutData.title}</h1>
            <p>{aboutData.detail1}</p>
            <p>{aboutData.detail2}</p>
            <a
              href="https://cdn.discordapp.com/attachments/1137658268920061954/1143047070878552154/Resume.png"
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

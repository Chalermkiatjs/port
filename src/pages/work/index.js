import "../../style/work.css";
import {
  HiCodeBracket,
  HiFilm,
  HiRectangleGroup,
  HiFire,
} from "react-icons/hi2";

import { Link } from "react-router-dom";

function Work() {
  return (
    <section>
      <div className="container-work" id="work">
        <div className="container-header">
          <h1>MY WORK</h1>
        </div>
        <div className="top-container-work">
          {/* Coding content */}

          <Link to="/coding">
            <div className="flex-items-work">
              <div>
                <HiCodeBracket />
              </div>
              <h1>Coding</h1>
            </div>
          </Link>
          <Link to="/production">
            {/* Production content */}
            <div className="flex-items-work">
              <div>
                <HiFilm />
              </div>
              <h1>Production</h1>
            </div>
          </Link>
        </div>

        <div className="bottom-container-work">
          {/* Motion content */}
          <Link to="/motion">
            <div className="flex-items-work">
              <div>
                <HiRectangleGroup />
              </div>
              <h1>Motion Graphics</h1>
            </div>
          </Link>
          <Link to="/visual">
            {/* Visual content */}
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
}

export default Work;

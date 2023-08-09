import "./Work.css"
import { HiCodeBracket, HiFilm, HiRectangleGroup, HiFire } from "react-icons/hi2";

function Work(){
    return (
        <section>
            <div className = "container-work">
                <div className = "flex-container-work">
                    <div className= "flex-items-header">
                        <h1>MY WORK</h1>
                    </div>
                    <div className= "flex-items-work">
                        <div><HiCodeBracket /></div>
                        <h1>Coding</h1>
                    </div>
                    <div className= "flex-items-work">
                        <div><HiFilm /></div>
                        <h1>Production</h1>
                    </div>
                    <div className= "flex-items-work">
                        <div><HiRectangleGroup /></div>
                        <h1>Motion Graphics</h1>
                    </div>
                    <div className= "flex-items-work">
                        <div><HiFire /></div>
                        <h1>Visual Effects</h1>
                    </div>
                </div>
            </div>
        </section>
    );

}

export default Work
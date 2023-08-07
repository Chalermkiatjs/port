import "./About.css"
function Profile(){
    return (
        <section>
            <div className = "container-about">
                <div className = "grid-container-about">
                    <div className= "grid-items-about">
                        <img src="https://cdn.discordapp.com/attachments/1137658268920061954/1137658298066276422/me.jpg"></img>
                    </div>
                    <div className= "grid-items-about">
                        <h1 style = {{fontSize:50}}>About me</h1>
                        <p>Hello, my name is Chalermkiat Jaisuk I'm 22 years old</p>
                        <a href="#" className="btn">Resume</a>
                    </div>
                    
                </div>
            </div>
        </section>
    );

}

export default Profile
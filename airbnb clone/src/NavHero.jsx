import "./App.css"

function NavHero(){
    return (
        <div className="nav-hero">
            <div className="navbar">
            <img className="airbnb-logo" 
                     src="airbnb.png"></img>
            </div>
            <div className="hero">
                <img src="airbnb-grid.png" width={396} height={232}></img>
            </div>
            <h1 className="hero-p">Online Experiences</h1>
            <p className="hero-p">Join unique interactive activities led by one-of-a-kind hosts--all without leaving home. 
            </p> 
        </div>
    )
}

export default NavHero
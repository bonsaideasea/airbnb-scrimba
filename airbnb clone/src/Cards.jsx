import "./App.css"

function Card(props){
    let badgeText
    if (props.card.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.card.location === "Online") {
        badgeText = "ONLINE"
    }
    

    return(
        <div className="card">
            {badgeText && <div className ="card-badge">{badgeText}</div>}
            <img src={props.card.coverImg} className="card-image"></img>    
            <div className="card-stats">
                <img src="star.png" className="star"></img>
                <span>{props.card.rating}</span>
                <span className="gray">({props.card.reviewCount}) • </span>
                <span className="gray">{props.card.location}</span>
            </div>
            <p className="card-title">{props.card.title}</p>
            <p className="card-price"><span className="bold"> From ${props.card.price}</span> / person</p>
        </div>
    )
}

export default Card
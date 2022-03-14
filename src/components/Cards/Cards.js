import "./Cards.css"

function Card (props) {
    return (
        <div className="card">
            <h3>{props.title}</h3>
            <img src={props.href} alt="" />
            <p>{props.description}</p>
            <button className="btn-danger">Click me</button>

        </div>
    )
}

export default Card
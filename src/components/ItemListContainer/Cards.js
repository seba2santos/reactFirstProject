import "./Cards.css"

function Card (greeting) {
    return (
        <>
            <h2 className="h2 title">{greeting.value}</h2>
          
        </>
    )
}

export default Card

import '../App.jsx'

function FlightCard(props){

    const {flight_status} = props?.data
    console.log(flight_status);
    return (
        <div>
            <p>{flight_status}</p>
        </div>
    )
}

export default FlightCard
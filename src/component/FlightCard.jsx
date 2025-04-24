
import '../App.jsx'

function FlightCard(props){

    const {arrival,departure,flight,flight_date,flight_status} = props.data 
    console.log(arrival);

    const dep = departure?.scheduled.slice(11,16)
    const arr= arrival?.scheduled.slice(11,16)

    function calu(dep,arr){
        const depp = dep.split(":")
        const arrr = arr.split(":")
        let total = []
        for( let i = 0;i<2;i++){
            total.push(arrr[i]-depp[i])
        }
        return total.join(":")  
    }
    const duration = calu(dep,arr)
    return (
        <div className=''>
            <div className='card-wrapper'>
                <div className='d-flex gap-5 justify-content-center align-items-center p-4 my-3 col'>
                    <div>
                        <h5>{flight?.codeshared?.airline_name}</h5>
                        <p>{flight?.codeshared?.flight_iata}</p>
                    </div>
                    <div>
                        <h4>{dep}</h4>
                        <p>{departure?.airport}</p>
                    </div>
                    <div className='duration'>
                        <p>{duration}</p>
                    </div>
                    <div>
                        <h4>{arr}</h4>
                        <p>{arrival?.airport}</p>
                    </div>
                    <div>
                        <h5>₹4500</h5>
                        <a href="">Book seat</a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default FlightCard
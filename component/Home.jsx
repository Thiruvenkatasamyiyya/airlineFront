import '../App.css'
import FlightCard from './FlightCard';
import { useGetFlightsQuery } from '../redux/api/flight'

function Home(){
    const {data,error,isLoading,isError} = useGetFlightsQuery()
    console.log(data?.data);
return (
    <div className=''>
        <div className=''>
            <h1>hello</h1>
            {data?.data ? data.data.map((element,index) => <FlightCard key={index} data = {element} />) 
            : console.log(".....loading")}
        </div>
    </div>
)
}

export default Home
import '../App.css'
import Filter from './Filter.jsx'
import Home from './Home'

function Workspace(){

    return(
        <div>
            <div className=''>
                <div className='workspace-wrapper row'>
                    <div className='col-4'>
                        <Filter/>
                    </div>
                    <div className='col-8'>
                        <Home/>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Workspace
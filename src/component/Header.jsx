import '../App.css'

function Header (){
    return(
        <div className=''>
            <div className=" p-3 mx-4">
                <div className="header-wrapper d-flex justify-content-between">
                    <div>
                        <img src='../assets/header/header.png' alt="" />
                    </div>
                    <div>
                        <a href="">Search destinaion</a>
                    </div>
                    <div className="d-flex gap-4">
                        <a href="">Destination</a>
                        <a href="">Activities</a>
                        <a href="">Sign up</a>
                        <a href="">Log In</a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Header
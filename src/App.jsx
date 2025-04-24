import Header from './component/Header'
import './App.css'
import Title from './component/Titile'
import Workspace from './component/Workspace'
import { BrowserRouter as Router,Routes,Route} from "react-router-dom"
function App() {

  return (
    <Router>
      <Header/>
      <main>
        <div className='container'>
        <Title/>
        <Workspace/>
        </div>
      </main>
    </Router>
)}

export default App

import logo from './logo.svg';
import './App.css';
import CrimeReport from './Webpages/crime-report';
import {Routes,Route} from 'react-router-dom'
import CrimeDetails from './Webpages/crimedeets';
function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path='/' element={<Home/>}/> */}
        <Route path='/' element={<CrimeReport/>}/>
        <Route path='/crimedetails' element={<CrimeDetails/>}/>
        {/* <Route path='/signin' element={<SignIn/>}/> */}
    </Routes>          
    </div>
  );
}

export default App;

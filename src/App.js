import './App.css';
import { Route, Routes} from 'react-router-dom';
// import SideBar from './components/SideBar/SideBar.js';
import PatientSummary from './components/PatientSummary/PatientSummary.js';
import PriorAuthorization from './components/PriorAuthorization/PriorAuthorization.js';
import ScoreCard from './components/ScoreCard/ScoreCard.js';
import Claims from './components/Claims/Claims.js';
function App() {
  return (
    
      <div className='App'>
        <div>
          <Routes>
            <Route path="/" element={<PatientSummary />} />
            <Route path="/PriorAuthorization" element={<PriorAuthorization />} />
            <Route path="/ScoreCard" element={<ScoreCard />} />
            <Route path="/Claims" element={<Claims />} />
          </Routes>
        </div>
      </div>
    
  );
}

export default App;

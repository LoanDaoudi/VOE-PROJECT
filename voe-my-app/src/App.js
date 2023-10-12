import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import Accueil from './Component/Global Component/Accueil';
import Compet from './Component/Compétitions/Competitions';
import Calendrier from './Component/Compétitions/Calendrier';
import Classement from './Component/Compétitions/Classements';
import Resultats from './Component/Compétitions/Resultats';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes> 
        <Route path="/" element={<Accueil />} />
        <Route path="/Competitions"element={<Compet/>}/>
        <Route path="/Competitions/Calendrier"element={<Calendrier/>}/>
        <Route path="/Competitions/Resultats"element={<Resultats/>}/>
        <Route path="/Competitions/Classement"element={<Classement/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

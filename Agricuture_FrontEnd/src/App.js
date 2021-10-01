import AddAgriEquipment from './components/Equipment/AddAgriEquipment';
import AgriEquipment from './components/Equipment/AllEquipment';
import Header from './components/Header';

import {BrowserRouter as Router, Route} from "react-router-dom"


function App() {
  return (
    <Router>
    <div> 
      <Header/>
      <Route path="/agriequipment/add" exact component = {AddAgriEquipment}></Route>
      <Route path="/agriequipment/all" exact component = {AgriEquipment}></Route>

    </div>
    </Router>
    
    
  );
}

export default App;

import AgriEquipment from './components/AgriEquipment';

import {BrowserRouter as Router, Route} from "react-router-dom"


function App() {
  return (
    <Router>
    <div> 
  
      <Route path="/agriequipment/add" exact component = {AgriEquipment}></Route>

    </div>
    </Router>
    
    
  );
}

export default App;

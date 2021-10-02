import Header from './components/Header';
import AddAgriEquipment from './components/Equipment/AddAgriEquipment';
import AgriEquipment from './components/Equipment/AllEquipment';
import AddAgriSeed from './components/Seed/AddAgriSeed';
import AgriSeed from './components/Seed/AllSeed';
import AddAgriPlant from './components/Plant/AddAgriPlant';
import AgriPlant from './components/Plant/AllPlant';
import AddAgriFertilizer from './components/Fertilizer/AddAgriFertilizer';
import AgriFertilizer from './components/Fertilizer/AllFertilizer';

import {BrowserRouter as Router, Route} from "react-router-dom"


function App() {
  return (
    <Router>
    <div> 
      <Header/>
      <Route path="/agriequipment/add" exact component = {AddAgriEquipment}></Route>
      <Route path="/agriequipment/all" exact component = {AgriEquipment}></Route>
      <Route path="/agriseed/add" exact component = {AddAgriSeed}></Route>
      <Route path="/agriseed/all" exact component = {AgriSeed}></Route>
      <Route path="/agriplant/add" exact component = {AddAgriPlant}></Route>
      <Route path="/agriplant/all" exact component = {AgriPlant}></Route>
      <Route path="/agrifertilizer/add" exact component = {AddAgriFertilizer}></Route>
      <Route path="/agrifertilizer/all" exact component = {AgriFertilizer}></Route>

    </div>
    </Router>
    
    
  );
}

export default App;

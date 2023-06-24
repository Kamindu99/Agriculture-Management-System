import Home from './components/HomePage';
import AdminHome from './components/AdminHome';
import Aboutus from './components/AboutUs';
import AddAgriEquipment from './components/Equipment/AddAgriEquipment';
import AgriEquipment from './components/Equipment/AllEquipment';
import EquipmentDetails from './components/Equipment/EquipmentDetails';
import AddAgriSeed from './components/Seed/AddAgriSeed';
import AgriSeed from './components/Seed/AllSeed';
import AddAgriPlant from './components/Plant/AddAgriPlant';
import AgriPlant from './components/Plant/AllPlant';
import AddAgriFertilizer from './components/Fertilizer/AddAgriFertilizer';
import AgriFertilizer from './components/Fertilizer/AllFertilizer';
import AddAgroChemical from './components/Agrochemical/AddAgroChemical';
import AllAgroChemicalAdmin from './components/Agrochemical/AllAgrochemicalAdmin';
import AgroChemical from './components/Agrochemical/AllAgroChemical';
import PlantDetails from './components/Plant/PlantDetails';
import FormExample from './components/AddItem';
import ContactUs from './components/Contactus';
import FeedBack from './components/FeedBack';
import AllEquipmentAdmin from './components/Equipment/AllEquipmentAdmin';
import AllFertilizerAdmin from './components/Fertilizer/AllFertilizerAdmin';
import AllPlantAdmin from './components/Plant/AllPlantAdmin';
import AllSeedAdmin from './components/Seed/AllSeedAdmin';
import EditAgroChemical from './components/Agrochemical/EditAgroChemical';
import EditAgriEquipment from './components/Equipment/EditAgriEquipment';
import EditAgriSeed from './components/Seed/EditAgriSeed';
import EditAgriPlant from './components/Plant/EditAgriPlant';
import EditAgriFertilizer from './components/Fertilizer/EditAgriFertilizer';

import {BrowserRouter as Router, Route} from "react-router-dom"
import Services from './components/Services';

function App() {
  return (
    <Router>
    <div> 
      <Route path="/" exact component = {Home}></Route>
      <Route path="/adminhome" exact component = {AdminHome}></Route>
      <Route path="/aboutus" exact component = {Aboutus}></Route>
      <Route path="/agriequipment/add" exact component = {AddAgriEquipment}></Route>
      <Route path="/agriequipment/edit/:id" exact component = {EditAgriEquipment}></Route>
      <Route path="/agriequipment/all" exact component = {AgriEquipment}></Route>
      <Route path="/agriequipment/details/:id" exact component ={EquipmentDetails} ></Route>
      <Route path="/admin/agriequipment/all" exact component = {AllEquipmentAdmin}></Route>
      <Route path="/agriseed/add" exact component = {AddAgriSeed}></Route>
      <Route path="/agriseed/edit/:id" exact component = {EditAgriSeed}></Route>
      <Route path="/agriseed/all" exact component = {AgriSeed}></Route>
      <Route path="/admin/agriseed/all" exact component = {AllSeedAdmin}></Route>
      <Route path="/agriplant/add" exact component = {AddAgriPlant}></Route>
      <Route path="/agriplant/edit/:id" exact component = {EditAgriPlant}></Route>
      <Route path="/agriplant/all" exact component = {AgriPlant}></Route>
      <Route path="/admin/agriplant/all" exact component = {AllPlantAdmin}></Route>
      <Route path="/agrifertilizer/add" exact component = {AddAgriFertilizer}></Route>
      <Route path="/agrifertilizer/edit/:id" exact component = {EditAgriFertilizer}></Route>
      <Route path="/agrifertilizer/all" exact component = {AgriFertilizer}></Route>
      <Route path="/admin/agrifertilizer/all" exact component = {AllFertilizerAdmin}></Route>
      <Route path="/agrochemical/add" exact component = {AddAgroChemical}></Route>
      <Route path="/agrochemical/all" exact component = {AgroChemical}></Route>
      <Route path="/admin/agrochemical/all" exact component = {AllAgroChemicalAdmin}></Route>
      <Route path="/agrochemical/edit/:id" exact component = {EditAgroChemical}></Route>
      <Route path="/plantdetails/:id" exact component = {PlantDetails}></Route>
      <Route path="/test" exact component = {FormExample}></Route>
      <Route path="/contactus" exact component = {ContactUs}></Route>
      <Route path="/feedback" exact component = {FeedBack}></Route>
      <Route path="/services" exact component = {Services}></Route>
    </div>
    </Router>
    
    
  );
}

export default App;

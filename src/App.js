import logo from './logo.svg';
import './App.css';
import Train from './Component/train/train';
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Specifictrain from './Component/train/specifictrain';

function App() {
  return (
    <div className="App">
      <h1>Test</h1>
      <h3>CA030 Central Railway station</h3>
      <Router>
      
      <Routes>
      <Route path='/' index element={<Train />}/>
      <Route path='/traindetails' element={<Specifictrain/>}/>
      </Routes>
      
    </Router>
    </div>
  );
}

export default App;

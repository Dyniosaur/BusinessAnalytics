import './App.css';
import BarGraph from './components/Bar';
import PieGraph from './components/Pie';
import LineGraph from "./components/Line"
import Sidebar from "./components/Sidebar"
import NavTop from './components/NavTop';

function App() {
  const data = {
    labels: ["XS", "S", "M", "L", "XL"],
    values: [20000, 75000, 90000, 50000, 15000],
  };


  return(
    <div style={{height:'100%', width:'100%'}}>
      <NavTop/>
      <div className="big-grid">
        <Sidebar/>

        <div className="heroDashboard">
          <div style={{width:'100%', height:'auto', backgroundColor:'rgb(46, 106, 255, 0.1)', borderRadius:'8px', padding:'12px'}}>
          <LineGraph data={data}/>
          </div>
          <div style={{width:'400px', height:'auto', backgroundColor:'rgb(46, 106, 255, 0.1)', borderRadius:'8px', padding:'12px'}}>
          <PieGraph data={data} />
          </div>
          <div style={{width:'100%', height:'auto', backgroundColor:'rgb(46, 106, 255, 0.1)', borderRadius:'8px', padding:'12px'}}>
          <BarGraph data={data} />
        </div>
      </div>
      </div>
    </div>
  )
}

export default App;

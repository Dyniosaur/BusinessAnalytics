import './App.css';
import BarGraph from './components/Bar';
import PieGraph from './components/Pie';
import LineGraph from "./components/Line"
import Sidebar from "./components/Sidebar"

function App() {
  const data = {
    labels: ["XS", "S", "M", "L", "XL"],
    values: [20000, 75000, 90000, 50000, 15000],
  };


  return(
    <div>
      <div style={{width: '1300px', height: '1300px', position:'absolute', left: '-700px', top: '-700px', backgroundColor: '#007ea7', borderRadius: "100%", opacity:'4%',}} className='blurOne'>
      </div>
      <div style={{width: '1300px', height: '1300px', position:'absolute', left: '-600px', top: '-600px', backgroundColor: '#7251EA', borderRadius: "100%", opacity:'1%', }} className='blurTwo'>
      </div>
      <div style={{width: '1300px', height: '1300px', position:'absolute', right: '-700px', bottom: '-700px', backgroundColor: '#007ea7', borderRadius: "100%", opacity:'4%', }} className='blurOne'>
      </div>
      <div style={{width: '1300px', height: '1300px', position:'absolute', right: '-600px', bottom: '-600px', backgroundColor: '#7251EA', borderRadius: "100%", opacity:'1%',}} className='blurTwo'>
      </div>


      <Sidebar/>

      <div className="heroDashboard">
        <div style={{ maxWidth: '90%', maxHeight: '200px', fontFamily:'Roboto', color:'white', backgroundColor:'rgba(0, 0, 0, 0.16)', borderRadius:'16px', alignSelf:'center', justifySelf:'center' }}>
        <LineGraph data={data} />
        </div>
        <div style={{ maxWidth: '90%', maxHeight: '200px', fontFamily:'Roboto', color:'white', backgroundColor:'rgba(0, 0, 0, 0.16)', borderRadius:'16px', alignSelf:'center', justifySelf:'center' }}>
        <PieGraph data={data} />
        </div>
      </div>
      <div style={{ minWidth: '40%', maxHeight: '100px', justifySelf:'center', alignSelf: 'center', fontFamily:'Roboto', color:'white', backgroundColor:'rgba(0, 0, 0, 0.16)', borderRadius:'16px', margin:'15px' }}>
        <BarGraph data={data} />
      </div>
    </div>
  )
}

export default App;

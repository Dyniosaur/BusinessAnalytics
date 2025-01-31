import './App.css';
import LineGraph from "./components/Line"

function App() {
  const data = {
    labels: ["XS", "S", "M", "L", "XL"],
    values: [20000, 75000, 90000, 50000, 15000],
  };


  return(
    <div>


      <div style={{width: '1300px', height: '1300px', position:'absolute', left: '-700px', top: '-700px', backgroundColor: '#281EE3', borderRadius: "100%", opacity:'15%' }} className='blurOne'>
      </div>


      <div style={{width: '1300px', height: '1300px', position:'absolute', left: '-600px', top: '-600px', backgroundColor: '#7251EA', borderRadius: "100%", opacity:'9%' }} className='blurTwo'>
      </div>


      <div style={{ maxWidth: '600px', maxHeight: '400px', justifySelf:'center', alignSelf: 'center' }}>
      <LineGraph data={data} />
      </div>

      
    </div>
  )
}

export default App;

import './App.css';
import LineGraph from "./components/Line"

function App() {
  const data = {
    labels: ["XS", "S", "M", "L", "XL"],
    values: [20000, 75000, 90000, 50000, 15000],
  };


  return(
    <div style={{ maxWidth: '600px', maxHeight: '400px', justifySelf:'center', alignSelf: 'center' }}>
      <LineGraph data={data} />
    </div>
  )
}

export default App;
